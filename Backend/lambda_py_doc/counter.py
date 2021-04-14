from decimal import Decimal
from pprint import pprint
import boto3


def increase_view(site, view_count, dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource(
            'dynamodb', endpoint_url="http://localhost:8000")

    table = dynamodb.Table('site_view_count')

    response = table.update_item(
        Key={
            'site': site,
            'view_count': view_count
        },
        UpdateExpression="set info.count = info.count + :val",
        ExpressionAttributeValues={
            ':val': Decimal(view_count)
        },
        ReturnValues="UPDATED_NEW"
    )
    return response


if __name__ == '__main__':
    update_response = increase_view("http://bryantconti.com", 1)
    print("Update site succeeded:")
    pprint(update_response, sort_dicts=False)
