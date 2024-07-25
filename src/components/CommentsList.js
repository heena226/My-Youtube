import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
  return (
    <div>
        {comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <Comment  
                        data={comment} 
                    />
                    {comment.replies && comment.replies.length > 0 && (
                        <div className="pl-5 border border-l-black ml-3 mt-1 mb-1">
                            <CommentsList comments={comment.replies} />
                        </div>
                    )}
                </div>
            )
        })}
    </div>
  )
}

export default CommentsList;