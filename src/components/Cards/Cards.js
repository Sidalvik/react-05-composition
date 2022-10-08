import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card';
import CardImgTop from './Card/CardImgTop/CardImgTop';

function Cards(props) {
  const {style, className} = props;

  const cardContent = {
    img: {
      src: '/img/logo512.png',
      alt: 'Изображение карточки',
    },
    title: 'Заголовок карточки',
    content: ["Some quick example text to build on the card title and make up the bulk of the card 's content.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum amet esse quo perferendis minima deleniti quae ad sed unde aperiam! Earum omnis quos sequi qui sunt sit at libero inventore."],
    btn: {
      url: '/#',
      textBtn: 'Кнопка',
    },
  }

  const cardContent2 = {
    title: 'Заголовок карточки',
    content: ["Some quick example text to build on the card title and make up the bulk of the card 's content."],
    btn: {
      url: '/#',
      textBtn: 'Кнопка',
    },
  }

  return (
    <div className = {className} style = {style}>
      <Card className = {'mb-4 mx-auto'} cardContent = {cardContent}>
        {(cardContent.img && cardContent.img.src) ? <CardImgTop {...cardContent.img}/> : null}
      </Card>

      <Card className = {'mb-4 mx-auto'} cardContent = {cardContent2}>
        {(cardContent2.img && cardContent2.img.src) ? <CardImgTop {...cardContent2.img}/> : null}
      </Card>
    </div>
  )
}

Cards.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
}

export default Cards
