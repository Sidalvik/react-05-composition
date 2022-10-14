import React from 'react';
import PropTypes from 'prop-types';

/**
 * Элемент списка котировок
 * @param {string} props.className - строка с именами классов,
 * @param {string} props.code - код финансового инструмента,
 * @param {string} props.market - биржа,
 * @param {string} props.value - значение,
 * @param {string} props.diff - разница,
 * @returns 
 */
function QuotesItem(props) {
    const {className, code, market, value, diff} = props;
  return (
    <p className = {className}><span className=''>{code}</span>&nbsp;<span className=''>{market}</span>&nbsp;<span className=''>{value}</span>&nbsp;<span className=''>{diff}</span></p>
  )
}

QuotesItem.propTypes = {
    className: PropTypes.string,
    code: PropTypes.string.isRequired,
    market: PropTypes.string,
    value: PropTypes.string.isRequired,
    diff: PropTypes.string.isRequired,
}



export default QuotesItem
