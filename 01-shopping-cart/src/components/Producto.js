import { Component } from "react";
import Button from './Button';

const styles = {
    producto: {
        border: "1px solid #eee",
        boxShadow: "0 0 30px rgba(0,0,0,.1)",
        padding: "1rem",
        width: "25%",
        borderRadius: "1rem",
    },
    img: {
      width: '100%',
    }
};

class Producto extends Component {
    render() {
        const { producto, agregarAlCart } = this.props;
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>${producto.price}</p>
                <Button
                  onClick={() => agregarAlCart(producto)}
                >
                  Agregar al Carro
                </Button>
            </div>
        );
    }
}

export default Producto;
