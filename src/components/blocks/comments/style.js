import styled from "styled-components";

export const StyledComments = styled.section `
    margin: 0 auto;
    margin-bottom: 100px;

    .comments-name {
        width: 318px;
    }

    .comments-card {
        width: 323px;
        height: 385px;
        padding: 55px 10px 40px 40px;
    }

    .comments-card h2 {
        margin-top: 8px;
        font-weight: 600;
        font-size: 24px;
    }

    .comments-card p {
        font-weight: 400;
        font-size: 18px;
        opacity: 0.75;
    }

    .comments-card .comment-description {
        margin-top: 24px;
    }

    .comments-card .comment-author {
        display: flex;
        gap: 16px;
    }

    .write-comment {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 322px;
        padding: 10px;
        height: 64px;
        margin: 0 auto;
        margin-top: 45px;
        font-weight: 400;
        font-size: 24px;
    }

    @media (max-width: 1210px) {
        .comments-card {
            height: 318px;
            padding: 60px;
            min-width: 554px;
            width: calc(100vw - 214px);
        }

        .comments-card:nth-child(2), .comments-card:nth-child(3) {
            display: none;
        }
    }
`

export const CommentsWrapper = styled.div `
    margin-top: 100px;
`

export const CommentsContainer = styled.div `
    width: 1008px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1210px) {
        width: auto;
        justify-content: center;
    }
`