import React, { useState, useEffect } from "react";
import {FaSearch} from 'react-icons/fa'
// import {RedditProvider} from "./RedditContext";
import Post from "./components/Post";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

function App() {
  const [subreddit, setSubreddit] = useState('webdev')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  
  const redditURL = `https://www.reddit.com/r/${subreddit}.json`
  
  useEffect(() => {
    fetchSubreddit()    
  }, [])

  const fetchSubreddit = async () => {
    try {
        setLoading(true)
      
        const rawData = await fetch(redditURL)
        const jsonData = await rawData.json()
        
        if (jsonData !== null) {
          setPosts(jsonData.data.children)
          setLoading(false)
        }
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
  }

  if (loading) return <Spinner />
  
  return (
    // <RedditProvider>
        <>
        <header>
          <input type="text" className="input" value={subreddit} onChange={(e) => setSubreddit(e.target.value)}/>
          <FaSearch onClick={fetchSubreddit}/>
        </header>
        {(posts !== null) 
          ? posts.map((post, index) => <Post key={index} postInfo={post.data}/>)
          : ''
        }
        </>
        // {/* </RedditProvider>  */}
  );
}

export default App;
