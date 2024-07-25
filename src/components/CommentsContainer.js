import React from 'react'
import Comment from './Comment'
import CommentsList from './CommentsList'

const CommentsContainer = () => {
    const commentsData = [
        {
          "name": "Jane Smith",
          "comment": "Thanks for sharing!",
          "replies": [
            {
              "name": "Alice Johnson",
              "comment": "Interesting perspective.",
              "id": 2
            }
          ],
          "id": 1
        },
        {
          "name": "Charlie Davis",
          "comment": "This is a great post!",
          "replies": [
            {
              "name": "Bob Brown",
              "comment": "Interesting perspective.",
              "replies": [
                {
                  "name": "John Doe",
                  "comment": "I learned something new today.",
                  "replies": [
                    {
                      "name": "Jane Smith",
                      "comment": "This is a great post!",
                      "replies": [
                        {
                          "name": "Alice Johnson",
                          "comment": "I totally agree with this.",
                          "id": 7
                        }
                      ],
                      "id": 6
                    }
                  ],
                  "id": 5
                }
              ],
              "id": 4
            }
          ],
          "id": 3
        },
        {
          "name": "Jane Smith",
          "comment": "I totally agree with this.",
          "replies": [
            {
              "name": "Charlie Davis",
              "comment": "Thanks for sharing!",
              "replies": [
                {
                  "name": "Bob Brown",
                  "comment": "I learned something new today.",
                  "replies": [
                    {
                      "name": "John Doe",
                      "comment": "Interesting perspective.",
                      "id": 10
                    }
                  ],
                  "id": 9
                }
              ],
              "id": 8
            }
          ],
          "id": 11
        },
        {
          "name": "Alice Johnson",
          "comment": "I totally agree with this.",
          "replies": [
            {
              "name": "Jane Smith",
              "comment": "This is a great post!",
              "id": 12
            }
          ],
          "id": 13
        },
        {
          "name": "John Doe",
          "comment": "Interesting perspective.",
          "replies": [
            {
              "name": "Bob Brown",
              "comment": "I learned something new today.",
              "id": 14
            }
          ],
          "id": 15
        }
      ]
      
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer