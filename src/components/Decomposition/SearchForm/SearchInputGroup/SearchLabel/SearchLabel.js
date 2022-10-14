import React from 'react';
import PropTypes from 'prop-types';

/**
 * Подсказка к полю поиска с примером
 * @param {string} props.className - строка с именами классов,
 * @param {string} props.url - адрес гиперссылки перехода,
 * @param {string} props.text - текст примера,
 * @returns
 */
function SearchLabel(props) {
    const {className, url, text} = props;

  return (
      <p className={className}>Найдется всё. Например, <span className='text-muted'><a href={url}>{text}</a></span></p>
  )
}

SearchLabel.propTypes = {
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default SearchLabel
