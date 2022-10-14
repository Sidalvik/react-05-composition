import React from 'react'
import PropTypes from 'prop-types'

/**
 * Виджет погоды
 * @param {string} props.className - строка с именами классов,
 * @param {string} props.src - изображение,
 * @param {string} props.alt - альтернативный текст изображения,
 * @param {string} props.currentTemp - текущая температура,
 * @returns 
 */
function Weather(props) {
  const {className, src, alt, currentTemp} = props;

  return (
    <div className={(className || '') + ' row weather'}>
        <img src={src} alt={alt} className='col-3'/>
        <div className='col-3 current-temp' >{currentTemp}</div>
        <div className='col-6'>{props.children}</div>
    </div>
  )
}

Weather.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    currentTemp: PropTypes.string.isRequired,
}

export default Weather
