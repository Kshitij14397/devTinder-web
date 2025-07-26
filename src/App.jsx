import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./components/Body";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Connections from "./components/Connections";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Requests from "./components/Requests";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route element={<Body />}>
            <Route index element={<Feed />} />
            <Route path="login" element={<Login />} />
            <Route path="connections" element={<Connections />} />
            <Route path="/requests" element={<Requests/>}/>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
