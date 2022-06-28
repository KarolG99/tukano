import React from 'react'
import { IComments } from '../../types'
import { CommentsWrapper } from './Comments.styles'

const Comments = ({comment}: IComments) => {
  return (
    <CommentsWrapper>
        <i>{comment}</i>
    </CommentsWrapper>
  )
}

export default Comments