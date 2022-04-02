// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {CommentDetails, isLikeBtnCliked, onDeleteComment} = props
  const {name, comment, id, date, isLiked, backgroundIndex} = CommentDetails

  const isLike = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeColor = isLiked ? 'like-color' : ''

  const onClickLikeBtn = () => {
    isLikeBtnCliked(id)
  }

  const onDeleteItem = () => {
    onDeleteComment(id)
  }

  return (
    <li key={id}>
      <div className="name-comment-container">
        <div className={`first-container ${backgroundIndex}`}>
          <p className="firstLetter">{name[0].toUpperCase()}</p>
        </div>
        <div className="name-card">
          <div className="name-min-cls">
            <p className="name">{name}</p>
            <p className="time-ago-cls">{formatDistanceToNow(date)}</p>
          </div>
          <p className="content">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <button className="like-btn" type="button" onClick={onClickLikeBtn}>
          <img src={isLike} alt="like" />
          <span className={`like-cls ${likeColor}`}>Like</span>
        </button>
        <button
          className="del-btn"
          onClick={onDeleteItem}
          type="button"
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete-icon"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
