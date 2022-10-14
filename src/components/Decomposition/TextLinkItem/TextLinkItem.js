import React from 'react'
import PropTypes from 'prop-types'

/**
 * Элемент ссылка
 * @param {string} props.className - строка с именами классов,
 * @param {string} props.text - текст,
 * @param {string} props.url - адрес гиперссылки перехода,
 * @returns 
 */
function TextLinkItem(props) {
    const {className, text, url} = props;

  return (
    <p className = {className}>
        <a href={url}>{text}{props.children}</a>
    </p>
  )
}

TextLinkItem.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string.isRequired,
}

export default TextLinkItem
