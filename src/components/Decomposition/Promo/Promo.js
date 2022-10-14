import React from 'react';
import PropTypes from 'prop-types';

/**
 * Промо-виджет с презентацией чего-либо.
 * @param {string} props.className - строка с именами классов,
 * @param {string} props.src - адрес изображения виджета, 
 * @param {string} props.alt - альтернативный текст для изображения,
 * @param {string} props.url - адрес гиперссылки перехода,
 * @param {string} props.title - текст заголовока,
 * @param {string} props.text - текст,
 * @returns 
 */
function Promo(props) {
    const {className, src, url, alt, title, text} = props;

  return (
    <div className = {className}>
        <img className='w-75' src={src} alt={alt} />
        <h5><a href={url}>{title}</a></h5>
        <p>{text}</p>
    </div>
  )
}

Promo.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Promo
