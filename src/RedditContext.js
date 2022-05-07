import { createContext, useState, useEffect } from "react";

const RedditContext = createContext()

export const RedditProvider = ({children}) => {
    const [subreddit, setSubreddit] = useState('webdev')
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    
    const searchIcon = document.getElementById('searchIcon')
    const searchCaption = document.getElementById('searchCaption')
    const darkModeCaption = document.getElementById('darkModeCaption')
    
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
    
    const darkModeHover = () => {
        if (!darkMode) {
            darkModeCaption.style.opacity = 1;
        }
    }
    
    const darkModeLeave = () => {
        if (darkModeCaption.style.opacity !== 0) darkModeCaption.style.opacity = 0;
    }

    const darkModeClickHandle = () => {
        setDarkMode(!darkMode)
        if (darkModeCaption.style.opacity !== 0) darkModeCaption.style.opacity = 0;
    }
    
    return <RedditContext.Provider 
        value={{
        subreddit,
        setSubreddit,
        posts,
        loading,
        darkMode,
        setDarkMode,
        searchIcon,
        searchCaption,
        darkModeCaption,
        fetchSubreddit,
        promptSubmit,
        removePromptSubmit,
        iconHover,
        iconLeave,
        darkModeHover,
        darkModeLeave,
        darkModeClickHandle

    }}>
        {children}
    </RedditContext.Provider>
}

export default RedditContext