import boto3
import json
from decimal import Decimal

# connect to specific DynamoDB table in specific region
db = boto3.resource('dynamodb', region_name='us-west-1')
table = db.Table('site_hit')

# JSONEncoder - Make sure json.dumps works with the number.
class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return json.JSONEncoder.default(self, obj)


def lambda_handler(event, context):
    # SET UPDATE ITEM
    response = table.update_item(
        # CONNECT TO PKey Name in specific ROW
        Key={
            'site': '/'
        },
        # SET VAL = 1
        ExpressionAttributeValues={
            ':val': 1
        },
        # ADD 1 TO VIEW_COUNT
        UpdateExpression="SET view_count = view_count + :val",
        ReturnValues="UPDATED_NEW"
    )

    #RETURN IF STATUS CODE IS 200, Lambda respond that ADD 1 TO VIEW_COUNT
    return {
        'statusCode': 200,
        'body': json.dumps(response, cls=DecimalEncoder),
        'headers': {
            "Access-Control-Allow-Headers": "Content-Type",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS, PUT',
        }
    }
