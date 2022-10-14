import React from 'react'
import PropTypes from 'prop-types'

/**
 * Элемент списка
 * @param {string} props.className - строка с именами классов,
 * @returns 
 */
function ListItem(props) {
    const {className} = props;
    
  return (
    <li className={className}>{props.children}</li>
  )
}

ListItem.propTypes = {
  className: PropTypes.string,
}

export default ListItem
