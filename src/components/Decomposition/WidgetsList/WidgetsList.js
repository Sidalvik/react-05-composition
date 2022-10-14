import React from 'react';
import PropTypes from 'prop-types';

/**
 * Набор виджетов
 * @param {string} props.className - строка с именами классов,
 * @returns 
 */
function WidgetsList(props) {
  const {className} = props;

  return (
    <div className={className + ' widget-list'}>
        {props.children}
    </div>
  )
}

WidgetsList.propTypes = {
  className: PropTypes.string,
}

export default WidgetsList
