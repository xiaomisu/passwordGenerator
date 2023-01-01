import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App: React.FC = () => {
  const [length, setLength] = useState(4);
  const [password, setPassword] = useState("**********************");
  const [device, setDevice] = useState<deviceType>("ipad")
  const generatePassword = async () => {
    // Create a random password
    // const randomPassword =
    //   Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    const randomPassword = Math.random()
      .toString()
      .slice(2, 2 + length);
    // Set the generated password as state
    setPassword(randomPassword);

    // copy the password to the clipboard & fire toast message

    navigator.clipboard.writeText(randomPassword).then((res) => {
      toast("Password copied to your clipboard");
      window.localStorage.setItem(`password${new Date(Date.now())}`, randomPassword + device);
    });
  };
  return (
    <div className="background">
      <h1 className="heading">Generate a random password</h1>
      <div className="wrapper">
        <div className="password">**********************</div>
        <div className="container">
          <div className="row justify-content-center mb-4">
            <span className="col-4">Password Length:</span>
            <input
              type="number"
              className="col-4 border-0 w-25"
              value={length}
              onChange={(event) => setLength(Number(event.target.value))}
            />
            <select  value={device} onChange={event=> { setDevice(event.target.value as deviceType )}} className="col-4" aria-label="Default select example">
              <option value="ipad">ipad</option>
              <option value="lg">lg</option>
              <option value="mi">mi</option>
            </select>
          </div>
        </div>
        <button className="generate-password" onClick={generatePassword}>
          Generate password
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
