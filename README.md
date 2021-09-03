## Project Setup
### Server Deployment
* Set environment variable named `MONGODB_URL` and set its value to MongoDB Database URL
* Set environment variable named `JWT_SECRET_KEY` and set its value

### Local Machine
* Create a file named `.env`
* Set environment variable named `MONGODB_URL` and `JWT_SECRET_KEY`
* Set `NODE_ENV=development`
* Set `PORT=3001`

Run these commands in your terminal
```
npm i
npm start
```

## User API
### Login Endpoint
`api/v1/user/login`

### Sample request
```
{
	"username": "abcd",
	"password": "abcd1234"
}
```
### Sample response 
Successful Login
```
{
	"message": "login sucessful",
	"token": "JWT_TOKEN",
	"user": {
		"username": "abcd",
		"role": "USER_ROLE"
	} 
}
```

Failed Login Attempt
```
{
	"error": "LOGIN_FAILED",
	"message: "invalid credentials"
}
```
Inactive User
```
{
	"error": "LOGIN_FAILED",
	"message: "user is not active"
}
```

### SignUp Endpoint
`api/v1/user/signUp`

### Sample request
```
{
	"username": "abcd",
	"password": "abcd1234"
}
```
### Sample response 
Successful Sign Up
```
{
	"message": "user created",
}
```
Then the database admin has to activate the user in the db.





