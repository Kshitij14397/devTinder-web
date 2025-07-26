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