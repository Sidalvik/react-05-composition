import React from 'react';
import PropTypes from 'prop-types';
import TabsItem from './TabsItem/TabsItem';
import List from './List/List';
import ListItem from './List/ListItem/ListItem';
import ServiceItem from './ServiceItem/ServiceItem';
import NowTime from './TabsItem/NowTime/NowTime';
import TextLinkItem from './TextLinkItem/TextLinkItem';
import QuotesItem from './TabsItem/QuotesItem/QuotesItem';
import Promo from './Promo/Promo';
import SearchForm from './SearchForm/SearchForm';
import SearchInputGroup from './SearchForm/SearchInputGroup/SearchInputGroup';
import SearchLabel from './SearchForm/SearchInputGroup/SearchLabel/SearchLabel';
import Banner from './Banner/Banner';
import WidgetList from './WidgetsList/WidgetsList';
import Widget from './WidgetsList/Widget/Widget';
import Weather from './WidgetsList/Weather/Weather';
import Channel from './WidgetsList/Channel/Channel';

/**
 * Компонент фрагмента страницы по заданному дизайн-макету
 * 
 * @param {*} props 
 * @returns 
 */
function Decomposition(props) {
  const {className} = props;

  const tabsNames = [
    {serviceName: 'Сейчас в СМИ', url: '/#'},
    {serviceName: 'в Германии', url: '/#'},
    {serviceName: 'Рекомендуем', url: '/#'},
  ];

  const news = [
    {text: 'Путин упростил получение автомобильных номеров', url: '/#'},
    {text: 'Путин упростил получение автомобильных номеров', url: '/#'},
    {text: 'Путин упростил получение автомобильных номеров', url: '/#'},
    {text: 'Путин упростил получение автомобильных номеров', url: '/#'},
    {text: 'Путин упростил получение автомобильных номеров', url: '/#'},
  ];

  const quotes = [
    {code: 'USD', market: 'MOEX', value: '55,6', diff: '+0.8'},
    {code: 'EUR', market: 'MOEX', value: '55,6', diff: '+0.8'},
    {code: 'Нефть', market: '', value: '55,6', diff: '+0.8'},
  ];

  const promo = {
    src: '/img/logo512.png',
    url: '/#',
    alt: '...',
    title: 'Работа над ошибками',
    text: 'Смотрите на Яндексе и запоминайте',
  };

  const services = [
    {text: 'Видео', url: '/#'},
    {text: 'Картинки', url: '/#'},
    {text: 'Новости', url: '/#'},
    {text: 'Видео', url: '/#'},
    {text: 'Картинки', url: '/#'},
    {text: 'Новости', url: '/#'},
    {text: 'Видео', url: '/#'},
    {text: 'Картинки', url: '/#'},
    {text: 'ещё', url: '/#'},
  ];

  const inputGroup = {
    src: '/img/logo512.png',
    alt: '...',
    textBtn: 'Найти...',
    onChange: () => console.log('Ввод'),
    onSubmit: () => console.log('Поиск'),
  };

  const banner = {
    src: '/img/logo512.png',
    url: '/#',
  };

  const weather = {
    title: 'Погода',
    url: '/#',
    src: '/img/logo512.png',
    alt: '...',
    currentTemp: '+3C',
  }

  const air = Array(3).fill({text:'Управление как...', url: '/#'});

  return (
    <>
      <section className = {className}>
        <div className='row'>
          <TabsItem className = {'col-7 offset-1'}>
            <List className = {'list-group list-group-horizontal mb-2'}>
              {tabsNames.map((item, index) => 
                <ListItem key = {index} className={'list-group-item'}>
                  <ServiceItem {...item}/>
                </ListItem>)}
                <ListItem key = {'time'} className={'list-group-item'}>
                  <NowTime/>
                </ListItem>
            </List>
            <List className = {'list-group mb-2'}>
              {news.map((item, index) => 
                <ListItem key = {index} className={'list-group-item'}>
                  <TextLinkItem {...item} className = {'m-0'}/>
                </ListItem>)}
            </List>
            <List className = {'list-group list-group-horizontal'}>
              {quotes.map((item, index) => 
                <ListItem key = {index} className={'list-group-item'}>
                  <QuotesItem {...item} className = {'m-0'}/>
                </ListItem>)}
            </List>
          </TabsItem>
          <Promo {...promo} className = {'col-3'}/>
        </div>
      </section>
      <section className = {className}>
        <div className='row mt-1'>
          <List className = {'col-8 offset-1 list-group list-group-horizontal mb-2'}>
            {services.map((item, index) => 
              <ListItem key = {index} className={'list-group-item'}>
                <TextLinkItem {...item} className = {'m-0'}/>
              </ListItem>)}
          </List>
        </div>
        <div className='row'>
          <SearchForm className={'col-12'}>
              <SearchInputGroup {...inputGroup} />
              <SearchLabel {...{className: 'offset-1 col', url: '/#', text: 'фаза луны сегодня'}}/>
          </SearchForm>
        </div>
      </section>
      <section className = {className}>
        <div className='row'>
          <Banner {...banner} className={'col-10 mx-auto'}/>
        </div>
      </section>
      <section className = {'row mt-3'}>
        <div className='col-10  mx-auto'>
          <WidgetList className={'row'}>
              <Widget {...weather} className='col-4'>
                <Weather {...weather}>
                  <p>Ночь: -5С</p>
                  <p>День: +5С</p>
                  </Weather>
              </Widget>
              <Widget title='Карта Германии' url='/#' className='col-4'>
                <TextLinkItem url='/#'><p>Расписания</p></TextLinkItem>
              </Widget>
              <Widget title='Эфир' url='/#' className='col-4'>
                <List className = {'list-group mb-2'}>
                  {air.map((item, index) => 
                    <ListItem key = {index} className={''}>
                      <TextLinkItem {...item} className = {'d-inline m-0'}/>
                      <Channel className={'d-inline ms-2'}/>
                    </ListItem>)}
                </List>
              </Widget>
              <Widget title='Посещаемое' url='/#' className='col-4'>
                <TextLinkItem url='/#'><p><strong>Недвижимость</strong> - о сталинках</p></TextLinkItem>
                <TextLinkItem url='/#'><p><strong>Маркет</strong> - люстры и светильники</p></TextLinkItem>
              </Widget>
              <Widget title='Телепрограмма' url='/#' className='col-4'>
                <List className = {'list-group mb-2'}>
                  {air.map((item, index) => 
                    <ListItem key = {index} className={''}>
                      <TextLinkItem {...item} className = {'d-inline m-0'}/>
                      <Channel className={'d-inline ms-2'}/>
                    </ListItem>)}
                </List>
              </Widget>
          </WidgetList>
        </div>
      </section>
    </>
  )
}

Decomposition.propTypes = {
    props: PropTypes.any,
}

export default Decomposition
