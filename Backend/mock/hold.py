
#def test_put_movie(self):
#from SitePutItem import put_movie

##result = put_movie("The Big New Movie", 2015,
##                 "Nothing happens at all.", 0, self.dynamodb)

#self.assertEqual(200, result['ResponseMetadata']['HTTPStatusCode'])
# pprint(result, sort_dicts=False)

def test_get_site(self):
    #from SitePutItem import put_movie
    from SiteGetItem import get_site

    #put_movie("The Big New Movie", 2015,
    #         "Nothing happens at all.", 0, self.dynamodb)
    result = get_site("/", self.dynamodb)

    #self.assertEqual(2015, result['view_count'])
    self.assertEqual("/", result['site'])
    # pprint(result, sort_dicts=False)
