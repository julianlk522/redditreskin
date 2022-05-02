import React from 'react'
import {FaComments} from 'react-icons/fa'


function Post({postInfo}) {
    return (
        <article>
            <a href={postInfo.url} target="_blank">
                <h3>{postInfo.title}</h3>
            </a>

            <div id="postDetails">
                <p>posted by <span id={postInfo.distinguished === 'moderator' ? 'authorNameMod' : 'authorName'}>{postInfo.author}</span></p>
                <span id='commentsImg'>
                    <FaComments />
                </span>
                <p id='commentsNumber'>{postInfo.num_comments > 1 ? `${postInfo.num_comments} comments` : '1 comment'}</p>
            </div>
        </article>
    )
}

export default Post