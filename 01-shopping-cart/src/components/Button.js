import { Component } from "react";

const styles = {
    button: {
        border: "1px solid #fff",
        backgroundColor: "#333",
        padding: "1rem 2rem",
        width: "100%",
        borderRadius: "1rem",
        cursor: "pointer",
        color: "#fff",
        fontWeight: "bold",
    },
};
class Button extends Component {
    render() {
        return <button style={styles.button} {...this.props} />;
    }
}

export default Button;
