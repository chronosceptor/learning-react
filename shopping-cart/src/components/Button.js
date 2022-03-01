import { Component } from "react";

const styles = {
    button: {
        border: "1px solid #fff",
        padding: "1rem 2rem",
        width: "100%",
        borderRadius: "1rem",
        cursor: "pointer"
    },
};
class Button extends Component {
    render() {
        return <button style={styles.button} {...this.props} />;
    }
}

export default Button;
