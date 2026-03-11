import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width : calc(100% - 32px);
    padding: 8px 16px;
    align-items: flex-start;
    justify-content: center;
    border : 1px solid #eee;
    border-radius: 8px;
    background-color: #fff;
    cursor: pointer;
    :hover {
        background-color: #f9f9f9;
    }
`

const ContentText = styled.p`
    font-size: 16px;
    white-space: pre-wrap;
`;

function CommentListItem(props) {
    const { comment } = props;
    
    return (
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    )
}

export default CommentListItem;
