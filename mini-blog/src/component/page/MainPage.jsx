import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justfy-content : center;
    padding : 16px;
    width : calc(100% - 32px);
`;

const Container = styled.div`
width : 100%;
max-width : 720px;

:not(:last-child) {
    margin-bottom : 16px;
}
`;

function MainPage(props) {
    // const {} = props;
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Button onClick={() => navigate("/post-write")} title="새 글 작성"></Button>
                <PostList posts={data} onClickItem={(post) => navigate(`/post/${post.id}`)} />
            </Container>
        </Wrapper>
    );
}

export default MainPage;