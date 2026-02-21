import React from "react";

const styles = {
    wrapper : {
        margin : 8,
        padding : 8,
        display : 'flex',
        flexDirection : 'row',
        border : '1px solid grey',
        borderRadius : 16,
    },
    imageContatiner : {},
    image : {
        width : 50,
        height : 50,
        borderRadius : 25,
    },
    contentContainer : {
        marginLeft : 8,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
    },
    nameText : {
        fontSize : 16,
        fontWeight : 'bold',
        color : "black",
    },
    commentText : {
        fontSize : 16,
        color : "black",
    },

}

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContatiner}>
                <img style={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="profile"/>
            </div>
            <div style={styles.contentContainer}>
                <div style={styles.nameText}>{props.name}</div>
                <div style={styles.commentText}>{props.comment}</div>
            </div>
        </div>
    );
}
export default Comment;
            