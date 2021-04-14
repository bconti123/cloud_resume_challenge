import json
import os
import boto3

ddb = boto3.resource('dynamodb')
table = ddb.Table(os.environ['site_visit_count'])
_lambda = boto3.client('lambda')


def handler(event, context):
    print('request: {}'.format(json.dumps(event)))
    table.update_item(
        Key={'https://bryantconti.com': event['https://bryantconti.com']},
        UpdateExpression='ADD view_count :incr',
        ExpressionAttributeValues={':incr': 1}
    )

    resp = _lambda.invoke(
        FunctionName=os.environ['DOWNSTREAM_FUNCTION_NAME'],
        Payload=json.dumps(event),
    )

    body = resp['Payload'].read()

    print('downstream response: {}'.format(body))
    return json.loads(body)
