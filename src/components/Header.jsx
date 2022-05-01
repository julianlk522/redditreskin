import React from 'react'
// import RedditContext from '../RedditContext'



function Header() {
    // const {initialState} = useContext(RedditContext)

    return (
        <header>
            <div>Search Reddit</div>
            <input type="text" value={
                // initialState.subreddit
                'webdev'
            }/>
        </header>
    )
}

export default Header