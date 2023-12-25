import React, { useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';

function FAQComponent() {
  const [activeIndex, setActiveIndex] = useState(null);
  const FAQs = [
    {index: 0, question: 'What are the payment options available?', answer: 'E.g, You can pay using a variety of methods such as Internet Banking, Debit/Credit card, Wallet, UPI, and so on.'},
    {index: 1, question: 'Do we serve all over India?', answer: 'We are currently based in Bhiwandi, however, we offer services nationwide via online consultations.'},
    {index: 2, question: 'What are the walk-in options available?', answer: 'We offer services at our clinics located at Bhiwandi'},
    {index: 3, question: 'Are online consultations available?', answer: 'Yes, we offer teleconsultation and onlineservices. Book an appointment at link provided.'},
    {index: 4, question: 'How long will my appointment take?', answer: 'The length of your appointment is determined by the condition or injuries being treated, as well as whether or not x-rays or an MRI are required. Please allow at least one hour for doctors to provide personalized attention and high-quality care.'},
    {index: 5, question: 'Is any referral required for appointments?', answer: 'No, we do not require a referral for the appointments.'},
    {index: 6, question: 'How can I book an appointment?', answer: 'You can click on the book appointment link.'},
    {index: 7, question: 'Do I need to bring anything at my first appointment?', answer: 'You may bring the following documents, if available: ID Proof Prior medication list Any prior diagnosis documentation X-RAY reports'}
  ]

  const handleFAQClick = (index) => {
    if(activeIndex === index){
        setActiveIndex(null)
    }else{
        setActiveIndex(index);
    }
  };

  return (
    <>
      {FAQs.map((item, index) => (
        <>
        <div key={index} className='faq-boxes' onClick={() => handleFAQClick(index)} style={{width: '70%',margin: '1rem',height: '1.5rem',borderRadius: '2px', padding: '0.6rem',backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
          <span>{item.question}</span>
          <FaArrowCircleDown />
        </div>
        {activeIndex === index && <div style={{width: '70%',marginBottom: '1rem',marginTop: '-1rem',borderTop: '0.1px solid black',height: 'auto',borderRadius: '2px', padding: '0.6rem',fontSize: '14px',backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems:'center'}} >{item.answer}</div>}
        </>
      ))}
    </>
  );
}

export default FAQComponent;
