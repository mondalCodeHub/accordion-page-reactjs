import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';


function App() {
  const[questions, setQuestions] = useState(data);

  return (
    <>
    <div className="container">
      <div className="title">
        <h1 className='faqh1'>FAQ SECTION</h1>
      </div>
      <div className="information">
        {
          questions.map((question)=>{
            return(
              <>
              <SingleQuestion key={question.id}{...question} />
              </>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default App;
// @mondalcodehub-NOV22