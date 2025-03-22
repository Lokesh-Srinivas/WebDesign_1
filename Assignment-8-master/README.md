User Management
-----------------------------------------------------------------
This project is a RESTful API built with Node.js and MongoDB for managing user data. It includes functionalities to create, update, delete, retrieve users, and upload profile images with format validation.

Features
------------------------------------------------------------------
User Creation: Create a new user with full name, email, and password.
Update User: Update an existing user's full name and password.
Delete User: Delete a user based on email.
Retrieve All Users: Retrieve a list of all users.
Upload Profile Image: Upload a JPEG, PNG, or GIF image for a specific user.
Prerequisites
Node.js and npm
MongoDB (running locally on default port 27017 or MongoDB Atlas)
Postman (for testing API endpoints)
Setup and Installation

1)Clone the Repository:

git clone <repository_url>
cd <repository_folder>

2)Install Dependencies:

npm install
Setup Environment Variables:

Create a .env file in the root directory with the following values:
PORT=8080
MONGO_URI=mongodb://localhost:27017/assignmentDB

3)Run the Application:

npm start
The server will run at http://localhost:8080.

API Endpoints:

Create User
-------------------------------------------------------------
Method: POST
Endpoint: /user/create
Body (JSON): Contains fullName, email, and password fields

Update User
----------------------------------------------------------------
Method: PUT
Endpoint: /user/edit
Body (JSON): Contains email, fullName, and password fields

Delete User
-----------------------------------------------------------------
Method: DELETE
Endpoint: /user/delete
Body (JSON): Contains email field

Retrieve All Users
-------------------------------------------------------------------
Method: GET
Endpoint: /user/getAll

Upload Profile Image
--------------------------------------------------------------------
Method: POST
Endpoint: /user/uploadImage
Body: Form-data containing:
email (text field)
image (file field) - only JPEG, PNG, and GIF formats allowed

Project Structure
-------------------------------------------------------------------
app.js: Main entry point, defines API routes and configurations.
db.js: Database connection configuration using MongoDB.
models/user.js: Mongoose schema and model for user data.
config/multerConfig.js: Configuration for Multer, which handles image uploads.

Testing
----------------------------------------------------------------------
Use Postman to test the API endpoints. Set up requests for each endpoint with the appropriate HTTP method and body format.

