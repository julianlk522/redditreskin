import React, {useContext} from 'react'
import RedditContext from '../RedditContext'
import {FaReddit} from 'react-icons/fa'

function Loading() {
    const {darkMode} = useContext(RedditContext)
    
    return <>
        <div
            className="loadingDiv"
            id={darkMode ? 'loadingDivDark' : 'loadingDivLight'}
        >
            <span
                className="loadingIcon"
            ><FaReddit/></span>
            <h3>Posts Loading...</h3>
        </div>
    </>
}

export default Loading