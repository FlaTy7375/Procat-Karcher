import React, { useState, useEffect, useCallback, useMemo } from "react";
import { StyledComments, CommentsWrapper, CommentsContainer } from "./style";
import SectionName from "../../ui/section-name/section-name";
import Button from "../../ui/button/button";
import { CloseIcon, SparkleIcon } from "../../ui/icons/icons";
import { useAuth } from "../../app/AuthContext";
import { useModal } from "../../app/context-modal";
import { getAvatarPalette, getInitials } from "../../../utils/avatar";
import { beforeAfterItems } from "../../../mocks/before-after";
import BeforeAfter from "./before-after";
import AlertModal from "./AlertModal";

const API_URL = "https://karcher-back.onrender.com";

// TODO(owner): заменить демонстрационные отзывы на реальные отзывы клиентов из Столина (по желанию)
const staticComments = [
  {
    id: -1,
    author_name: "Анна Петрова",
    comment_text:
      "Отличный сервис! Пылесос взяли на выходные, всё работает прекрасно. Очень довольна качеством уборки.",
    rating: 5,
    created_at: "10.12.2025",
  },
  {
    id: -2,
    author_name: "Иван Сидоров",
    comment_text:
      "Брал пылесос помыть диваны. Мощный, справился со всеми задачами. Рекомендую!",
    rating: 5,
    created_at: "09.12.2025",
  },
  {
    id: -3,
    author_name: "Мария Ковалёва",
    comment_text:
      "Арендовала пароочиститель для уборки на кухне и в ванной — плитка и швы стали заметно чище, налёт и жир отлично ушли.",
    rating: 5,
    created_at: "03.12.2025",
  },
];

