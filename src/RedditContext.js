import { createContext } from "react";

const RedditContext = createContext()

export const RedditProvider = ({children}) => {
    const initialState = {
        subreddit: 'webdev',
    }
    
    return <RedditContext.Provider value={{
        //  state: state.subreddit
        ...initialState,
    }}>
        {children}
    </RedditContext.Provider>
}

export default RedditContext