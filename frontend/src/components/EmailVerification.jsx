import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

function EmailVerification() {
  const date = useSelector((state) => {
    return state.users.date;
  });
  const time = useSelector((state) => {
    return state.users.slot;
  });
  const name = useSelector((state) => {
    return state.users.doctorName;
  });
  const speciality = useSelector((state) => {
    return state.users.speciality;
  });
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSendOtp = async () => {
    await axios
      .post("http://localhost:5000/bookslot", { name, date, time, email })
      .then((response) => {
        setOtpSent(true);
      })
      .catch((err) => console.log(err));
  };

  const handleVerify = async () => {
    await axios
      .post("http://localhost:5000/getotp", { email })
      .then((response) => {
        if (response.data.otp === otp) {
          alert("Verified successfully!");
        } else {
          alert("Incorrect OTP. Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        
        marginLeft: "12rem",
        marginRight: "12rem",
        height: "25rem",
        padding: "2rem",
        backgroundColor: "white",
      }}
    >
      <h3>Enter your email address to continue</h3>
      <div>Please enter your email to also receive timely updates.</div>
      <div>
        <input
          type="email"
          className="custom-input"
          placeholder="Enter your Email here"
          onChange={handleEmailChange}
          value={email}
        />
      </div>
      <div style={{ fontSize: "12px", fontWeight: "400", marginTop: "0.5rem" }}>
        Please enter the email address of the patient. You will receive a
        confirmation message on this email.
      </div>
      <Button
        variant="contained"
        style={{ marginTop: "1rem", height: "2rem" }}
        onClick={handleSendOtp}
      >
        Send Otp
      </Button>
      {otpSent && (
        <>
          <div>
            <input
              type="text"
              className="custom-input"
              placeholder="Enter your OTP here"
              onChange={handleOtpChange}
              value={otp}
            />
          </div>
          <Button
            variant="contained"
            style={{ marginTop: "1rem", height: "2rem" }}
            onClick={handleVerify}
          >
            Verify OTP
          </Button>
        </>
      )}
    </div>
  );
}

export default EmailVerification;
