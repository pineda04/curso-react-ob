import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejempli1 from './hooks/Ejempli1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/** Componentes propio Greeting.jsx */}
        {/* <Greeting name="César"></Greeting> */}
        {/* Componentes de ejemplo funcional */}
        {/* <GreetingF name="César"></GreetingF> */}
        {/* Componentes de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejemplo de usos de HOOKS */}
        {/* <Ejempli1></Ejempli1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre="César">
          {/* Todo lo que hay aqui, es tratado como props.children*/}
          <h3>Contenido del props.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
