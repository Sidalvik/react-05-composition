import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Separator from './Components/Separator/Separator';
import Cards from './Components/Cards/Cards';
import Decomposition from './Components/Decomposition/Decomposition';
import Collapse from './Components/Collapse/Collapse';


function App() {
  const styles = {
      cards: {

      },

      decomposition: {

      },

      collapse: {

      },
  }

  return (
    <div className="App container">
      <div className="row">
        <h1 className='col-10 pb-4 mx-auto text-center'>Курс React.<br></br>Домашнее задание по&nbsp;теме<br></br>"Композиция компонентов"</h1>
      </div>
      <div className='row task-1' id='task-1'>
        <h2 className=' mx-auto text-center'>Задание 1. "Карточки (Cards)"</h2>
      </div>
      <div className="row">
        <Cards className = {'col-6 mx-auto'} style = {styles.cards}/>
      </div>
      <Separator/>
      <div className='task-2' id='task-2'>
        <h2>Задание 2. "Декомпозиция (Decomposition)"</h2>
          <Decomposition className = {''} style = {styles.decomposition}>

          </Decomposition>
      </div>
      <Separator/>
      <div className='task-3' id='task-3'>
        <h2>Задание 3. "Collapse (Collapse)"</h2>
          <Collapse className = {''} style = {styles.collapse}>
          </Collapse>
      </div>
      <Separator/>
    </div>
  );
}

App.propTypes = {
  props: PropTypes.any,
}

export default App;
