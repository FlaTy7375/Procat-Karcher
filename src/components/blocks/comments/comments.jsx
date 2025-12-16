import React, { useState, useEffect, useRef, useCallback } from "react";
import { StyledComments, CommentsWrapper, CommentsContainer } from "./style";
import SectionName from "../../ui/section-name/section-name";
import Card from "../../ui/card/card";
import { useAuth } from "../../app/AuthContext";
import { useModal } from "../../app/context-modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import AlertModal from "./AlertModal";
import 'swiper/css';
import 'swiper/css/navigation';

const API_URL = 'https://karcher-back.onrender.com';

const staticComments = [
  {
    id: -1,
    author_name: "Анна Петрова",
    comment_text: "Отличный сервис! Пылесос взяли на выходные, всё работает прекрасно. Очень довольна качеством уборки.",
    rating: 5,
    created_at: "10.12.2025"
  },
  {
    id: -2,
    author_name: "Иван Сидоров",
    comment_text: "Брал пылесос помыть диваны. Мощный, справился со всеми задачами. Рекомендую!",
    rating: 5,
    created_at: "09.12.2025"
  },
  {
    id: -3,
    author_name: "Мария Ковалёва",
    comment_text: "Пароочиститель просто супер! Почистил диван, ковры и даже шторы. Вещи выглядят как новые.",
    rating: 5,
    created_at: "03.12.2025"
  }
];

