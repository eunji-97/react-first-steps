import React from "react";

const style = {
    wapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey"
    },

    greeting: {
        marginRight: 8
    }
};

function Toolbar(props) {
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    return (
        <div style={style.wapper}>
            <div style={style.greeting}>
                {isLoggedIn ? "환영합니다!" : "로그인 해주세요."}
            </div>

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    );
}
export default Toolbar;
