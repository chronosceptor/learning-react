import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import DetallesCart from './DetallesCart';

const styles = {
    cart: {
        color: "#fff",
        border: "1px solid #fff",
        padding: ".5rem 1rem",
        borderRadius: "1rem",
        fontWeight: "bold",
        backgroundColor: "transparent",
        cursor: 'pointer',
    },
    cartPosition: {
        position: "relative",
    },
};

class Cart extends Component {
    render() {
        const { cart, esCartVisible, mostrarCart } = this.props
        const cantidad = cart.reduce((acc, el) => acc + el.cantidad, 0)
        const total = cart.reduce((acc, el) => acc + el.subtotal, 0)
        return (
            <div style={styles.cartPosition}>
                { cantidad !== 0
                    ? <BubbleAlert value={cantidad}/>
                    : null }
                <button onClick={mostrarCart}
                    style={styles.cart}>
                        Carrito
                    </button>
                { esCartVisible
                    ? <DetallesCart cart={cart} total={total} />
                    : null }
            </div>
        );
    }
}

export default Cart;
