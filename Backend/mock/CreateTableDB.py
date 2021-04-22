from pprint import pprint
import boto3


def create_site_table(dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource(
            'dynamodb', endpoint_url='http://localhost:8000')

    table = dynamodb.create_table(
        TableName='site_hit',
        BillingMode={
            'BillingMode': 'PAY_PER_REQUEST'  # <----- SET ON-DEMAND
        },
        KeySchema=[
            {
                'AttributeName': 'site',
                'KeyType': 'HASH'
            }
        ],
        AttributeDefinitions=[
            # Named 'site' and make it as String
            {
                'AttributeName': 'site',
                'AttributeType': 'S'
            },
            # Named 'view_count and make it as Number
            #{
             #   'AttributeName': 'view_count',
              #  'AttributeType': 'N'
            #}
        ]

    )

    # Wait until the table exists.
    table.meta.client.get_waiter('table_exists').wait(TableName='site_hit')
    assert table.table_status == 'ACTIVE'

    return table


if __name__ == '__main__':
    site_table = create_site_table()
    print("Table status:", site_table.table_status)
