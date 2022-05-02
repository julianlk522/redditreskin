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

  const searchIcon = document.getElementById('searchIcon')
  const searchCaption = document.getElementById('searchCaption')
  const postsSection = document.getElementById('postsDiv')
  
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
          console.log(jsonData.data.children)
        }
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
  }
  
  const promptSubmit = () => {
    searchCaption.style.opacity = 1;
    // searchCaption.style.color = 'rgba(0, 0, 0, 0.5)';
    searchIcon.style.transform = 'scale(3)';
    // searchIcon.style.color = 'rgba(0, 0, 0, 0.5)';
  }

  const removePromptSubmit = () => {
    searchCaption.style.opacity = 0;
    searchIcon.style.transform = 'scale(2)';
  }
  
  const iconHover = () => {
    searchIcon.classList.add('searchIconShadow')
  }

  const iconLeave = () => {
    searchIcon.classList.remove('searchIconShadow')

  }
  
  // //  Submit with Enter
  // document.addEventListener('keyup', e => {
  //   if (e.code === 'Enter') {
  //     fetchSubreddit()
  //   }
  // })
  
  return (
    // <RedditProvider>
        <>
        <header 
          onMouseOver={promptSubmit}
          onMouseLeave={removePromptSubmit}
        >
            <input 
              type="text" 
              id="input" 
              value={subreddit} 
              onChange={(e) => setSubreddit(e.target.value)}
            />
            <div id="search">
              <FaSearch
                id="searchIcon"
                onClick={() => {
                  fetchSubreddit()
                  removePromptSubmit()
                }}
                onMouseOver={iconHover}
                onMouseLeave = {iconLeave}
              />
              <p id="searchCaption">Click the icon to search!</p>
            </div>

            {/* <div id="darkToggle">
              <input type="checkbox" />
              <span id="slider">Hello</span>
            </div> */}
        </header>

        {(loading) && (
          <div className="loadingDiv">
            <span id="loadingIcon"><FaReddit/></span>
            <h3>Posts Loading...</h3>
          </div>
        )}
        
        {(posts !== null) 
          ? <div id="postsDiv">{posts.map((post, index) => <Post key={index} postInfo={post.data}/>)}</div>
          : ''
        }
        </>
        // {/* </RedditProvider>  */}
  );
}

export default App;


{/* 

Moderator post Y/N
Comments #
distinguished: moderator / null


 */}