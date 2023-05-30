import { formes } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shardpay from "../src/components/Shardpay/Shardpay";
import SharDefi from "./components/SharDefi/SharDefi";
import Navbar from "./components/Shardpay/Navbar";
import Landing from "./components/Landing/Landing";
import Unify from "./components/Unify/unify";
import Forms from "./components/Forms";
import Profile from "./components/Profile";
import Buttons from "./components/Buttons/Buttons";

const App = () => {
  return (
    <div className="App h-[1000px] gradient-bg-welcome">
      <div className="gradient-bg-welcome">
        <Navbar />
      </div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/Shardpay">
              <Shardpay />
            </Route>
            <Route path="/Buttons">
              <Buttons />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/forms">
              <Forms />
            </Route>
            <Route path="/SharDefi">
              <SharDefi />
            </Route>
            <Route path="/Unify">
              <Unify />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
