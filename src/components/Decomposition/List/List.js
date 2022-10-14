import React from 'react';
import PropTypes from 'prop-types';

/**
 * Список элементов
 * @param {string} props.className - строка с именами классов,
 * @returns 
 */
function List(props) {
    const {className} = props;

  return (
    <ul className={className}>
        {props.children}
    </ul>
  )
}

List.propTypes = {
  className: PropTypes.string,
}

export default List
