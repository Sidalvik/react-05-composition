import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../ButtonLink/ButtonLink';

function CardBody(props) {
    const {children, cardBtn} = props;

    return (
    <div className = "card-body">
        {children}
        <ButtonLink {...cardBtn}/>
    </div> 
    )
}

CardBody.defaultProps = {

}

CardBody.propTypes = {
    props: PropTypes.any,
}

export default CardBody
