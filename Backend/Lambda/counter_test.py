from add_counter import *

import unittest
import boto3
import botocore
from moto import mock_dynamodb2


@mock_dynamodb2
class TestDynamoDB(unittest.TestCase):

    def setUp(self):
        #First check if table already exists. If it already exists that mean we connected to real AWS env and not mock.
        try:
            dynamodb = boto3.resource("dynamodb")
            dynamodb.meta.client.describe_table(TableName='site_hit')
        except botocore.exceptions.ClientError:
            pass
        else:
            err = "{Table} should not exist.".format(Table='site_hit')
            raise EnvironmentError(err)

        table_name = 'site_hit'
        dynamodb = boto3.resource('dynamodb', 'us-west-1')

        table = dynamodb.create_table(
            TableName=table_name,
            KeySchema=[
                {
                    'AttributeName': 'site',
                    'KeyType': 'HASH'
                }
            ],
            AttributeDefinitions=[
                {
                    'AttributeName': 'site',
                    'AttributeType': 'S'
                }
            ],
            BillingMode='PAY_PER_REQUEST'
        )

    def event():
        pass

    def context():
        pass

    def test_getCounter(self):
        value1 = getViewCounter(self.event, self.context)
        json_str = json.dumps(value1, cls=DecimalEncoder)
        resp_dict = json.loads(json_str)
        self.assertTrue(int(resp_dict['body']) > 0)
        self.assertEqual(int(resp_dict['body']), 1)


if __name__ == '__main__':

    unittest.main()