const getAvatarFromName = (name) => {
  if (!name) return '';
  
  const words = name.split(' ');
  if (words.length >= 2) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(words[0].charAt(0) + words[1].charAt(0))}&background=random&size=64`;
  } else {
    const initials = name.length >= 2 ? name.substring(0, 2) : name;
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=random&size=64`;
  }
};

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
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [userHasCommented, setUserHasCommented] = useState(false);
  const [, setUserComment] = useState(null);
  
  const [alertModal, setAlertModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "info",
    onConfirm: null
  });
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const showAlert = (title, message, type = "info", onConfirm = null) => {
    setAlertModal({
      isOpen: true,
      title,
      message,
      type,
      onConfirm: onConfirm || (() => setAlertModal(prev => ({ ...prev, isOpen: false })))
    });
  };

  const isStaticComment = (comment) => {
    return comment && comment.id < 0;
  };

  const isUserComment = (comment) => {
    if (isStaticComment(comment)) {
      return false;
    }
    
    if (comment.client_id === undefined || comment.client_id === null) {
      return false;
    }
    
    if (!user || !user.id) {
      return false;
    }
    
    const userId = parseInt(user.id);
    const commentUserId = parseInt(comment.client_id);
    
    return userId === commentUserId;
  };

  const getCommentAvatar = (comment) => {
    if (isStaticComment(comment)) {
      return getAvatarFromName(comment.author_name);
    }
    
    if (comment.avatar) {
      return comment.avatar;
    }
    
    return getAvatarFromName(comment.author_name);
  };

  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/comments`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
        
        if (user && user.id) {
          const userComment = data.find(comment => {
            const hasClientId = comment.client_id !== null && comment.client_id !== undefined;
            const clientIdNum = parseInt(comment.client_id);
            const userIdNum = parseInt(user.id);
            return hasClientId && clientIdNum === userIdNum;
          });
          
          if (userComment) {
            setUserHasCommented(true);
            setUserComment(userComment);
          } else {
            setUserHasCommented(false);
            setUserComment(null);
          }
        }
      }
    } catch (err) {
      console.error("Ошибка загрузки комментариев:", err);
      showAlert("Ошибка", "Не удалось загрузить комментарии", "error");
    }
  }, [user]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  useEffect(() => {
    if (showModal || showFullCommentModal || showDeleteModal || alertModal.isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      if (!showModal && !showFullCommentModal && !showDeleteModal && !alertModal.isOpen) {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
      }
    };
  }, [showModal, showFullCommentModal, showDeleteModal, alertModal.isOpen]);

  // Простая навигация без использования навигации Swiper
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const allComments = [
    ...comments.filter(comment => 
      !staticComments.some(sc => sc.id === comment.id)
    ),
    ...staticComments
  ];

  const handleAddComment = () => {
    if (!user || !isAuthenticated) {
      // Если пользователь не авторизован, открываем окно регистрации/входа
      setIsAuthModalOpen(true);
      return;
    }
    
    if (userHasCommented) {
      showAlert("Внимание", "Вы уже оставляли комментарий. Удалите его чтобы добавить новый.", "error");
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
        rating: rating
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
        
        setComments(prev => [result, ...prev]);
        setUserHasCommented(true);
        setUserComment(result);
        setShowModal(false);
        setNewComment("");
        setRating(5);
        
        showAlert("Успех", result.message || "Комментарий успешно добавлен!", "success");
      } else {
        const errorData = await response.json();
        showAlert("Ошибка", errorData.error || "Неизвестная ошибка", "error");
      }
    } catch (err) {
      console.error("Ошибка отправки комментария:", err);
      showAlert("Ошибка", "Не удалось отправить комментарий. Попробуйте позже.", "error");
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
    if (e.target.closest('button')) {
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
      showAlert("Внимание", "Вы можете удалить только свой комментарий", "error");
      return;
    }
    
    setCommentToDelete(comment);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!commentToDelete || !commentToDelete.id) {
      showAlert("Ошибка", "Не удалось определить комментарий для удаления", "error");
      return;
    }

    try {
      setShowDeleteModal(false);
      
      const response = await fetch(`${API_URL}/comments/${commentToDelete.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setComments(prev => prev.filter(comment => comment.id !== commentToDelete.id));
        setUserHasCommented(false);
        setUserComment(null);
        setCommentToDelete(null);
        
        showAlert("Успех", "Комментарий успешно удален!", "success");
      } else {
        const errorData = await response.json();
        showAlert("Ошибка", errorData.error || "Неизвестная ошибка", "error");
      }
    } catch (err) {
      console.error("Ошибка удаления комментария:", err);
      showAlert("Ошибка", "Не удалось удалить комментарий. Попробуйте позже.", "error");
    }
  };

  return (
    <StyledComments id="comments">
      <SectionName className="comments-name">Ваши отзывы</SectionName>
      <CommentsWrapper>
        <CommentsContainer>
          <div className="slider-container">
            <button 
              className="slider-arrow prev" 
              ref={prevRef}
              onClick={handlePrev}
              style={{ 
                opacity: isFirstSlide ? 0.4 : 1, 
                cursor: isFirstSlide ? 'default' : 'pointer' 
              }}
              disabled={isFirstSlide}
              aria-label="Предыдущий слайд"
            >
              ←
            </button>
            
            <Swiper
              ref={swiperRef}
              modules={[]} // Убираем Navigation модуль
              onSlideChange={(swiper) => {
                setIsFirstSlide(swiper.isBeginning);
                setIsLastSlide(swiper.isEnd);
              }}
              onInit={(swiper) => {
                setIsFirstSlide(swiper.isBeginning);
                setIsLastSlide(swiper.isEnd);
              }}
              spaceBetween={20}
              slidesPerView={1}
              slidesPerGroup={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
                },
                1210: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
                }
              }}
              className="comments-swiper"
            >
              {allComments.map((comment, index) => (
                <SwiperSlide key={`comment-${comment.id}-${index}`}>
                  <div 
                    className="comments-card-wrapper"
                    onClick={(e) => handleCommentCardClick(comment, e)}
                  >
                    <Card className="comments-card">
                      <div className="comment-author">
                        <img 
                          src={getCommentAvatar(comment)} 
                          alt="avatar" 
                          width="64" 
                          height="64"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = getAvatarFromName(comment.author_name);
                          }}
                        />
                        <div className="author-info">
                          <h2 title={comment.author_name}>{comment.author_name}</h2>
                          <div className="rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span 
                                key={`star-${comment.id}-${star}`}
                                style={{ 
                                  color: star <= (comment.rating || 5) ? '#FFD700' : '#DDD',
                                }}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="comment-description">
                        {comment.comment_text.length > 120 ? (
                          <>
                            {comment.comment_text.substring(0, 120)}...
                            <button 
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
                      </div>
                      {comment.created_at && (
                        <div className="comment-date">
                          {comment.created_at}
                        </div>
                      )}
                      {isUserComment(comment) && (
                        <button 
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
                    </Card>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <button 
              className="slider-arrow next" 
              ref={nextRef}
              onClick={handleNext}
              style={{ 
                opacity: isLastSlide ? 0.4 : 1, 
                cursor: isLastSlide ? 'default' : 'pointer' 
              }}
              disabled={isLastSlide}
              aria-label="Следующий слайд"
            >
              →
            </button>
          </div>
        </CommentsContainer>
        
        <button 
          className="write-comment" 
          onClick={handleAddComment}
        >
          {user && isAuthenticated ? 
            (userHasCommented ? "Вы уже оставляли комментарий" : "Оставить комментарий") : 
            "Войдите, чтобы оставить комментарий"}
        </button>
      </CommentsWrapper>

      {showModal && (
        <div className="modal-overlay no-scroll" onClick={() => setShowModal(false)}>
          <div className="comment-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Добавить комментарий</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="user-info">
                <p>
                  <strong>Имя:</strong> {user?.first_name} {user?.last_name}
                </p>
              </div>
              
              <div className="rating-selector">
                <p><strong>Ваша оценка:</strong></p>
                <div className="stars-container">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={`rating-star-${star}`}
                      onClick={() => handleStarClick(star)}
                      className={`star-btn ${star <= rating ? 'selected' : ''}`}
                      type="button"
                      aria-label={`Оценка ${star} из 5`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <p style={{ color: '#ffd700', fontWeight: 'bold' }}>
                  {rating} из 5 звезд
                </p>
              </div>
              
              <textarea
                className="comment-textarea"
                placeholder="Напишите ваш комментарий..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows="6"
              />
              <div className="modal-actions">
                <button onClick={handleSubmitComment}>Опубликовать</button>
                <button onClick={() => setShowModal(false)}>Отмена</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showFullCommentModal && selectedComment && (
        <div className="modal-overlay no-scroll" onClick={() => setShowFullCommentModal(false)}>
          <div className="full-comment-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Полный комментарий</h3>
              <button className="close-btn" onClick={() => setShowFullCommentModal(false)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="full-comment-content">
                <div className="full-comment-header">
                  <img 
                    src={getCommentAvatar(selectedComment)}
                    alt="avatar"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getAvatarFromName(selectedComment.author_name);
                    }}
                  />
                  <div className="full-comment-author">
                    <h4>{selectedComment.author_name}</h4>
                    <div className="full-comment-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={`full-star-${star}`} style={{ color: star <= (selectedComment.rating || 5) ? '#FFD700' : '#DDD' }}>
                          ★
                        </span>
                      ))}
                    </div>
                    {selectedComment.created_at && (
                      <div className="full-comment-date">
                        {selectedComment.created_at}
                      </div>
                    )}
                  </div>
                  {isUserComment(selectedComment) && (
                    <button 
                      className="delete-comment-btn full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowFullCommentModal(false);
                        handleDeleteClick(selectedComment);
                      }}
                      title="Удалить комментарий"
                    >
                      🗑️ Удалить
                    </button>
                  )}
                </div>
                <div className="full-comment-text">
                  {selectedComment.comment_text}
                </div>
              </div>
              <div className="modal-actions">
                <button onClick={() => setShowFullCommentModal(false)}>Закрыть</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && commentToDelete && (
        <div className="modal-overlay no-scroll" onClick={() => setShowDeleteModal(false)}>
          <div className="comment-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Удалить комментарий</h3>
              <button className="close-btn" onClick={() => setShowDeleteModal(false)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="delete-confirmation">
                <p>Вы уверены, что хотите удалить свой комментарий?</p>
                <p style={{ color: '#ffd700', marginTop: '10px' }}>
                  Это действие нельзя отменить.
                </p>
              </div>
              <div className="modal-actions">
                <button onClick={handleConfirmDelete} style={{ background: '#dc3545', borderColor: '#dc3545' }}>
                  Удалить
                </button>
                <button onClick={() => setShowDeleteModal(false)}>Отмена</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <AlertModal
        isOpen={alertModal.isOpen}
        onClose={() => setAlertModal(prev => ({ ...prev, isOpen: false }))}
        title={alertModal.title}
        message={alertModal.message}
        type={alertModal.type === "error" ? "error" : alertModal.type === "success" ? "confirm" : "info"}
        onConfirm={alertModal.onConfirm}
      />
    </StyledComments>
  );
}