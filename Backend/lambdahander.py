import boto3

def put_visitor(visitor_id):
    if not dynamodb:
        dynamodb = boto3.resource(
            'dynamodb', endpoint_url="")

        table = dynamodb.Table('VisitorHit')
        response = table.put_item(
            Item={
                'visitor_id': 1,
            }
        }
    )
    return response

if __name__ == '__main__':
    visit_resp = put_visitor(1)
    print("Put count succeeded:")
