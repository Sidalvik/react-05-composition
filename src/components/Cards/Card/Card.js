import React from 'react';
import PropTypes from 'prop-types';
import CardBody from './CardBody/CardBody';
import CardTitle from './CardBody/CardTitle/CardTitle';

function Card(props) {
    const {style, className, cardContent} = props;
    
    const cardStyle = {
        width: "18rem",
      };
    
      return (
        <div className = {className + " card"} style = {{...style, ...cardStyle}}>
            {props.children}
            <CardBody cardBtn = {cardContent.btn}>
                {/* {body} */}
                <CardTitle title = {cardContent.title}/>
                {cardContent.content.map((item, index) => <p key = {index}>{item}</p>)}
            </CardBody>
        </div>
      )
}

Card.defaultProps ={

}

Card.propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    cardContent: PropTypes.shape({
        img: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string,
        }),
        title: PropTypes.string.isRequired,
        content: PropTypes.arrayOf(PropTypes.string),
        btn: PropTypes.shape({
            url: PropTypes.string,
            textBtn: PropTypes.string,
        }),
    }),
}


export default Card
