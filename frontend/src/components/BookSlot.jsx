import React from "react";
import { Button } from "@mui/material";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import EmailVerification from "./EmailVerification";

function BookSlot() {
  const date = useSelector((state) => {
    return state.users.date;
  });
  const slot = useSelector((state) => {
    return state.users.slot;
  });
  const doctorName = useSelector((state) => {
    return state.users.doctorName;
  });
  const speciality = useSelector((state) => {
    return state.users.speciality;
  });

  console.log("Bookslot -> ", date, slot, doctorName, speciality)

  return (
    <div>
      <Navbar />
      <div
        style={{
          borderBottom: "1px solid black",
          marginLeft: "12rem",
          marginRight: "12rem",
          backgroundColor: "white",
        }}
      >
        <div
          className="profile-section"
          style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid red",
          }}
        >
          <div style={{ padding: "2rem" }}>
            <a href="https://ibb.co/x7Z3Wzq">
              <img
                src="https://i.ibb.co/x7Z3Wzq/Dr.png"
                alt="Dr"
                border="0"
                style={{ height: "100px", width: "100px" }}
              />
            </a>
          </div>
          <div
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontWeight: "700", fontSize: "1rem" }}>
              {doctorName}
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              {speciality}
            </div>
            <div>
              <Button
                style={{
                  height: "2rem",
                  color: "blue",
                  borderColor: "blue",
                  fontWeight: "500",
                }}
                variant="outlined"
              >
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
      <EmailVerification />
    </div>
  );
}

export default BookSlot;

