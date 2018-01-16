# Codesling RESTful Server Developer Documentation

**Note:** If you want to run all backend services along with the clientside development server, check out the main `README.md` [instructions](README.md#getting-started)

To begin developing on the RESTful JSON Data API, run the following from the `rest-server` folder:

```bash
yarn
yarn start
```

# Database
## PostgreSQL
Depending on the NODE_ENV value, the API will use either the AWS RDS instance or local instance.

Once promisified, all queries are made through `db.queryAsync(queryString)`.

# API

API takes the following structure:

```plaintext
Start
|
SQLHelpers,
|
Queries,
|
Controllers,
|
Router
|
End
```

Endpoints

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
