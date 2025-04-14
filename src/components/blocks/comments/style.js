import styled from "styled-components";

export const StyledComments = styled.section `
    width: 1512px;
    margin: 0 auto;
    margin-bottom: 187px;

    .comments-name {
        width: 439px;
    }

    .comments-card {
        width: 484px;
        height: 480px;
        padding: 91px 20px 95px 45px;
    }

    .comments-card h2 {
        font-weight: 600;
        font-size: 38px;
    }

    .comments-card p {
        font-weight: 400;
        font-size: 24px;
        opacity: 0.75;
    }

    .comments-card .comment-description {
        margin-top: 61px;
    }

    .comments-card .comment-author {
        display: flex;
        align-items: center;
        gap: 38px;
    }

    .write-comment {
        width: 438px;
        height: 100px;
        margin: 0 auto;
        margin-top: 60px;
        font-weight: 400;
        font-size: 28px;
    }
`

export const CommentsWrapper = styled.div `
    margin-top: 187px;
`

export const CommentsContainer = styled.div `
    display: flex;
    justify-content: space-between;
`