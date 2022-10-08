import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink(props) {
    const{className, url, textBtn} = props;

  return (
    <a href = {url} className = {className + " btn btn-primary"}>{textBtn}</a>
  )
}

ButtonLink.defaultProps = {
    url: '/#',
    textBtn: 'Go somewhere',
}

ButtonLink.propTypes = {
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
    textBtn: PropTypes.string,
}

export default ButtonLink
