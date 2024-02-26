import React, { createContext, useContext, useState } from "react";

interface PostsContextInterface {
  posts: any;
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

export default function useUsersContext() {
  return useContext(PostsContext);
}

export const PostsContextProvider = ({ children }: PostsContextProps) => {
  const [posts, setPosts] = useState<[]>([]);
  const [searchData, setSearchData] = useState<any>();

  const fetchPosts = async () => {
    try {
      const searchParams = ``;

      const posts = await fetch(
        `${process.env.REACT_APP_API}/posts` + searchParams,
        {
          method: "GET",
        }
      );

      const data = await posts.json();
      console.log(data, "posts data from context");
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
      console.log(data, "post data from context");
    } catch (error: any) {
      throw new Error("Error fetching data:", error);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        fetchPosts,
        posts,
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
