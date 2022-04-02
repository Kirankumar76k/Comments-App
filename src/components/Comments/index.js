import {Component} from 'react'

import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    intialCommentList: [],
    name: '',
    comment: '',
  }

  onNameEvent = event => {
    this.setState({name: event.target.value})
  }

  onCommentEvent = event => {
    this.setState({comment: event.target.value})
  }

  onClickAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      backgroundIndex:
        initialContainerBackgroundClassNames[Math.ceil(Math.random() * 6)],
    }

    this.setState(prevState => ({
      intialCommentList: [...prevState.intialCommentList, newComment],
      name: '',
      comment: '',
    }))
  }

  isLikeBtnCliked = id => {
    this.setState(prevState => ({
      intialCommentList: prevState.intialCommentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onDeleteComment = id => {
    this.setState(prevState => ({
      intialCommentList: prevState.intialCommentList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {name, comment, intialCommentList} = this.state

    return (
      <div className="bg-container">
        <div className="dd">
          <div className="container">
            <form className="user-container" onSubmit={this.onClickAddComment}>
              <h1 className="heading">Comments</h1>
              <p className="description">
                Say Something about 4.0 technologies
              </p>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                className="input-cls"
                onChange={this.onNameEvent}
              />
              <textarea
                type="text"
                value={comment}
                placeholder="Your Comment"
                className="textarea-cls"
                onChange={this.onCommentEvent}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-img"
            />
          </div>
          <hr />
          <div className="comments-container">
            <p className="head">
              <span className="total-cls">{intialCommentList.length}</span>
              Comments
            </p>
            <ul className="item-list">
              {intialCommentList.map(eachItem => (
                <CommentItem
                  CommentDetails={eachItem}
                  key={eachItem.id}
                  isLikeBtnCliked={this.isLikeBtnCliked}
                  onDeleteComment={this.onDeleteComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Comments
