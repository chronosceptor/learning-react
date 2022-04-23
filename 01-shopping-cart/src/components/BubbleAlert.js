import { Component } from "react";

const styles = {
    bubble: {
        position: "absolute",
        backgroundColor: "#86de73",
        color: "#333",
        height: "20px",
        width: "20px",
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        itemsAlign: "center",
        top: "-5px",
        left: "70px",
    }
};

class BubbleAlert extends Component {
    getNumber(n) {
        if (!n) {
            return ''
        }
        return n > 9 ? '9+' : n
    }
    render() {
        const { value } = this.props

return <span style={styles.bubble}>
            {this.getNumber(value)}
        </span>;
    }
}

export default BubbleAlert;
