import React from 'react';

import './comments-list.css';
import CommentListItem from '../comment-list-item/comment-list-item';

function CommentsList({posts, delComment, date}) {
    
        const elements = posts.map((item) => {

            const {id, ...itemProps} = item
                return (
                    <CommentListItem
                        {...itemProps} 
                        delComment={() => delComment(id)}
                        key={id}
                    /> 
                )
            })
            if (elements.length === 0) {
                return (
                    <div className='contaianer'>
                        <h2 className='text-center'>Комментариев нет</h2>
                    </div>
                )
            }
    return (
        <div className="container">
            <ul className="list-group list-unstyled">
                {elements}
            </ul>
        </div>
    )
}



export default CommentsList;
