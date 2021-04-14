import json
import boto3
import os

ddb = boto3.resource('dynamodb')
table = ddb.Table(os.environ['site_view_count'])
_lambda = boto3.client('lambda')


def handler(event, context):
    ddb.update_item(Key={"site": "http://bryantconti.com"},
        UpdateExpression='SET #oldCount = #oldCount + :newCount',
        ExpressionAttributeNames={'#oldCount': 'view_count'},
        ExpressionAttributeValues={':newCount': 1}
        )
