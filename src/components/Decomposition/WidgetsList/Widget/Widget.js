import React from 'react'
import PropTypes from 'prop-types'

/**
 * Виджет нижней секции
 * @param {string} props.className - строка с именами классов,
 * @param {string} props.title - заголовок,
 * @param {string} props.url - адрес гиперссылки перехода,
 * 
 * @returns 
 */
function Widget(props) {
    const {className, title, url} = props;

  return (
    <div className = {(className || '')  + ' widget'}>
        <h3><a href={url}>{title}</a></h3>
        {props.children}
    </div>
  )
}

Widget.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
}

export default Widget
