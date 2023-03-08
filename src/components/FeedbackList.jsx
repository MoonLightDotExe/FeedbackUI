import React from 'react'
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'
import {motion , AnimatePresence} from 'framer-motion'

function FeedbackList({feedback,handleDel}) {

  return (
      <div className="feedback-list">
        <AnimatePresence>
      {
        feedback.map((item) => (
          <motion.div
          key={item.id} 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
          >
            <FeedbackItem key={item.id} item={item} handleDelete={handleDel} />
          </motion.div>
      )
    )}
        </AnimatePresence>
    </div>
  
  )
}

FeedbackList.propTypes={
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }))
}

export default FeedbackList