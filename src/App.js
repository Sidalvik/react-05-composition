import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import PropTypes from 'prop-types';
import Separator from './Components/Separator/Separator';
import Cards from './Components/Cards/Cards';
import Decomposition from './Components/Decomposition/Decomposition';

function App() {

  return (
    <div className="App container">
      <div className="row">
        <h1 className='col-10 pb-4 mx-auto text-center'>Курс React.<br></br>Домашнее задание по&nbsp;теме<br></br>"Композиция компонентов"</h1>
      </div>
      <div className='row task-1' id='task-1'>
        <h2 className='mx-auto text-center'>Задание 1. "Карточки (Cards)"</h2>
      </div>
      <div className="row">
        <Cards className = {'col-6 mx-auto'}/>
      </div>
      <Separator/>
      <div className='row task-2' id='task-2'>
        <h2 className='mx-auto text-center'>Задание 2. "Декомпозиция (Decomposition)"</h2>
      </div>
      <div className='row'>
          <Decomposition className = {'col-12 mx-auto'}/>
      </div>
      <Separator/>
    </div>
  );
}

App.propTypes = {
  props: PropTypes.any,
}

export default App;
