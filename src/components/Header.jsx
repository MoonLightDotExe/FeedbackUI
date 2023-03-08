import { PropTypes } from 'prop-types';

function Header({text, bgColor, tColor}) {

  const headerStyles={
    backgroundColor: bgColor,
    color: tColor
  }

    return(
      <header style={headerStyles}>
        <div className="container">
          <h2> {text} </h2>
        </div>
      </header>
    )
  }

  Header.defaultProps={
    text: 'FeedBack Meow',
    bgColor:'rgba(0,0,0,0.4)',
    tColor:"#ff6a95"
  }

  Header.propTypes={
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    tColor: PropTypes.string
  }

export default Header