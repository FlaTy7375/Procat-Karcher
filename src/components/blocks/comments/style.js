import styled from "styled-components";

export const StyledComments = styled.section`
    margin: 0 auto;
    margin-bottom: 100px;
    scroll-margin-top: 120px;
    position: relative;
    color: #ffffff;
    padding: 40px 0px;
    border-radius: 20px;
    max-width: 1028px;

    .swiper {
        overflow: hidden;
    }

    .comments-name {
        width: 318px;
        color: #ffd700;
        margin: 0 auto 40px;
        text-align: center;
    }

    .comments-card {
        width: 323px;
        height: 385px;
        padding: 55px 10px 40px 40px;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid #333;
        border-radius: 15px;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        box-sizing: border-box;
        transform: translateZ(0);
    }

    .comments-card:hover {
        border-color: #ffd700;
        transform: translateY(-5px) translateZ(0);
        box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
    }

    .comments-card h2 {
        margin-top: 8px;
        font-weight: 600;
        font-size: 24px;
        color: #ffffff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 180px;
    }

    .comments-card p {
        font-weight: 400;
        font-size: 18px;
        opacity: 0.85;
        color: #e0e0e0;
    }

    .comments-card .comment-description {
        margin-top: 24px;
        line-height: 1.6;
        flex-grow: 1;
        color: #e0e0e0;
        font-size: 18px;
        position: relative;
        overflow: hidden;
    }

    .show-more-btn {
        background: transparent;
        border: none;
        color: #ffd700;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        padding: 5px 0;
        margin-top: 10px;
        text-decoration: underline;
        transition: color 0.3s ease;
        display: inline-block;
    }

    .show-more-btn:hover {
        color: #ffed4e;
    }

    .comments-card .comment-author {
        display: flex;
        gap: 16px;
        align-items: center;
        min-height: 64px;
        position: relative;
    }

    .comments-card .comment-author img {
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #ffd700;
        flex-shrink: 0;
    }

    .comments-card .author-info {
        flex-grow: 1;
        min-width: 0;
        overflow: hidden;
    }

    .comments-card .rating {
        color: #ffd700;
        font-size: 20px;
        margin-top: 8px;
        letter-spacing: 2px;
    }

    .comments-card .comment-date {
        position: absolute;
        bottom: 40px;
        right: 40px;
        font-size: 14px;
        color: #888;
    }

    /* Кнопка удаления комментария */
    .delete-comment-btn {
        background: rgba(220, 53, 69, 0.2);
        border: 1px solid #dc3545;
        color: #dc3545;
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 36px;
        min-height: 36px;
        margin-top: 15px;
    }

    .delete-comment-btn:hover {
        background: rgba(220, 53, 69, 0.3);
        transform: scale(1.05);
    }

    .delete-comment-btn.full {
        background: #dc3545;
        color: white;
        padding: 8px 16px;
        font-size: 14px;
    }

    .delete-comment-btn.full:hover {
        background: #c82333;
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
        font-weight: 600;
        font-size: 21px;
        cursor: pointer;
        border: none;
        background: #ffd700;
        color: #000;
        border-radius: 10px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
    }

    .write-comment:hover:not(:disabled) {
        background: #ffed4e;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
    }

    .write-comment:active:not(:disabled) {
        transform: translateY(0);
    }

    .write-comment:disabled {
        background: #333;
        color: #ffd700;
        cursor: not-allowed;
        box-shadow: none;
        opacity: 0.7;
    }

    /* Swiper слайдер */
    .slider-container {
        position: relative;
        width: 100%;
        margin: 0 auto;
        padding: 20px 0;
    }

    .comments-swiper {
        width: 100%;
        padding: 20px 10px;
    }

    .swiper-slide {
        height: auto;
        display: flex;
        justify-content: center;
    }

    .slider-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 60px;
        height: 60px;
        background: #1a1a1a;
        border: 2px solid #ffd700;
        border-radius: 50%;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        transition: all 0.3s ease;
        color: #ffd700;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }

    .slider-arrow:hover:not(:disabled) {
        background: #ffd700;
        color: #000;
        transform: translateY(-50%) scale(1.1);
        box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
    }

    .slider-arrow:disabled {
        cursor: not-allowed;
        opacity: 0.4;
    }

    .slider-arrow.prev {
        left: -80px;
    }

    .slider-arrow.next {
        right: -80px;
    }

    /* Модальные окна */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
        backdrop-filter: blur(5px);
    }

    .modal-overlay.no-scroll {
        overflow: hidden;
        position: fixed;
    }

    .comment-modal,
    .full-comment-modal {
        background: #1a1a1a;
        border-radius: 20px;
        width: 100%;
        max-width: 500px;
        padding: 0;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        border: 2px solid #ffd700;
        max-height: 90vh;
        overflow-y: auto;
    }

    .full-comment-modal {
        max-width: 600px;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 40px;
        border-bottom: 2px solid #333;
        background: #222;
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .modal-header h3 {
        margin: 0;
        font-size: 28px;
        font-weight: 600;
        color: #ffd700;
    }

    .close-btn {
        background: none;
        border: none;
        font-size: 32px;
        cursor: pointer;
        color: #ffd700;
        line-height: 1;
        padding: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
    }

    .close-btn:hover {
        color: #fff;
    }

    .modal-body {
        padding: 30px 40px;
    }

    .user-info {
        background: #222;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 25px;
        border-left: 4px solid #ffd700;
    }

    .user-info p {
        margin: 8px 0;
        font-size: 16px;
        color: #e0e0e0;
    }

    .user-info strong {
        font-weight: 600;
        color: #ffd700;
    }

    .delete-confirmation {
        background: #222;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 25px;
        border-left: 4px solid #dc3545;
        text-align: center;
    }

    .delete-confirmation p {
        margin: 8px 0;
        font-size: 16px;
        color: #e0e0e0;
    }

    .rating-selector {
        background: #222;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 25px;
        border-left: 4px solid #ffd700;
    }

    .rating-selector p {
        color: #ffd700;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .stars-container {
        display: flex;
        gap: 10px;
        margin: 15px 0;
    }

    .star-btn {
        background: none;
        border: none;
        font-size: 36px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        transition: all 0.2s ease;
        color: #444;
    }

    .star-btn:hover {
        transform: scale(1.2);
    }

    .star-btn.selected {
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    }

    .comment-textarea {
        width: 100%;
        min-height: 150px;
        padding: 20px;
        border: 2px solid #333;
        border-radius: 10px;
        font-size: 16px;
        font-family: inherit;
        resize: vertical;
        margin-bottom: 25px;
        transition: all 0.3s ease;
        background: #222;
        color: #fff;
    }

    .comment-textarea:focus {
        outline: none;
        border-color: #ffd700;
        box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
    }

    .comment-textarea::placeholder {
        color: #666;
    }

    .modal-actions {
        display: flex;
        gap: 15px;
        justify-content: flex-end;
    }

    .modal-actions button {
        padding: 14px 32px;
        font-size: 16px;
        font-weight: 600;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        transition: all 0.3s ease;
    }

    .modal-actions button:first-child {
        background: #ffd700;
        color: #000;
        border: 2px solid #ffd700;
    }

    .modal-actions button:first-child:hover {
        background: #ffed4e;
        border-color: #ffed4e;
        transform: translateY(-2px);
    }

    .modal-actions button:last-child {
        background: transparent;
        color: #999;
        border: 2px solid #444;
    }

    .modal-actions button:last-child:hover {
        background: #333;
        color: #fff;
        border-color: #666;
        transform: translateY(-2px);
    }

    /* Модалка полного комментария */
    .full-comment-content {
        background: #222;
        padding: 30px;
        border-radius: 15px;
        border: 1px solid #333;
        margin-bottom: 25px;
    }

    .full-comment-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
        flex-wrap: wrap;
    }

    .full-comment-header img {
        border-radius: 50%;
        border: 2px solid #ffd700;
        width: 64px;
        height: 64px;
        object-fit: cover;
    }

    .full-comment-author {
        flex-grow: 1;
    }

    .full-comment-author h4 {
        margin: 0 0 5px 0;
        font-size: 22px;
        color: #ffffff;
        font-weight: 600;
    }

    .full-comment-rating {
        color: #ffd700;
        font-size: 20px;
        letter-spacing: 2px;
    }

    .full-comment-date {
        color: #888;
        font-size: 14px;
        margin-top: 5px;
    }

    .full-comment-text {
        color: #e0e0e0;
        font-size: 18px;
        line-height: 1.6;
        white-space: pre-wrap;
        word-break: break-word;
    }

    @media (max-width: 1210px) {
        padding: 40px 0px;

        .slider-arrow {
            top: unset;
            bottom: -50px;
            width: 50px;
            height: 50px;
            font-size: 24px;
        }

        .slider-container {
            padding: 20px 0;
        }

        .slider-arrow.prev {
            left: 370px;
        }

        .comments-card {
            min-width: 320px;
        }

        .swiper-slide {
            min-width: 320px;
        }

        .slider-arrow.next {
            right: 370px;
        }
    }

    @media (max-width: 1024px) {
        padding: 40px 40px;

        .comments-card {
            min-width: 97%;
        }
        
        .swiper-slide {
            min-width: auto;
        }

        .slider-arrow.prev {
            left: 38%;
        }

        .slider-arrow.next {
            right: 38%;
        }
    }

    @media (max-width: 768px) {
        padding: 30px 20px;

        .comments-name {
            width: 212px;
            margin-bottom: 30px;
        }

        .slider-container {
            padding: 20px 0;
        }

        .comments-card {
            width: calc(100vw - 80px);
            min-width: 280px;
            height: auto;
            min-height: 300px;
            padding: 25px 20px;
        }

        .comments-card h2 {
            font-size: 20px;
            max-width: 150px;
        }

        .comments-card .comment-description {
            font-size: 16px;
        }

        .comments-card .comment-date {
            position: static;
            margin-top: 15px;
            text-align: right;
            font-size: 12px;
        }

        .delete-comment-btn {
            min-width: 32px;
            min-height: 32px;
            font-size: 14px;
            padding: 4px 8px;
        }

        .slider-arrow {
            width: 40px;
            height: 40px;
            font-size: 20px;
        }

        .slider-arrow.prev {
            bottom: -30px;
        }

        .slider-arrow.next {
            bottom: -30px;
        }

        .write-comment {
            width: calc(100vw - 60px);
            font-size: 18px;
            height: 54px;
            margin-top: 30px;
        }
    }

    @media (max-width: 480px) {
        padding: 30px 15px;

        .modal-body {
            padding: 10px 10px;
        }

        .slider-container {
            padding: 20px 0;
        }

        .comments-card {
            width: calc(100vw - 60px);
            padding: 20px 15px;
        }

        .comments-card h2 {
            font-size: 18px;
            max-width: 120px;
        }

        .comments-card .comment-description {
            font-size: 15px;
        }

        .delete-comment-btn {
            min-width: 28px;
            min-height: 28px;
            font-size: 12px;
            padding: 3px 6px;
        }

        .slider-arrow {
            width: 35px;
            height: 35px;
            font-size: 18px;
        }

        .write-comment {
            width: calc(100vw - 40px);
            font-size: 16px;
            height: 48px;
        }
    }
`;

export const CommentsWrapper = styled.div`
    margin-top: 40px;
    width: 100%;

    @media (max-width: 767px) {
        margin-top: 30px;
    }
`;

export const CommentsContainer = styled.div`
    width: 100%;
    position: relative;
`;