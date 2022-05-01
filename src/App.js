import React, { useState, useEffect } from "react";
import {FaSearch, FaReddit} from 'react-icons/fa'
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
  
  const promptSubmit = () => {
    const searchIcon = document.getElementById('searchIcon')
    const searchCaption = document.getElementById('searchCaption')

    searchCaption.style.opacity = 1;
    searchCaption.style.color = 'rgba(0, 0, 0, 0.5)';
    searchIcon.style.transform = 'scale(3)';
    searchIcon.style.color = 'rgba(0, 0, 0, 0.5)';
  }

  const removePromptSubmit = () => {
    const searchIcon = document.getElementById('searchIcon')
    const searchCaption = document.getElementById('searchCaption')

    searchCaption.style.opacity = 0;
    searchIcon.style.transform = 'scale(2)';
    searchIcon.style.color = 'white';
  }
  
  document.addEventListener('keyup', e => {
    if (e.code === 'Enter') {
      e.preventDefault()
      fetchSubreddit()
    }
  })
  
  return (
    // <RedditProvider>
        <>
        <header>
            <input type="text" id="input" value={subreddit} onChange={(e) => setSubreddit(e.target.value)}/>
            <div id="search">
              <FaSearch
                id="searchIcon"
                onMouseOver={promptSubmit}
                onMouseLeave={removePromptSubmit}
                onClick={fetchSubreddit}
              />
              <p id="searchCaption">Click the icon or hit spacebar to search!</p>
            </div>
        </header>

        {(loading) && (
          <div className="loadingDiv">
            <span className="loadingIcon"><FaReddit /></span>
            <h3>Posts Loading...</h3>
          </div>
        )}
        
        {(posts !== null) 
          ? posts.map((post, index) => <Post key={index} postInfo={post.data}/>)
          : ''
        }
        </>
        // {/* </RedditProvider>  */}
  );
}

export default App;
