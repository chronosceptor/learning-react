import { Component } from 'react';
// import Producto from './Producto';

const styles = {
    layout: {
        padding: '2rem',
    },
    container: {
        maxWidth: '900px',
        margin: '0 auto',
    },
}

class Layout extends Component {
  render(){
    return (
        <div style={styles.layout}>
            <div style={styles.container}>
                {this.props.children}
            </div>
        </div>
    )
  }
}

export default Layout;
