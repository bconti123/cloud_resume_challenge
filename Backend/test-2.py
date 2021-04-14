import boto3
import json


counter_table = boto3.resource('dynamodb').Table('site_visit_count')
response = counter_table.update_item(
    Key={'visitor_id': 'visitor_counter'},
    UpdateExpression="ADD counter_value :inc"
)

item = counter_table.get_item(Key={'site': 'view_count'})
count_views = item['Item']['counter_value']

def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        "body": json.dumps(item['Item']['counter_value'],
    }
