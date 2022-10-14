import React from 'react';
import PropTypes from 'prop-types';

/**
 * Элемент вкладок 
 * @param {string} props.className - имена классов
 * @returns 
 */
function TabsItem(props) {
  const {className} = props;

  return (
    <section className={className + ''}>
        {props.children}
    </section>
  )
}

TabsItem.propTypes = {
    className: PropTypes.string,
}

export default TabsItem
