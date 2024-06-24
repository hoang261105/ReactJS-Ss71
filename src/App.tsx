import React from "react";
import Count from "./components/B1/Count";
import RandomNumber from "./components/B2/RandomNumber";
import LightDark from "./components/B3/LightDark";
import ViewReducer from "./components/B4/ViewReducer";
import MenuReducer from "./components/B5/MenuReducer";
import LanguageReducer from "./components/B6/LanguageReducer";
import UserReducer from "./components/B7/UserReducer";
import Login from "./components/B8/Login";

export default function App() {
  return (
    <div>
      <Count />
      <br />
      <RandomNumber />
      <br />
      <LightDark />
      <br />
      <ViewReducer />
      <br />
      <MenuReducer />
      <br />
      <LanguageReducer />
      <br />
      <UserReducer />
      <br />
      <Login />
    </div>
  );
}
