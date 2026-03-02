import React from "react";

const styles = {
    wrapper : {
        margin : 8,
        padding : 8,
        border : "1px solid grey",
        borderRadius : 16,
        display : "flex",
        flexDirection : "row",
    },
    messageText : {
        fontSize : 16,
        color : "black",
    },
}

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(`Notification mounted with id: ${this.props.id}`);
    }
    
    componentDidUpdate() {
        console.log(`Notification updated with id: ${this.props.id}`);
    }  
    
    componentWillUnmount() {
        console.log(`Notification will unmount with id: ${this.props.id}`);
    }   

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
                </div>
        );
    }}

export default Notification;    
    