import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('site_visit_count')

body = table.scan()
items = body['Items']


def lambda_handler(event, context):

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': "ANY",
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json'
        },
        'body': json
        .dumps(items)
    }
