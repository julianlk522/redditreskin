import React from 'react'
import {FaComments} from 'react-icons/fa'


function Post({postInfo, darkMode}) {
    return (
        <article 
            id={darkMode ? 'articleDark' : 'articleLight'}
        >
                <a href={postInfo.url} target="_blank">
                    <h3>{postInfo.title}</h3>
                </a>

                <div id="postDetails">
                    <p>posted by <span 
                        className={postInfo.distinguished === 'moderator' 
                        ? 'authorNameMod'
                        : 'authorName'}
                        id={postInfo.distinguished === 'moderator' 
                            ? `authorNameMod${darkMode 
                                ? 'Dark' 
                                : 'Light'}` 
                            : `authorName${darkMode 
                                ? 'Dark' 
                                : 'Light'}`}
                        >{postInfo.author}</span></p>
                    <span id='commentsImg'>
                        <FaComments style={{
                            opacity: 0.5
                        }}/>
                    </span>
                    <p id='commentsNumber'>{postInfo.num_comments > 1 ? `${postInfo.num_comments} comments` : '1 comment'}</p>
                </div>
        </article>
    )
}

export default Post