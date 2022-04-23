import { Component } from "react";
import Logo from "./Logo";
import Cart from "./Cart";

const styles = {
    navbar: {
        backgroundColor: "#333",
        padding: ".5rem 0",
        marginBottom: "2rem",
    },
    container: {
        maxWidth: "900px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
};

class Navbar extends Component {
    render() {
        const { cart, esCartVisible, mostrarCart } = this.props;

        return (
            <div style={styles.navbar}>
                <div style={styles.container}>
                    <Logo />
                    <Cart
                        cart={cart}
                        esCartVisible={esCartVisible}
                        mostrarCart={mostrarCart}
                    />
                </div>
            </div>
        );
    }
}

export default Navbar;
