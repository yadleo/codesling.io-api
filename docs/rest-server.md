# Codesling RESTful Server Developer Documentation

**Note:** If you want to run all backend services along with the clientside development server, check out the main `README.md` [instructions](README.md#getting-started)

To begin developing on the RESTful JSON Data API, run the following from the `rest-server` folder:

```bash
yarn
yarn buildEnv
yarn start
```

# Database
## PostgreSQL
Depending on the NODE_ENV value, the API will use either the AWS RDS instance or local instance.

Once promisified, all queries are made through `db.query(queryString)`.

# RESTful Server

RESTful Server components takes the following structure:

```plaintext
Start
|
SQLHelpers
|
Queries
|
Controllers
|
Router
|
End
```

`src/lib/components/`

To avoid redundancy, use the global controller and query for basic CRUD operations.

If you need to manipulate the data, then create a unique controller.

```plaintext
globalQueryHelper
  Four parameters:
      {Object} payload - req.body || req.params
      {Function} query - returns the SQL statement used to query the db
      {String} name - used as an identifier for development, identifies which query is being executed
      {Array} columns - list of fields for parameterized query
  
  Returns an object: 
      {Object} rows from database query
  
globalController
  Two parameters:
    {Function} query - the query built with the globalQueryHelper, evaluates the url to use the appropriate SQL statement to query the database
    {String} name - used as an identifier for development, identifies which controller is being executed
  Returns a controller:
    {Function} returns a promisified controller
```

`src/lib/components/util`

```plaintext
queryPayloadOrganizer
  While using parameterized queries, databases are vulnerable to SQL injections     without the proper security measures

  Example: 
  SQL Statement: SELECT FROM users WHERE email=${email};
  Request Body: email = test@test.com OR 1=1;

  node-postgres provides a method to protect yourself against SQL injections
  Replacing the template literal with a placeholder ($1, $2, $3)

  const query = {
  query: SQL_STATEMENT
  values: [...payload]
  };

  db.query(query);
```

## Endpoints

```plaintext
- '/api/auth'
  - POST '/signup'
    request
      body: {
        email,
        username,
        password,
      }
  - POST '/login'
    request
      body: {
        email,
        password
      }
'/api/users'
  - GET '/fetchAllUsers'
'/api/friends'
  - POST '/addFriend'
    request
      body: {
        user_id,
        friend_id
      }
  - GET '/fetchAllFriends/:user_id'
  - DELETE '/deleteFriend/:user_id/:friend_id'
'/api/challenges'
  - POST '/'
    request
      body: {
        title,
        content,
        difficulty
      }
'/api/usersChallenges'
  - POST '/'
    request
      body: {
        user_id,
        challenge_id,
        type
      }
  - GET '/:user_id'
'/api/testCases'
  - POST '/'
    request
      body: {
        content,
        challenge_id
      }

```
