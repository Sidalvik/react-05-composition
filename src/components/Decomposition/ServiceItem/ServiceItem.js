import React from 'react';
import PropTypes from 'prop-types';

/**
 * Элемент списка сервисов
 * @param {string} props.serviceName - имя сервиса,
 * @param {string} props.url - адрес гиперссылки перехода,
 * @returns 
 */
function ServiceItem(props) {
    const {serviceName, url} = props;

  return (
    <a href={url}>{serviceName}</a>
  )
}

ServiceItem.propTypes = {
  serviceName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default ServiceItem
