import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App: React.FC = () => {
  const [password, setPassword] = useState("**********************");
  const generatePassword = async () => {
    // Create a random password
    const randomPassword =
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

    // Set the generated password as state
    setPassword(randomPassword);

    // copy the password to the clipboard & fire toast message

    navigator.clipboard.writeText(randomPassword).then((res) => {
      console.log(res);
    });

    if (true) {
      toast("Password copied to your clipboard");
    }
  };
  return (
    <div className="background">
      <h1 className="heading">Generate a random password</h1>
      <div className="wrapper">
        <div className="password">**********************</div>
        <button className="generate-password" onClick={generatePassword}>
          Generate password
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
