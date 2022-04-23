import { Component } from 'react';

const styles = {
    Logo: {
        margin: 0,
        color: '#fff',
        fontSize: '1.2rem',
    },
}

class Logo extends Component {
  render(){
    return (
        <h1 style={styles.Logo}>La Tiendita</h1>
    )
  }
}

export default Logo;
