import boto3
import json
from decimal import Decimal

# JSONEncoder - Make sure json.dumps works with the number.
class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return json.JSONEncoder.default(self, obj)


def updateViewCounter():

    # connect to specific DynamoDB table in specific region
    db = boto3.resource('dynamodb', region_name='us-west-1')
    table = db.Table('Site_ViewCount')
      
    # SET UPDATE ITEM
    response = table.update_item(
        # CONNECT TO PKey Name in specific ROW
        Key={
            'site': '/'
        },
        # SET VAL = 1
        AttributeUpdates={
            'view_count': {
                'Value': 1,
                'Action': 'ADD'
            }
        },
        ReturnValues="UPDATED_NEW"
    )
def getViewCounter(event, context):
    updateViewCounter()
    
    db = boto3.resource('dynamodb', region_name='us-west-1')
    table = db.Table('Site_ViewCount')
    # GET ITEM FROM 'site'
    response = table.get_item(Key={'site': '/'})
    item = response['Item']['view_count']
    print(item)
    json_str = json.dumps(item, indent=4, cls=DecimalEncoder)

    #using json.loads will turn your data into a python dictionary
    resp_dict = json.loads(json_str)

    #RETURN IF STATUS CODE IS 200, Lambda respond that ADD 1 TO VIEW_COUNT
    return {
        'statusCode': 200,
        'body': resp_dict,
        'headers': {
            'Access-Control-Allow-Origin': 'https://bryantconti.com',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,X-Amz-Security-Token,Authorization,X-Api-Key,X-Requested-With,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers',
            'Access-Control-Allow-Methods': 'GET,OPTIONS',
            'X-Requested-With': '*'
        }
    }

if __name__ == "__main__":
    
    getViewCounter()
