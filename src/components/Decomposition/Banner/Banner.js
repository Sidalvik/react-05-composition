import React from 'react';
import PropTypes from 'prop-types';

/**
 * Графический баннер
 * @param {string} props.className - строка с именами классов,
 * @param {string} props.src - адрес изображения баннера, 
 * @param {string} props.url - адрес гиперссылки перехода,
 * @param {string} props.alt - альтернативный текст для изображения,
 * @returns 
 */
function Banner(props) {
    const {className, src, url, alt} = props;

    const style = {
      maxHeight: '4rem',
    }

  return (
    <div className={(className || '') + ' banner'} style = {style}>
        <a href={url}><img src={src} alt={alt} className={'w-100 h-100'} /></a>
    </div>
  )
}

Banner.defaultProps = {
    alt: 'Баннер',
}

Banner.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Banner
