import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { lime } from "@mui/material/colors";
import  addSignupData  from "../../api";
import "./SignupForm.css";

const SignupForm = (props) => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successText,setsuccessText] = useState("");
  const [termSigned,settermSigned] = useState(false);
  const [errorText,seterrorText] = useState("");

  async function submitForm(e) {
    e.preventDefault();
    setsuccessText("");
    seterrorText("");

    if(!fName)
    {
      seterrorText("Please enter a First Name")
      return
    }
    if(!lName)
    {
      seterrorText("Please enter a Last Name")
      return
    }

    if(!userName)
    {
      seterrorText("Please enter a User Name")
      return
    }

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email || regex.test(email) === false)
    {
      seterrorText("Please enter a valid email")
      return
    }

    if(!password)
    {
      seterrorText("Please enter a Password")
      return
    }

    if(!termSigned){
      seterrorText("You need to accept the term and condition to complete the sign up process")
      return
    }

    const response = await addSignupData.addSignupData(props.type.toLowerCase()).catch((error)=>console.log(error));
    console.log(response)
    if(response)
    {
      setsuccessText("The user has been signed up successfully")
    }
    return response;
  }

  return (
    <div className="signupForm">
      <form onSubmit={submitForm}>
        <p className="formheader">Create Your {props.type} Account</p>
        <div className="formelement">
          <label>First Name*</label>
          <input
            id="firstname"
            type="text"
            onChange={(e) => setfName(e.target.value)}
          />
        </div>
        <div className="formelement">
          <label>Last Name*</label>
          <input
            id="lastname"
            type="text"
            onChange={(e) => setlName(e.target.value)}
          />
        </div>
        <div className="formelement">
          <label>User Name*</label>
          <input
            id="username"
            type="text"
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
        <div className="formelement">
          <label>Email*</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formelement">
          <label>Password*</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="tandcbox">
          <Checkbox className="tandccheckbox" onChange={(e,checked)=>settermSigned(checked)}/>
          <label>
            I agree to the <span className="tandc">term and condition</span>
          </label>
        </div>
        <div className="btncontainer">
          <Button
            className="submitbtn"
            type="submit"
            variant="contained"
          >
            SIGN UP
          </Button>{" "}
          <span>{successText}</span>
          <span className="errorText">{errorText}</span>
        </div>
        
      </form>
    </div>
  );
};

export default SignupForm;
