from pprint import pprint
import unittest
import boto3
from botocore.exceptions import ClientError
from moto import mock_dynamodb2


@mock_dynamodb2
class TestDatabaseFunctions(unittest.TestCase):
    def setUp(self):
        """Create the mock database and table"""
        self.dynamodb = boto3.resource('dynamodb', region_name='us-east-1')

        from MoviesCreateTable import create_movie_table
        self.table = create_movie_table(self.dynamodb)

    def tearDown(self):
        """Delete mock database and table after test is run"""
        self.table.delete()
        self.dynamodb = None

    def test_table_exists(self):
        self.assertTrue(self.table)  # check if we got a result
        # check if the table name is 'Movies'
        self.assertIn('Movies', self.table.name)
        # pprint(self.table.name)

    def test_put_movie(self):
        from MoviesPutItem import put_movie

        result = put_movie("The Big New Movie", 2015,
                           "Nothing happens at all.", 0, self.dynamodb)

        self.assertEqual(200, result['ResponseMetadata']['HTTPStatusCode'])
        # pprint(result, sort_dicts=False)

    def test_get_movie(self):
        from MoviesPutItem import put_movie
        from MoviesGetItem import get_movie

        put_movie("The Big New Movie", 2015,
                  "Nothing happens at all.", 0, self.dynamodb)
        result = get_movie("The Big New Movie", 2015, self.dynamodb)

        self.assertEqual(2015, result['year'])
        self.assertEqual("The Big New Movie", result['title'])
        self.assertEqual("Nothing happens at all.", result['info']['plot'])
        self.assertEqual(0, result['info']['rating'])
        # pprint(result, sort_dicts=False)


if __name__ == '__main__':
    unittest.main()
