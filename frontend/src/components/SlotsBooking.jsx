import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Carousel.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "../state/bookingSlice";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

function SlotsBooking({ slots, doctorName, speciality }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [startDay, setStartDay] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");
  const [finalSlots, setFinalSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [currentSelected, setCurrentSelected] = useState(null);
  const nextThreeDays = Array.from({ length: 3 }, (_, i) => {
    const day = new Date(startDay);
    day.setDate(day.getDate() + i);
    return day.toDateString();
  });

  const handleClick = async (day) => {
    const date = day;
    setSelectedDate(date.slice(0, -5) + ", " + date.slice(-4));
    const results = await getSlotsForDate(
      day.slice(0, -5) + ", " + day.slice(-4)
    );
    setFinalSlots(results);
    console.log(`You clicked on ${day}`);
    console.log("slots", slots);
    console.log("finalSlots", finalSlots);
  };

  const handleNext = () => {
    const nextDay = new Date(startDay);
    nextDay.setDate(nextDay.getDate() + 3); // Change here
    setStartDay(nextDay);
  };

  const handlePrev = () => {
    const prevDay = new Date(startDay);
    prevDay.setDate(prevDay.getDate() - 3); // Change here
    setStartDay(prevDay);
  };

  const handleContinueClick = () => {
    console.log(
      "before continue",
      doctorName,
      selectedDate,
      selectedSlot,
      speciality
    );
    dispatch(
      setData({
        doctorName: doctorName,
        date: selectedDate,
        slot: selectedSlot,
        speciality: speciality,
      })
    );
    navigate("/bookslot");
  };

  function getSlotsForDate(dateString) {
    let dateEntry = slots.find((entry) => entry.date === dateString);
    return dateEntry ? dateEntry.slots : [];
  }

  const handleSlotClick = (index) => {
    setCurrentSelected(index);
    setSelectedSlot(finalSlots[index].time);
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <button onClick={handlePrev} style={{background: 'transparent', border: 'none'}}  ><FaCircleArrowLeft style={{height: '2rem', width: '2rem'}} /></button>
        <div
          className="carousel"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {nextThreeDays.map((day, index) => (
            <CSSTransition key={day} timeout={500} classNames="item">
              <div
                className="dates-carousel"
                style={{
                  width: "5rem",
                  border: (day.substring(4)).slice(0, -5) + ", " + (day.substring(4)).slice(-4) === selectedDate ? "2px solid green" : "none",
                  padding: '1rem',
                  borderRadius: '10px'
                }}
                onClick={() => handleClick(day.substring(4))}
              >
                {day}
              </div>
            </CSSTransition>
          ))}
        </div>
        <button onClick={handleNext} style={{background: 'transparent', border: 'none'}} ><FaCircleArrowRight style={{height: '2rem', width: '2rem'}} /></button>
      </div>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {finalSlots.map((slot, index) => (
          <div
            key={index}
            className="slot-boxes"
            onClick={() => {
              if (slot.available) {
                handleSlotClick(index);
              }
            }}
            style={{
              backgroundColor: slot.available ? (index===currentSelected ? "lightgreen":"white") : "#e3e8e5",
              border: "1px solid black",
              borderRadius: "5px",
              padding: "5px",
              width: "30%",
              margin: "0.3rem",
              textAlign: "center",
            }}
          >
            {slot.time}
          </div>
        ))}
      </div>
      <div
        style={{ height: "2rem" }}
        onClick={handleContinueClick}
        className="continue-button"
      >
        <span
          style={{
            marginLeft: "90%",
            height: "2rem",
            padding: "0.4rem",
            borderRadius: "5px",
            backgroundColor: "green",
            color: 'white',
            fontWeight: '600'
          }}
        >
          Continue
        </span>
      </div>
    </div>
  );
}

export default SlotsBooking;
