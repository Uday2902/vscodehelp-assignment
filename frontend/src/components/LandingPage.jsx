import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { Button } from "@mui/material";
import { FaClinicMedical } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import FAQComponent from "./FAQComponent";
import SlotsBooking from "./SlotsBooking";


function LandingPage() {
  const { name } = useParams();
  const [doctorName, setDoctorName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [clinic, setClinic] = useState("");
  const [slots, setSlots] = useState([]);
  const [fees, setFees] = useState(0);

  const [activeDiv, setActiveDiv] = useState(0);

  const divs = [
    {
      icon: <FaClinicMedical style={{ height: "2.5rem", width: "2.5rem" }} />,
      label: "In-Clinic",
    },
    {
      icon: <FaPhoneAlt style={{ height: "2.5rem", width: "2.5rem" }} />,
      label: "Audio",
    },
    {
      icon: <FaVideo style={{ height: "2.5rem", width: "2.5rem" }} />,
      label: "Video",
    },
  ];

  useEffect(() => {
    const getDoctorInfoFromBackend = async () => {
      await axios
        .get(`http://localhost:5000/doctor/${name}`)
        .then((resposne) => {
          console.log(resposne.data);
          setFees(resposne.data.fees);
          setClinic(resposne.data.clinic);
          setDoctorName(resposne.data.name);
          setSpeciality(resposne.data.speciality);
          setSlots(resposne.data.slots);
        })
        .catch((err) => console.log(err));
    };
    getDoctorInfoFromBackend();
  }, [name]);

  return (
    <>
      <Navbar />
      <div
        style={{
          borderTop: "1px solid black",
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
            borderBottom: "1px solid black",
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
            <div style={{ fontWeight: "700", fontSize: "1rem" }}>{name}</div>
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
                view Profile
              </Button>
            </div>
          </div>
        </div>
        <div
          className="appointment-section"
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginRight: "0.8rem",
          }}
        >
          <div
            style={{
              width: "60%",
              display: "flex",
              height: "100px",
              flexDirection: "column",
            }}
          >
            <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>
              Book Appointment
            </span>
            <span style={{ fontWeight: "400", fontSize: "0.9rem" }}>
              Select Your Consultation Type
            </span>
            <span
              style={{ fontWeight: "600", fontSize: "0.9rem", color: "green" }}
            >
              Fees approx Rs. {fees}
            </span>
            <span
              style={{ fontWeight: "600", fontSize: "0.9rem", color: "blue" }}
            >
              ( pay at clinic )
            </span>
          </div>
          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: " row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {divs.map((div, index) => (
              <div
                className="icon-divs"
                key={index}
                onClick={() => setActiveDiv(activeDiv === index ? null : index)}
                style={{
                  height: "5.5rem",
                  width: "5.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
                  borderRadius: "0.3rem",
                  backgroundColor: activeDiv === index ? "lightgreen" : "white",
                }}
              >
                {div.icon}
                <span style={{ fontWeight: "600" }}>{div.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="clinic-name-section"
          style={{ marginLeft: "1rem", marginRight: "0.8rem" }}
        >
          <div
            style={{
              fontWeight: "700",
              fontSize: "1.2rem",
              marginBottom: "1.5rem",
              marginTop: "1.5rem",
            }}
          >
            CLINIC NAME
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                display: "inline-block",
                marginLeft: "1rem",
                border: '4px solid green'
              }}
            ></div>
            <div style={{ marginLeft: "0.2rem", marginTop: "-0.2rem" }}>
              {clinic}
            </div>
          </div>
        </div>
        <div className="slots-booking-section" style={{width: '100%'}}>
          <SlotsBooking slots={slots} doctorName={doctorName} speciality={speciality} />
        </div>

        <div
          className="faqs-section"
          style={{
            background: "lightgreen",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Frequently Asked Questions</h1>
          <FAQComponent />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
