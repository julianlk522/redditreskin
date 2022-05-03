import React, {useContext} from 'react'
import RedditContext from '../RedditContext'
import Post from './Post'
import Loading from './Loading'

function PostsSection() {
    const {darkMode, posts, loading} = useContext(RedditContext)
    
    if (loading) return <Loading />
    
    if (posts !== null) return (
        <div id="postsDiv">{posts.map((post, index) => <Post key={index} postInfo={post.data} darkMode={darkMode}/>)}</div>
    )
}

export default PostsSection