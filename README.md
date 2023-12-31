# Authentication_fromScratch
Repository to create Authentication from Scratch. Made using Express, Mongoose(Mongo), Sessions and Cookies.
- I have not setup buttons to directly move to other pages of the site, to test the app you need to type the routes into the url bar.
# To use this repository 
- Clone the repository or Download the zip file
- Installing dependencies (Tech Stack) like Node, Express, Mongo, Mongoose
- Use npm i to install packages used in the code.
- Now run using node index.js and your app is served on port localhost:3000

# Brief Description
## Basic Authentication Demo App
This is a simple Node.js application demonstrating basic authentication using Express, MongoDB, and bcrypt for password hashing. The app includes registration, login, and logout functionality, as well as access to protected routes.

## Features
- User Registration: Users can register by providing a unique username and password.
- User Login: Registered users can log in using their credentials.
- Session Management: Utilizes session for user session management.
- Password Hashing: securely hash and store user passwords in database.
- Protected Routes: Access to certain routes (/secret1 and /secret2) is restricted to authenticated users.

## Routes 
- /: (Homepage) Displays a welcome message.
- /register: Allows users to register by providing a username and password.
- /login: Provides a login form for users to enter their credentials.
- /secret1: A protected route accessible only to authenticated users.
- /secret2: Another protected route with additional content for authenticated users.

## Usage
- Visit the homepage (/) to see the welcome message.
- Navigate to the /register route to create a new account.
- Log in at the /login route with your registered credentials.
- Access the protected routes (/secret_Route and /anotherSecret) once logged in.
- Log out using the /logout route to end your session.

### Important Notes
Make sure to have MongoDB running locally on port 27017 or update the connection string in index.js accordingly.
The app uses a simple session secret for demonstration purposes and This demo does not include comprehensive error handling. In a production environment, a more secure session configuration is recommended.
This is a basic authentication demo and should not be considered secure for production use without additional security measures.
Feel free to explore and modify the code to suit your needs!
