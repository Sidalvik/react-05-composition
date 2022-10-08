import React from 'react'
import PropTypes from 'prop-types'

function CardTitle(props) {
    const {title} = props;
    
  return (
    <h5 className = "card-title">{title}</h5>
  )
}

CardTitle.defaultProps = {
    title: 'Заголовок',
}

CardTitle.propTypes = {
    title: PropTypes.string,
};


export default CardTitle
