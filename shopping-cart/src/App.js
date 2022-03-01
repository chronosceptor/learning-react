import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 100, img: '/productos/tomate.jpg'},
      { name: 'Arbejas', price: 75, img: '/productos/arbejas.jpg'},
      { name: 'Lechuga', price: 50, img: '/productos/lechuga.jpg'},
    ]
  }

  render(){
    return (
        <div>
          <Layout>
            <Productos
              agregarAlCarro = {() => console.log("no hace nada")}
              productos={this.state.productos}
            />
          </Layout>
        </div>
      )
  }
}

export default App;
