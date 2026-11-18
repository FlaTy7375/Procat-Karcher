import styled, { keyframes } from "styled-components";

const starSheen = keyframes`
  0%, 72%, 100% {
    filter: brightness(1);
    transform: scale(1);
  }
  84% {
    filter: brightness(1.18);
    transform: scale(1.12);
  }
`;

const modalRise = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const sheetSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledComments = styled.section`
  position: relative;
  width: 100%;
  padding: clamp(56px, 7vw, 96px) var(--container-pad);
  background: var(--foam);
  color: var(--graphite);
  overflow-x: hidden;
  scroll-margin-top: 96px;

  .comments-header-wrap {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .before-after-wall {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-bottom: 40px;
  }

  /* Сетка из карточек-отзывов без пустой третьей колонки */
  .notes-masonry {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    align-items: stretch;
    padding-top: 10px;
  }

  .note-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    height: 100%;
    min-width: 0;
    padding: 24px 22px 20px;
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-card);
    cursor: pointer;
    transition:
      transform 250ms var(--ease-clean),
      border-color 250ms var(--ease-clean);

    .comment-footer-meta {
      margin-top: auto;
    }
  }

  .note-card.tilt-left {
    transform: rotate(-1.5deg);
  }

  .note-card.tilt-right {
    transform: rotate(1.5deg);
  }

  @media (hover: hover) and (pointer: fine) {
    .note-card:hover {
      transform: rotate(0deg) translateY(-3px);
      border-color: var(--sun-deep);
    }
  }

  .note-tape {
    position: absolute;
    top: -9px;
    left: 50%;
    width: 64px;
    height: 18px;
    transform: translateX(-50%) rotate(-2deg);
    background: rgba(254, 210, 25, 0.72);
    border: 1px solid rgba(28, 30, 34, 0.14);
    pointer-events: none;
  }

  .note-head {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .comment-avatar-img,
  .comment-avatar-initials {
    border-radius: 50%;
    flex-shrink: 0;
  }

  .comment-avatar-img {
    object-fit: cover;
    border: 1.5px solid var(--graphite);
  }

  .comment-avatar-initials {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 14px;
    border: 1px solid rgba(28, 30, 34, 0.14);
  }

  .author-info {
    min-width: 0;
    flex: 1;

    h3 {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 15.5px;
      line-height: 1.2;
      color: var(--graphite);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .rating {
    display: inline-flex;
    gap: 2px;
    margin-top: 4px;
    font-size: 16px;
    line-height: 1;
  }

  .rating-star.is-filled {
    color: var(--sun-deep);
    display: inline-block;
    animation: ${starSheen} 4.2s ease-in-out infinite;
  }

  .rating-star.is-filled:nth-child(2) {
    animation-delay: 0.15s;
  }
  .rating-star.is-filled:nth-child(3) {
    animation-delay: 0.3s;
  }
  .rating-star.is-filled:nth-child(4) {
    animation-delay: 0.45s;
  }
  .rating-star.is-filled:nth-child(5) {
    animation-delay: 0.6s;
  }

  .rating-star.is-empty {
    color: var(--line);
  }

  .comment-description {
    font-size: 16px;
    line-height: 1.55;
    color: var(--graphite-70);
    word-break: break-word;
  }

  .show-more-btn {
    background: transparent;
    border: none;
    color: var(--graphite);
    font-weight: 600;
    font-size: 14.5px;
    text-decoration: underline;
    text-decoration-color: var(--sun-deep);
    text-underline-offset: 3px;
    cursor: pointer;
    padding: 2px 0;
  }

  .comment-footer-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-top: 10px;
    border-top: 1px dashed var(--line);
  }

  .comment-date {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--graphite-70);
  }

  .delete-comment-btn {
    min-height: 36px;
    padding: 6px 12px;
    border-radius: var(--radius-pill);
    background: rgba(214, 69, 69, 0.1);
    border: 1px solid var(--err);
    color: var(--err);
    font-family: var(--font-mono);
    font-size: 11.5px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition:
      background-color 200ms var(--ease-clean),
      color 200ms var(--ease-clean);

    &:hover {
      background: var(--err);
      color: var(--paper);
    }
  }

  .comments-cta-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: clamp(24px, 4vw, 40px);
  }

  .review-bonus-banner {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 14px;
    background: var(--sun-soft);
    border: 1.5px dashed var(--graphite);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 14.5px;
    letter-spacing: 0;
    color: var(--graphite);
  }

  .write-comment {
    min-width: 280px;
  }

  /* Модалки отзывов в светлом стиле --paper */
  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 2400;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(28, 30, 34, 0.54);
  }

  .comment-modal,
  .full-comment-modal {
    width: 100%;
    max-width: 540px;
    max-height: 90vh;
    overflow-y: auto;
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: var(--radius-card-lg);
    box-shadow: var(--shadow-card);
    color: var(--graphite);
    animation: ${modalRise} 260ms var(--ease-clean);
  }

  .full-comment-modal {
    max-width: 620px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 20px 24px;
    border-bottom: 1px solid var(--line);
    background: var(--foam);

    h3 {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 20px;
      color: var(--graphite);
    }
  }

  .close-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--paper);
    border: 1px solid var(--line);
    color: var(--graphite);
    cursor: pointer;
    flex-shrink: 0;
    transition: background-color 200ms var(--ease-clean);

    &:hover {
      background: var(--sun);
      border-color: var(--sun);
    }
  }

  .modal-body {
    padding: 24px;
  }

  .user-info,
  .rating-selector,
  .delete-confirmation {
    padding: 14px 18px;
    margin-bottom: 18px;
    border-radius: 16px;
    background: var(--foam);
    border: 1px solid var(--line);
  }

  .stars-container {
    display: flex;
    gap: 6px;
    margin: 8px 0;
  }

  .star-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 12px;
    font-size: 24px;
    color: var(--dust);
    cursor: pointer;
    transition:
      transform 180ms var(--ease-clean),
      color 180ms var(--ease-clean),
      background-color 180ms var(--ease-clean);

    &:hover {
      transform: scale(1.06);
    }

    &.selected {
      color: var(--sun-deep);
      background: var(--sun-soft);
      border-color: var(--sun-deep);
    }
  }

  .rating-summary {
    font-family: var(--font-mono);
    font-size: 12.5px;
    color: var(--graphite-70);
  }

  .textarea-label {
    display: block;
    margin-bottom: 8px;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0;
    color: var(--graphite);
  }

  .comment-textarea {
    width: 100%;
    min-height: 130px;
    padding: 14px 16px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: var(--foam);
    color: var(--graphite);
    font-size: 16px;
    line-height: 1.5;
    resize: vertical;
    margin-bottom: 20px;

    &:focus {
      outline: 3px solid var(--aqua);
      outline-offset: 0;
      border-color: var(--aqua);
    }
  }

  .delete-warn {
    margin-top: 8px;
    color: var(--err);
    font-weight: 600;
  }

  .modal-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: flex-end;
  }

  .modal-danger-btn {
    min-height: 48px;
    padding: 12px 24px;
    border-radius: var(--radius-pill);
    border: none;
    background: var(--err);
    color: var(--paper);
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.92);
    }
  }

  .full-comment-content {
    padding: 20px;
    border-radius: 18px;
    background: var(--foam);
    border: 1px solid var(--line);
    margin-bottom: 20px;
  }

  .full-comment-header {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 14px;
    flex-wrap: wrap;
  }

  .full-comment-author {
    flex: 1;
    min-width: 160px;

    h4 {
      font-family: var(--font-display);
      font-size: 17px;
      color: var(--graphite);
    }
  }

  .full-comment-date {
    margin-top: 4px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--graphite-70);
  }

  .full-comment-text {
    color: var(--graphite);
    font-size: 16.5px;
    line-height: 1.6;
    white-space: pre-wrap;
  }

  @media (max-width: 1023px) {
    .notes-masonry {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 767px) {
    padding: 48px 16px;

    .notes-masonry {
      grid-template-columns: 1fr;
    }

    .note-card.tilt-left,
    .note-card.tilt-right {
      transform: rotate(0deg);
    }

    .write-comment {
      width: 100%;
      min-width: 0;
    }

    .modal-overlay {
      padding: 0;
      align-items: flex-end;
    }

    .comment-modal,
    .full-comment-modal {
      border-radius: var(--radius-card) var(--radius-card) 0 0;
      max-height: 90vh;
      animation: ${sheetSlideUp} 280ms var(--ease-clean);
    }

    .modal-actions > * {
      flex: 1 1 140px;
    }
  }
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
`;

export const CommentsContainer = styled.div`
  width: 100%;
  position: relative;
`;
