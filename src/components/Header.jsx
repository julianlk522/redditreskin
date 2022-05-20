import React, {useContext} from 'react'
import RedditContext from '../RedditContext'
import {FaSearch} from 'react-icons/fa'
import {MdOutlineLightMode, MdOutlineDarkMode} from 'react-icons/md'


function Header() {
    const {
        darkMode, 
        setDarkMode, 
        subreddit,
        setSubreddit,
        promptSubmit, 
        removePromptSubmit, 
        iconHover, 
        iconLeave,
        darkModeHover, 
        darkModeLeave,
        darkModeClickHandle,
        fetchSubreddit
    } = useContext(RedditContext)
    
    return (
        <header 
          id={darkMode ? 'headerDark' : 'headerLight'}
          onMouseOver={promptSubmit}
          onMouseLeave={removePromptSubmit}
        >
            {/* search area */}

            <div id="searchArea">
              <input
                type="text"
                className="input"
                id={darkMode 
                  ? 'inputDark'
                  : 'inputLight'}
                value={subreddit}
                onChange={(e) => setSubreddit(e.target.value)}
              />
              <div id="search">
                <FaSearch
                  className = {darkMode 
                    ? 'searchIconDark' 
                    : 'searchIconLight'}
                  id='searchIcon'
                  onClick={() => {
                    fetchSubreddit()
                    removePromptSubmit()
                  }}
                  onMouseOver={iconHover}
                  onMouseLeave = {iconLeave}
                />
                <p id="searchCaption">Click the icon to search!</p>
              </div>
            </div>

            {/* darkMode slider */}

            <div id="darkModeArea">
              <p id="darkModeCaption">Prefer dark mode?  Click the slider</p>
            
              <div 
                className='sliderDiv' 
                id={darkMode 
                    ? 'sliderDivDark'
                    : 'sliderDivLight'}
                onClick={darkModeClickHandle}
                onMouseOver={darkModeHover}
                onMouseLeave={darkModeLeave}
              >
                {(darkMode)
                  ? <MdOutlineDarkMode 
                      className='modeImg' 
                      id="modeImgDark"
                    />
                  : <MdOutlineLightMode 
                      className='modeImg'
                      id="modeImgLight"
                    />}
                <div 
                  className='ball' 
                  id={darkMode ? 'ballDark' : 'ballLight'}
                ></div>
              </div>
            </div>
                
        </header>
    )
}

export default Header