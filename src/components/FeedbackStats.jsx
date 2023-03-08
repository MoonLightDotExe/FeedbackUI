import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {

    let avg = Math.round(feedback.reduce((acc, cur) => { return acc + cur.rating }, 0) / feedback.length );

  return (
    <div className='feedback-stats'>
      <h4> Reviews:  {feedback.length} </h4>
      <h4> Average Rating : { isNaN(avg) ? 0 : avg } </h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback : PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  )
}

export default FeedbackStats
