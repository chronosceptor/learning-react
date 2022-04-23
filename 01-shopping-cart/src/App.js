import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

class App extends Component {
    state = {
        productos: [
            { name: "Tomate", price: 100, img: "/productos/tomate.jpg" },
            { name: "Arbejas", price: 75, img: "/productos/arbejas.jpg" },
            { name: "Lechuga", price: 50, img: "/productos/lechuga.jpg" },
        ],
        cart: [],
        esCartVisible: false,
    };

    agregarAlCart = (producto) => {
        const { cart } = this.state;
        if (cart.find((x) => x.name === producto.name)) {
            const newCart = cart.map((x) =>
                x.name === producto.name
                    ? {
                          ...x,
                          cantidad: x.cantidad + 1,
                          subtotal: x.subtotal + x.price
                    }
                    : x
            );
            return this.setState({ cart: newCart });
        }
        return this.setState({
            cart: this.state.cart.concat({
                ...producto,
                cantidad: 1,
                subtotal: producto.price,
            }),
        });
    };

    mostrarCart = () => {
        if( !this.state.cart){
            return
        }
        this.setState({ esCartVisible: !this.state.esCartVisible });
    };

    render() {
        console.log(this.state.cart);
        return (
            <div>
                <Navbar
                    esCartVisible={this.state.esCartVisible}
                    mostrarCart={this.mostrarCart}
                    cart={this.state.cart}
                />
                <Layout>
                    <Productos
                        agregarAlCart={this.agregarAlCart}
                        productos={this.state.productos}
                    />
                </Layout>
            </div>
        );
    }
}

export default App;
