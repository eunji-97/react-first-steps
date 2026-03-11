import React from "react";
import styled from "styled-components";

const StyledInput = styled.textarea`
    width: calc(100% - 16px);
    ${(props) => props.height && `height: ${props.height}px;`}
    padding: 8px;
    font-size: 16px;
    line-height: 20px;
`

function TextInput(props) {
    const {value, height, onChange} = props;

    return <StyledInput value={value} height={height} onChange={onChange} />
}

export default TextInput;