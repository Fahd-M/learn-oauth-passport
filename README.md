# learn-oauth-passport

Full stack application that uses cookies and server-side sessions to authenticate and authorize the user. 
Used Passport.js library to authenticate with Github as a third-party authentication site. 
Set up mySQL database using migrations and seeds
Built some functionality to use the authentication and authorization practically: 
  - having protected endpoints
  - updating data on the server based on user login state
  - having conditional client-side UI based on login state
  
Code along lesson from BrainStation.

## Tech Stack used: 

Front-end: React.JS, Axios, React-router-dom, Sass

Back-end: Node.JS, Express.JS, mySQL, Knex.JS, Passport.JS with dependencies casual, cors, dotenv, helmet, nodemon.

## To run application: 
Please register the application with GitHub to use it for Auth. Create the application at the GitHub Applications page.
For the Homepage URL, you can enter http://localhost:5050 and for the Authorization callback URL, you can enter http://localhost:5050/auth/github/callback.

cd into client and server folders and npm install the relevant dependencies, then npm run dev for server and npm start for client. 

## For server .env:
You can enter any random string or word but to make it more secure you can generate one

SESSION_SECRET=<YOUR SESSION SECRET STRING>

GITHUB_CLIENT_ID=<YOUR CLIENT ID> # copy this from your GitHub application page
GITHUB_CLIENT_SECRET=<YOUR CLIENT SECRET> # copy this from your GitHub application page (you might need to generate a new client secret)
GITHUB_CALLBACK_URL=http://localhost:5050/auth/github/callback # this is an Authorization callback URL value from your GitHub application page

CLIENT_URL=http://localhost:3000