function CommentAvatar({ comment, size = 46 }) {
  const [imgFailed, setImgFailed] = useState(false);
  const name = comment?.author_name || "Клиент";
  const palette = getAvatarPalette(name);
  const initials = getInitials(name);

  const hasCustomImage =
    comment?.id > 0 &&
    comment?.avatar &&
    !String(comment.avatar).includes("ui-avatars.com") &&
    !imgFailed;

  if (hasCustomImage) {
    return (
      <img
        className="comment-avatar-img"
        src={comment.avatar}
        alt={name}
        width={size}
        height={size}
        loading="lazy"
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <span
      className="comment-avatar-initials"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: palette.bg,
        color: palette.color,
      }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

function StarRating({ value = 5 }) {
  return (
    <div className="rating" aria-label={`Оценка ${value} из 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={`star-${star}`}
          className={`rating-star ${star <= value ? "is-filled" : "is-empty"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Comments() {
  const { user, isAuthenticated } = useAuth();
  const { setIsAuthModalOpen } = useModal();
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFullCommentModal, setShowFullCommentModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(5);
  const [userHasCommented, setUserHasCommented] = useState(false);
  const [, setUserComment] = useState(null);

  const [alertModal, setAlertModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "info",
    onConfirm: null,
  });

  const showAlert = (title, message, type = "info", onConfirm = null) => {
    setAlertModal({
      isOpen: true,
      title,
      message,
      type,
      onConfirm:
        onConfirm || (() => setAlertModal((prev) => ({ ...prev, isOpen: false }))),
    });
  };

  const isStaticComment = (comment) => comment && comment.id < 0;

  const isUserComment = (comment) => {
    if (isStaticComment(comment)) return false;
    if (comment.client_id === undefined || comment.client_id === null) return false;
    if (!user || !user.id) return false;
    return parseInt(user.id, 10) === parseInt(comment.client_id, 10);
  };

  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/comments`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);

        if (user && user.id) {
          const foundUserComment = data.find((comment) => {
            const hasClientId =
              comment.client_id !== null && comment.client_id !== undefined;
            const clientIdNum = parseInt(comment.client_id, 10);
            const userIdNum = parseInt(user.id, 10);
            return hasClientId && clientIdNum === userIdNum;
          });

          if (foundUserComment) {
            setUserHasCommented(true);
            setUserComment(foundUserComment);
          } else {
            setUserHasCommented(false);
            setUserComment(null);
          }
        }
      }
    } catch (err) {
      console.error("Ошибка загрузки комментариев:", err);
    }
  }, [user]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const anyLocalModalOpen =
    showModal || showFullCommentModal || showDeleteModal || alertModal.isOpen;

  useEffect(() => {
    if (!anyLocalModalOpen) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
        setShowFullCommentModal(false);
        setShowDeleteModal(false);
        setAlertModal((prev) => ({ ...prev, isOpen: false }));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [anyLocalModalOpen]);

  const allComments = useMemo(
    () => [
      ...comments.filter(
        (comment) => !staticComments.some((sc) => sc.id === comment.id)
      ),
      ...staticComments,
    ],
    [comments]
  );

  const handleAddComment = () => {
    if (!user || !isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }

    if (userHasCommented) {
      showAlert(
        "Внимание",
        "Вы уже оставляли комментарий. Удалите его чтобы добавить новый.",
        "error"
      );
      return;
    }

    setShowModal(true);
  };

  const handleSubmitComment = async () => {
    if (!newComment.trim()) {
      showAlert("Ошибка", "Введите текст комментария", "error");
      return;
    }

    try {
      const commentData = {
        client_id: user.id,
        comment_text: newComment,
        author_name: `${user.first_name} ${user.last_name || ""}`.trim(),
        rating,
      };

      const response = await fetch(`${API_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });

      if (response.ok) {
        const result = await response.json();

        setComments((prev) => [result, ...prev]);
        setUserHasCommented(true);
        setUserComment(result);
        setShowModal(false);
        setNewComment("");
        setRating(5);

        showAlert(
          "Успех",
          result.message || "Комментарий успешно добавлен!",
          "success"
        );
      } else {
        const errorData = await response.json();
        showAlert("Ошибка", errorData.error || "Неизвестная ошибка", "error");
      }
    } catch (err) {
      console.error("Ошибка отправки комментария:", err);
      showAlert(
        "Ошибка",
        "Не удалось отправить комментарий. Попробуйте позже.",
        "error"
      );
    }
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const handleShowFullComment = (comment) => {
    setSelectedComment(comment);
    setShowFullCommentModal(true);
  };

  const handleCommentCardClick = (comment, e) => {
    if (e.target.closest("button")) {
      return;
    }
    handleShowFullComment(comment);
  };

  const handleDeleteClick = (comment) => {
    if (isStaticComment(comment)) {
      showAlert("Внимание", "Этот комментарий нельзя удалить", "error");
      return;
    }

    if (!isUserComment(comment)) {
      showAlert(
        "Внимание",
        "Вы можете удалить только свой комментарий",
        "error"
      );
      return;
    }

    setCommentToDelete(comment);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!commentToDelete || !commentToDelete.id) {
      showAlert(
        "Ошибка",
        "Не удалось определить комментарий для удаления",
        "error"
      );
      return;
    }

    try {
      setShowDeleteModal(false);

      const response = await fetch(
        `${API_URL}/comments/${commentToDelete.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setComments((prev) =>
          prev.filter((comment) => comment.id !== commentToDelete.id)
        );
        setUserHasCommented(false);
        setUserComment(null);
        setCommentToDelete(null);

        showAlert("Успех", "Комментарий успешно удалён!", "success");
      } else {
        const errorData = await response.json();
        showAlert("Ошибка", errorData.error || "Неизвестная ошибка", "error");
      }
    } catch (err) {
      console.error("Ошибка удаления комментария:", err);
      showAlert(
        "Ошибка",
        "Не удалось удалить комментарий. Попробуйте позже.",
        "error"
      );
    }
  };

  return (
    <StyledComments id="comments">
      <div className="comments-header-wrap">
        <SectionName
          className="comments-name"
          number="05"
          tag="Отзывы и результат"
        >
          Стена отзывов
        </SectionName>
      </div>

      <CommentsWrapper>
        {beforeAfterItems.length > 0 && (
          <div className="before-after-wall">
            <BeforeAfter items={beforeAfterItems} />
          </div>
        )}

        <CommentsContainer>
          <div className="notes-masonry">
            {allComments.map((comment, idx) => {
              const tiltClass = idx % 2 === 0 ? "tilt-left" : "tilt-right";
              const isLong = comment.comment_text.length > 140;

              return (
                <article
                  key={comment.id ?? `c-${idx}`}
                  className={`note-card ${tiltClass}`}
                  onClick={(e) => handleCommentCardClick(comment, e)}
                >
                  <span className="note-tape" aria-hidden="true" />

                  <div className="note-head">
                    <CommentAvatar comment={comment} size={46} />
                    <div className="author-info">
                      <h3 title={comment.author_name}>{comment.author_name}</h3>
                      <StarRating value={comment.rating || 5} />
                    </div>
                  </div>

                  <p className="comment-description">
                    {isLong ? (
                      <>
                        {comment.comment_text.substring(0, 140)}…{" "}
                        <button
                          type="button"
                          className="show-more-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleShowFullComment(comment);
                          }}
                        >
                          Показать полностью
                        </button>
                      </>
                    ) : (
                      comment.comment_text
                    )}
                  </p>

                  <div className="comment-footer-meta">
                    {comment.created_at && (
                      <span className="comment-date">{comment.created_at}</span>
                    )}
                    {isUserComment(comment) && (
                      <button
                        type="button"
                        className="delete-comment-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteClick(comment);
                        }}
                        title="Удалить комментарий"
                      >
                        Удалить
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </CommentsContainer>

        <div className="comments-cta-wrap">
          <div className="review-bonus-banner">
            <SparkleIcon size={16} />
            <span>Оставь отзыв&nbsp;— получи −10%</span>
          </div>

          <Button className="write-comment" onClick={handleAddComment}>
            {user && isAuthenticated
              ? userHasCommented
                ? "Вы уже оставляли комментарий"
                : "Оставить комментарий"
              : "Войдите, чтобы оставить комментарий"}
          </Button>
        </div>
      </CommentsWrapper>

      {/* Модальное окно добавления отзыва */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Добавить комментарий"
        >
          <div
            className="comment-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Добавить комментарий</h3>
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowModal(false)}
                aria-label="Закрыть"
              >
                <CloseIcon size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="user-info">
                <p>
                  <strong>Имя:</strong> {user?.first_name} {user?.last_name}
                </p>
              </div>

              <div className="rating-selector">
                <p>
                  <strong>Ваша оценка:</strong>
                </p>
                <div className="stars-container">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={`rating-star-${star}`}
                      onClick={() => handleStarClick(star)}
                      className={`star-btn ${star <= rating ? "selected" : ""}`}
                      type="button"
                      aria-label={`Оценка ${star} из 5`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <p className="rating-summary">{rating} из 5 звёзд</p>
              </div>

              <label className="textarea-label" htmlFor="comment-input">
                Текст отзыва
              </label>
              <textarea
                id="comment-input"
                className="comment-textarea"
                placeholder="Напишите, что отмывали и как впечатления..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows="5"
              />
              <div className="modal-actions">
                <Button onClick={handleSubmitComment}>Опубликовать</Button>
                <Button variant="outline" onClick={() => setShowModal(false)}>
                  Отмена
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно полного отзыва */}
      {showFullCommentModal && selectedComment && (
        <div
          className="modal-overlay"
          onClick={() => setShowFullCommentModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Полный отзыв"
        >
          <div
            className="full-comment-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Полный отзыв</h3>
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowFullCommentModal(false)}
                aria-label="Закрыть"
              >
                <CloseIcon size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="full-comment-content">
                <div className="full-comment-header">
                  <CommentAvatar comment={selectedComment} size={56} />
                  <div className="full-comment-author">
                    <h4>{selectedComment.author_name}</h4>
                    <StarRating value={selectedComment.rating || 5} />
                    {selectedComment.created_at && (
                      <div className="full-comment-date">
                        {selectedComment.created_at}
                      </div>
                    )}
                  </div>
                  {isUserComment(selectedComment) && (
                    <button
                      type="button"
                      className="delete-comment-btn full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowFullCommentModal(false);
                        handleDeleteClick(selectedComment);
                      }}
                      title="Удалить комментарий"
                    >
                      Удалить
                    </button>
                  )}
                </div>
                <div className="full-comment-text">
                  {selectedComment.comment_text}
                </div>
              </div>
              <div className="modal-actions">
                <Button
                  variant="outline"
                  onClick={() => setShowFullCommentModal(false)}
                >
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно подтверждения удаления */}
      {showDeleteModal && commentToDelete && (
        <div
          className="modal-overlay"
          onClick={() => setShowDeleteModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Удалить комментарий"
        >
          <div
            className="comment-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Удалить комментарий</h3>
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowDeleteModal(false)}
                aria-label="Закрыть"
              >
                <CloseIcon size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="delete-confirmation">
                <p>Вы уверены, что хотите удалить свой комментарий?</p>
                <p className="delete-warn">Это действие нельзя отменить.</p>
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  className="modal-danger-btn"
                  onClick={handleConfirmDelete}
                >
                  Удалить
                </button>
                <Button
                  variant="outline"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Отмена
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <AlertModal
        isOpen={alertModal.isOpen}
        onClose={() => setAlertModal((prev) => ({ ...prev, isOpen: false }))}
        title={alertModal.title}
        message={alertModal.message}
        type={
          alertModal.type === "error"
            ? "error"
            : alertModal.type === "success"
            ? "confirm"
            : "info"
        }
        onConfirm={alertModal.onConfirm}
      />
    </StyledComments>
  );
}
