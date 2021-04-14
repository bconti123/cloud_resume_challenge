import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('VisitorHit')


def lambda_handler(event, context):

    response = table.get_item(Key={'visitor_id': 'visitor_counter'})

    count = response["Item"]["numberofvisits"]
    print("Get Response = ", response)
    print("Count = ", count)

    # increment string version of visit count
    new_count = str(int(count)+1)
    response = table.update_item(
        Key={'visitor_id': 'visitor_counter'},
        UpdateExpression='set numberofvisits = :c',
        ExpressionAttributeValues={':c': new_count},
        ReturnValues='UPDATED_NEW'
    )

    return {
        'body': new_count + ' views.',
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        }
    }
