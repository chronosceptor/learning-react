import { Component } from 'react';
// import Producto from './Producto';

const styles = {
    title: {
        backgroundColor: '#333',
        padding: '.5rem 0',
    },
    h1: {
        margin: 0,
        color: '#fff',
        fontSize: '1.2rem',
    },
    container: {
        maxWidth: '900px',
        margin: '0 auto',
    },
}

class Title extends Component {
  render(){
    return (
        <div style={styles.title}>
            <div style={styles.container}>
                <h1 style={styles.h1}>La Tiendita</h1>
            </div>
        </div>
    )
  }
}

export default Title;
