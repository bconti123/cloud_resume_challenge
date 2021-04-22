from pprint import pprint
import unittest
import boto3
from botocore.exceptions import ClientError
from moto import mock_dynamodb2


@mock_dynamodb2
class TestDatabaseFunctions(unittest.TestCase):
    def setUp(self):
        """Create the mock database and table"""
        self.dynamodb = boto3.resource('dynamodb', region_name='us-west-1')

        from CreateTableDB import create_site_table
        self.table = create_site_table(self.dynamodb)

    #def tearDown(self):
     #   """Delete mock database and table after test is run"""
     #   self.table.delete()
     #   self.dynamodb = None

    def test_table_exists(self):
        self.assertTrue(self.table)  # check if we got a result
        # check if the table name is 'Movies'
        self.assertIn('site_hit', self.table.name)
        # pprint(self.table.name)


if __name__ == '__main__':
    unittest.main()
