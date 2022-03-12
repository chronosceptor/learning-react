import { Component } from "react";

const styles = {
    detalles: {
        backgroundColor: "white",
        position: "absolute",
        boxShadow: "1px 5px 5px rgba(0,0,0,.3)",
        borderRadius: "5px",
        width: "250px",
        right: "0",
    },
    ul: {
        listStyle: "none",
        margin: 0,
        padding: 0,
    },
    li: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0",
        padding: ".5rem 1rem",
        borderBottom: "1px solid #ccc"
    }
};


class DetallesCart extends Component {
    render() {
        const { cart } = this.props
        const { total } = this.props
        return (
            <div style={styles.detalles}>
                <ul style={styles.ul}>
                    {cart.map( x =>
                    <li style={styles.li} key={x.name}>
                        <img alt={x.name} src={x.img} width="50" height="32" />
                        <span>{ x.name } x {x.cantidad}</span> = <span>${x.subtotal} </span>
                    </li>)}
                    <li style={styles.li} key={total}>
                        <span>Total:</span>
                        <span>${total}</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default DetallesCart;
