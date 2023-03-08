import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import styles from './index.css'
import { BrowserRouter as Router , Link, NavLink, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import AboutLink from './components/AboutLink';
import Post from './components/Post';


function App(){
  const [feedback , setFeedBack] = useState(FeedbackData);
  const title ="FeedBack UI";

  const executeDelete = (id) => {   
    if(window.confirm('Are you sure?')){
      setFeedBack(feedback.filter((item)=> item.id!== id))
    }
  }

  const handleAdd = (newFeedback) => {
    newFeedback.id= uuidv4();
    setFeedBack([newFeedback, ...feedback])
  }

  return (
      <>
        <Router>
          <Header text={title} />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={
                <>
                  <FeedbackForm handleSubmit = {handleAdd} />
                  <FeedbackStats feedback={feedback} /> 
                  <FeedbackList feedback={ feedback } handleDel={executeDelete}/>
                  <Link to='/about'> <AboutLink> </AboutLink> </Link>
                </>
              } ></Route>
              <Route path='/about' element={
                <About />
              } > </Route>

              <Route path='/post/*' element= {              
                  <Post />
              }> 
                
              </Route>

            </Routes>
          </div>
        </Router> 
      </>
  )
} 

export default App