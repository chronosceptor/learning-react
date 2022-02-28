import { Component } from "react";

class Button extends Component {
    state = {};
    constructor(props) {
        super(props);
        console.log("constructor", props);
    }

    // actualizar el estado despues del render en un inicio
    componentDidMount() {
        console.log("componentDidMount");
    }

    // despues de que se actualiza el estado
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", prevProps, prevState);
    }

    // desmontando componente
    componentWillUnmount() {
      console.log("componentWillUnmount", this.getSnapshotBeforeUpdate, this.state);
  }



    render() {
        console.log("ejecutando metodo render de button");
        return (
            <button onClick={() => this.setState({ prop: 1 })}>
                Enviar Button
            </button>
        );
    }
}

class App extends Component {
    state = {
        valor: 3,
    };
    render() {
        console.log(this.state);
        return (
            <div>
                <p>hola mundo</p>
                {this.state.valor === 3 
                  ? <Button persona="feliz" />
                  : null
                }
                <button
                    className={`${this.state.valor}`}
                    onClick={() => this.setState({ valor: 2 })}
                >
                    Enviar en app
                </button>
            </div>
        );
    }
}

export default App;
