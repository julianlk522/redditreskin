import React from "react";
import { RedditProvider } from "./RedditContext";
import Header from "./components/Header";
import PostsSection from "./components/PostsSection";

function App() {
  
  return (
    <RedditProvider>
      <Header />
      <PostsSection />
    </RedditProvider>
  );
}

export default App;