import React from 'react';
import PropTypes from 'prop-types';

/**
 * Форма поиска
 * @param {string} props.className - строка с именами классов, * @param {*} props 
 * @returns 
 */
function SearchForm(props) {
  const {className} = props;

  return (
    <form className={className}>
        {props.children}
    </form>
  )
}

SearchForm.propTypes = {
  className: PropTypes.string,
}

export default SearchForm
