import React from 'react'
import PropTypes from 'prop-types'

/**
 * Текущее дата и время
 * @param {string} props.time - строка с текущей датой и временем
 * @returns 
 */
function NowTime(props) {
    const {time} = props;
  return (
    <time className='text-muted'>{time}</time>
  )
}

NowTime.defaultProps = {
  time: (new Date()).toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric'
  })
}

NowTime.propTypes = {
    time: PropTypes.string,
}

export default NowTime
