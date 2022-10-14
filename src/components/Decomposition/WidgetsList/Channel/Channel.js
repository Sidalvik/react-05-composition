import React from 'react'
import PropTypes from 'prop-types'

/**
 * ТВ - канал
 * @param {string} props.className - строка с именами классов,
 * @param {string} props.url - url ссылки,
 * @param {string} props.text - текст,
 * @returns 
 */
function Channel(props) {
    const {className, url, text} = props;
  return (
    <span className={(className || '') + ' text-muted'}><a href={url}>{text}</a></span>
  )
}

Channel.defaultProps = {
  className: '',
  url: '/#',
  text: 'Канал 1'
}

Channel.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
}

export default Channel
