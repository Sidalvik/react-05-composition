import React from 'react';
import PropTypes from 'prop-types';

/**
 * Строка ввода поискового запроса с кнопкой и логотипом, 
 * @param {string} props.src - адрес изображения логотипа, 
 * @param {string} props.alt - альтернативный текст для изображения логотипа,
 * @param {string} props.textBtn - текст кнопки,
 * @param {function} props.onChange - обработчкик ввода в input,
 * @param {function} props.onSubmit - обработчкик нажатия кнопки,
 * @returns 
 */
function SearchInputGroup(props) {
    const {src, alt, textBtn, onChange, onSubmit} = props;

  return (
    <div className='row'>
        <img className='logo col-1' src={src} alt={alt} />
        <div className='input-group col'>
            <input className='form-control' type="search" id='search-input' onChange = {onChange}/>
            <button className='btn btn-outline-secondary' type="submit" onSubmit={onSubmit}>{textBtn}</button>
        </div>
    </div>
  )
}

SearchInputGroup.defaultProps = {
    url: '/#',
    textBtn: 'Найти',
}

SearchInputGroup.propTypes = {
    src: PropTypes.string.isRequired,
    url: PropTypes.string,
    alt: PropTypes.string.isRequired,
    textBtn: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default SearchInputGroup
