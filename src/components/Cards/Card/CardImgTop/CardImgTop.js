import React from 'react';
import PropTypes from 'prop-types';

function CardImgTop(props) {
    const {src, alt} = props;

    return (
    <img src = {src} className = "card-img-top" alt = {alt}></img>
    )
}

CardImgTop.defaultProps = {
    src: '<svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>',
    alt: '...',
}

CardImgTop.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
}

export default CardImgTop
