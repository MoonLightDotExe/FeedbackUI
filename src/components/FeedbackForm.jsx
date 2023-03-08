import React from 'react'
import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({handleSubmit}) {

  const [text , setText] = useState('');
  const [disable , setDisable] = useState(false);
  const [message , setMessage] = useState('');
  const [rating , setRating] = useState('10');

  const HandleChange = (e) => {
    if(text ===''){
      setDisable(true)
      setMessage(null)
    }
    else if(text !=='' && e.target.value.length <= 10){
      setDisable(true)
      setMessage('Review must be atleast 10 characters long')
    }
    else {
      setDisable(false)
      setMessage(null)
    }

    setText(e.target.value)
  }

  const handleSub = (e) =>{
    e.preventDefault()
    const newFeedback = {
      text,
      rating
    }
    handleSubmit(newFeedback);
  }

  return (
      <Card>
        <form onSubmit={handleSub}>
          <div className="input-group">
            <input 
              type='text'
              placeholder='Write Something!'
              onChange={HandleChange}
              value={text}
            />
            <Button type='submit' children='Hello' >Submit</Button>
            </div>
            <RatingSelect select={setRating}/>
            { message &&
              <div className='message'>
                {message}
              </div>
            }
          </form>
      </Card>
  )
}

export default FeedbackForm
