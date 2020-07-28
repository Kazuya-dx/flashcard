import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Home from "../components/Home";
import Loading from "../components/screens/Loading";
import SignUp from "../components/screens/SignUp";
import Login from "../components/screens/Login";

const AuthenticationNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Loading: { screen: Loading },
      SignUp: { screen: SignUp },
      Login: { screen: Login },
      Home: { screen: Home },
    },
    {
      initialRouteName: "Loading",
    }
  )
);

export default AuthenticationNavigator;
