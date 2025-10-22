import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./components/Body";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Connections from "./components/Connections";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Requests from "./components/Requests";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Refunds from "./components/Refunds";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Shipping from "./components/Shipping";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route element={<Body />}>
            <Route index element={<Feed />} />
            <Route path="login" element={<Login />} />
            <Route path="connections" element={<Connections />} />
            <Route path="requests" element={<Requests />} />
            <Route path="profile" element={<Profile />} />
            <Route path="pages">
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
              <Route path="refunds" element={<Refunds />} />
              <Route path="team" element={<Team />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="shipping" element={<Shipping />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
