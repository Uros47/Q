import React, { createContext, useContext, useState } from "react";

interface PostsContextInterface {
  posts: any;
  post: any;
  setPost: (post: any) => void;
  setPosts: (post: any) => void;
  searchData: string;
  setSearchData: (searchData: string) => void;
  fetchPostById: (id: string) => void;
  fetchPosts: () => void;
}

const PostsContext = createContext<PostsContextInterface>(
  {} as PostsContextInterface
);

interface PostsContextProps {
  children: React.ReactNode;
}

export default function usePostsContext() {
  return useContext(PostsContext);
}

export const PostsContextProvider = ({ children }: PostsContextProps) => {
  const [posts, setPosts] = useState<[]>([]);
  const [post, setPost] = useState<{}>({});
  const [searchData, setSearchData] = useState<any>();

  const fetchPosts = async () => {
    try {
      const searchParams = searchData ? `?userId=${searchData}` : ``;

      const posts = await fetch(
        `${process.env.REACT_APP_API}/posts` + searchParams,
        {
          method: "GET",
        }
      );

      const data = await posts.json();
      setPosts(data);
    } catch (error: any) {
      throw new Error("Error fetching data:", error);
    }
  };

  const fetchPostById = async (id: string) => {
    try {
      const post = await fetch(`${process.env.REACT_APP_API}/posts/${id}`, {
        method: "GET",
      });
      const data = await post.json();
      setPost(data);
    } catch (error: any) {
      throw new Error("Error fetching data:", error);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        fetchPosts,
        posts,
        post,
        setPost,
        fetchPostById,
        setPosts,
        searchData,
        setSearchData,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
