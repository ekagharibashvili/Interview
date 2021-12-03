# API Keys vs OAuth Tokens vs JSON Web Tokens
## For an API to be a powerful extension of product, it almost certainly needs authentication.
## By building API calls that can read, write, and delete user data, you can magnify an app’s influence on its users’ lives. So, if authentication is a given, the method is 
## the real choice. The industry has finally learned not to share usernames and passwords, but there’s still more to figure out.

# API Keys: Great for Developer Quickstart
## In the earliest days of modern web APIs, the API key was all we had. It likely remains as the most common identifier, and is the first many developers consider when 
## restricting or tracking API traffic.
## The best thing about an API key is its simplicity
## You merely log in to a service, find your API key (often in the settings screen), and copy it to use in an application, test in the browser, or use with one of these 
## API request tools. Along with the simplicity, though, comes both security and user experience downsides to API keys.
## Typically, an API key gives full access to every operation an API can perform, including writing new data or deleting existing data. If you use the same API key in multiple 
## apps, a broken app could destroy your users' data without an easy way to stop just that one app
## some apps let user generate new API keys 
## The ability to change API key limist the security downsides
## Many API keys are sent in the query string as part of url, which makes it easier to discover for someone who should not have acces
## to it.
## A better option is put API key in the authorization header. In the fact, it's the proposed standard.
## Authorization: APikey 1234567890abcdef

## Yet, in practice API keys show up in all sorts of places:

## Authorization Header
## Basic Auth
## Body Data
## Custom Header
## Query String

# OAuth Tokens: Great for Accessing User Data
## OAuth is the answer to accessing user data with APIs. Unlike with API keys, OAuth does not require a user to go exploring
## through a developer portal. In fact, in the best cases, users simply click a button to allow an application to access their
## accounts. OAuth, specifically OAuth 2.0, is a standard for the process that goes on behind the scenes to ensure secure
## handling of these permissions.

## Like an API key, anyone with an access token can potentially invoke harmful operations, such as deleting data. 
## However, OAuth provides several improvements over API keys. For starters, access tokens can be tied to particular 
## scopes, which restrict the types of operations and data the application can access. Also, combined with refresh tokens, 
## access tokens will expire, so the negative effects could have a limited impact. Finally, even if refresh tokens aren’t used, 
## access tokens can still be revoked.

# JWT Tokens: Great for Limiting Database Lookups

## Whereas API keys and OAuth tokens are always used to access APIs, JSON Web Tokens (JWT) can be used in many different
## scenarios. In fact, JWT can store any type of data, With a JWT access token, far fewer database lookups are needed 
## While a JWT is longer than most access tokens, they’re still relatively compact (though this depends on how much data you
## store within them):
## eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob21lcGFnZSI6Imh0dHBzOi8vemFwaWVyLmNvbS9kZXZlbG9wZXIvIiwidGFnbGluZSI6IlphcGllciB
## tYWtlcyB5b3UgaGFwcGllciIsIm1lc3NhZ2UiOiJHb29kIGpvYiEgWW91J3JlIGEgbWFzdGVyIGRlY29kZXIhIPCfkY8ifQ.qti9DKAJhwoTzu511CbVJ0g2c
## uSGbcIILjOiQ7yXp_E

## You can to avoid database lookups because the JWT contains a base64 encoded version of the data you need to determine 
## the identity and scope of access. 
## The JWT also contains a signature calculated using the JWT data, You calculate your own vversions and compare.
##  This calculation is much more efficient than looking up an access token in a database to determine who it belongs
## to and whether it is valid.

## Like OAuth access toke,s JWT tokens should be passed in the authorization header: 
## Authorization: Bearer
## eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob21lcGFnZSI6Imh0dHBzOi8vemFwaWVyLmNvbS9kZXZlbG9wZXIvIiwidGFnbGluZSI6IlphcGllciBtYWt
## lcyB5b3UgaGFwcGllciIsIm1lc3NhZ2UiOiJHb29kIGpvYiEgWW91J3JlIGEgbWFzdGVyIGRlY29kZXIhIPCfkY8ifQ.qti9DKAJhwoTzu511CbVJ0g2cuSGbcIIL
## jOiQ7yXp_E
## The downside of not looking up access tokens with each call is that a JWT cannot be revoked.
## With each API call, you would need to check the JWT signature and ensure that the expiration is still in the future.
