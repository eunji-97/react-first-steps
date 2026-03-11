import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";
import CommentList from "../list/CommentList";

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

const PostContainer = styled.div`
    padding : 16px;
    border : 1px solid #ddd;
    border-radius : 8px;
    `

const TitleText = styled.p`
    font-size : 28px;
    font-weight : 500;
`

const ContentText = styled.p`
    font-size : 20px;
    white-space : pre-wrap;
    line-height : 32px;
`

const CommentLabel = styled.p`
    font-size : 16px;
    font-weight : 500;
`


function PostViewPage(props) {
    const navigate = useNavigate();
    const {postId} = useParams();

    const post = data.find((item) => item.id == postId);
    const [comment, setComment] = useState("");
    return (
        <Wrapper>
            <Container>
                <Button title="목록으로" onClick={() => navigate("/")}></Button>
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />
                <TextInput height={40} value={comment} onChange={(e) => setComment(e.target.value)} />
                <Button title="댓글 작성" onClick={() => {
                    navigate("/");
                }} />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;