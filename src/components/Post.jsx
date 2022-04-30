import React from 'react'

function Post({postInfo}) {
    return (
        <article>
            <a href={postInfo.url} target="_blank">
                <h3>{postInfo.title}</h3>
            </a>
        </article>
    )
}

export default Post