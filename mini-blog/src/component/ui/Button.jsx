import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    border-radius: 8px;
    border-width: 1px;
    cursor: pointer;
    font-size: 16px;
`

function Button(props) {
    const {title, onClick} = props;

    return <StyledButton onClick={onClick}>{title}</StyledButton>
}

export default Button;