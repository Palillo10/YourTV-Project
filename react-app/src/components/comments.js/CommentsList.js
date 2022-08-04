import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { getCommentsThunk } from '../../store/comments'
import CreateCommentForm from './CreateCommentForm'
import EditCommentForm from './EditCommentForm'

const CommentsList = () => {
  const dispatch = useDispatch()
  const comments = useSelector(state => state.comments)
  const sessionUser = useSelector(state => state.session.user)
  const [openCreateForm, setOpenCreateForm] = useState(false)

  useEffect(() => {
    dispatch(getCommentsThunk())
  }, [dispatch])



  if (!comments) return null

  return (<div>
    {sessionUser && <>
      <button onClick={() => setOpenCreateForm(!openCreateForm)}>Create Comment</button>
      {openCreateForm && <CreateCommentForm user={sessionUser} />} </>}

    {Object.values(comments).map(comment => (
      <div key={comment.id}>
        <h2>
          {comment.commenter.channel_name}
        </h2>
        <h1>
          {comment.body}
        </h1>
        <div> {comment.updated_at}</div>
        {sessionUser && <EditCommentForm user={sessionUser} comment={comment} />}
      </div>
    ))}
  </div>)

}


export default CommentsList
