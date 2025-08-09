# devTinder

- Create a Vite + React application
- Remove uneccessary code and create a Hello world app
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a NavBar separate component file (NavBar.jsx)
- Install react-router
- Create BrowserRouter > Routes > Route=/Body > ChildrenRoutes
- Create an Outlet in your Body Component
- Create a Footer
- Create a Login Page
- Install axios
- CORS - install cors in backend => add middleware with configurations: origin and credentials: true
- Whenever when you are making an API call, so pass axios => { withCredentials: true }
- install react-redux + @reduxjs/toolkit - https://redux-toolkit.js.org/tutorials/quick-start
- configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in store
- NavBar should update as soon as user logs in
- Refactor our code to add constants file + create a components folder
- You should not be able to access other routes without login
- If token is not present, redirect user to login page
- Logout feature
- Get the feed and add the feed in the store
- Build the user card on feed
- Edit Profile Feature
- Show Toast Message on save of profile
- New Page: See all my connections
- New Page: See all my connection requests
- Feature: Accept/Reject Connection Request
- Send/Ignore the user card from Feed
- Signup New User

# Design of devTinder UI

Body
NavBar  
 Route=/ => Feed
Route=/login => Login
Route=/connections => Connections
Route=/profile => Profile

# Deployment

- Signup on AWS
- Launce Instance
- chmod 400 <secret>.pem
- Connected to the machine using this ssh command:
- Install Node version 20.17.0
- Git clone
  - Frontend
    - npm install: Install dependencies:
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - Copy code from dist(build files) to /var/www/html
    - sudo scp -r dist/\* /var/www/html
    - Enable port :80 of your instance
    - Nginx provides a web server where we deploy our app.
  - Backend
    - Allowed ec2 instance public IP on mongodb server.
    - npm install pm2 -g
    - pm2 start npm --name "devTinder-backend" -- start
    - pm2 logs
    - pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
    - Update nginx config at this location: /etc/nginx/sites-available/default
    - Restart nginx using command sudo systemctl restart nginx
    - Modify the BASEURL in frontend project to /api

# Nginx Config

    server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /var/www/html;
        index index.html;
    }

    location /api/ {
        proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

}

# Adding a custom domain name

- purchased domain name from godaddy
- signup on cloudfare and add a domain name.
- change the nameservers on godaddy and point it to cloudflare
- wait for sometime till your nameservers are updated ~15 minutes
- DNS record: A devTinder.in IP Address
- Enable SSL for website
- DNS Registrar

# Sending Emails via SES

- Create a IAM User
- Give access to AmazonSESFullAccess
- Amazon SES: Create an Identity
- Verify your domain name
- Verify an email address identity
- Request Production Access in Amazon SES. It will take 24 hrs. Until then you are in Sandbox environment where email sending is limited.
- Install AWS SDK - v3
- Code Example: https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples
- Setup SESClient
- Access Credentials should be created in IAM under SecurityCredentials Tab
- Add the credentials to the env file
- Write code for SESClient
- Write code for Sending Email Address
- Make the email dynamic by passing more params to the run function
