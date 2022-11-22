import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showinfo, setShowinfo] = useState(false)
  const setInfoButton = () => {
    setShowinfo(!showinfo);
  }

  return (
    <>
      <div className="questionContainer">
        <header className="mainHead">
          <h3>{title}</h3>
          <button className="btnOne" onClick={setInfoButton}>
            {showinfo ? <AiOutlineMinus /> : <AiOutlinePlus/>}
          </button>
        </header>
        {showinfo && <p className='p-info'>{info}</p>}
      </div>
    </>
  )
};

export default Question;
// @mondalcodehub-NOV22