import React from "react";
import WelcomePage from "./Component/WelcomePage";
import OTP from "./Component/OTP";
import LoginSuccessful from "./Component/LoginSuccessful";
import ToggleBox from "./Component/ToggleBox";

function App() {
  return (
    <>
      <WelcomePage />
      <OTP />
      <LoginSuccessful />
      {/* <ToggleBox /> */}
    </>
  );
}

export default App;
