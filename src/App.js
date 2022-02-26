// add css inline to components
// add two css inline to components
import logo from './logo.svg';
import './App.css';

const shadow = {
  boxShadow: '0 0 20px rgba(0,0,0,.5)'
}

const estilo = (bg = '#000', color = "#fff") => ({
  backgroundColor: bg,
  color: color,
  padding: '1rem',
  margin: '3rem 1rem',
})

const App = () => {
  return (
    <div>
      <div style={{ ...shadow, ...estilo('#057','#f56')}}>
        alvaro
      </div>
      <div style={{ ...shadow, ...estilo('#fa4','#fa51f3')}}>
        alvaro
      </div>
      <div style={{ ...shadow, ...estilo()}}>
        alvaro
      </div>
    </div>
  );
}

export default App;
