import React, { createContext, useContext, useState } from "react";
import { CommentInterface, PostInterface } from "../Interfaces/Interfaces";

interface PostsContextInterface {
  posts: PostInterface[];
  post: PostInterface;
  comments: CommentInterface[];
  setPost: (post: PostInterface) => void;
  setPosts: (post: PostInterface[]) => void;
  searchData: string;
  setSearchData: (searchData: string) => void;
  fetchPostById: (id: string) => void;
  fetchPosts: () => void;
  fetchCommentsByPostId: (id: string) => void;
  fetchDataFromMultipleEndpoints: () => void;
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
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [comments, setComments] = useState<CommentInterface[]>([]);
  const [post, setPost] = useState<PostInterface>({});
  const [searchData, setSearchData] = useState<any>();
  // const [allData, setAllData] = useState();

  // wip

  const postsEndpoint = "posts";
  const commentsEndpoint = "comments";
  const usersEndpoint = "users";

  const fetchData = async (url: string) => {
    const response = await fetch(`${process.env.REACT_APP_API}/${url}`);
    return response.json();
  };
  const fetchDataFromMultipleEndpoints = async () => {
    try {
      const [postsData, commentsData, usersData] = await Promise.all([
        fetchData(postsEndpoint),
        fetchData(commentsEndpoint),
        fetchData(usersEndpoint),
      ]);
      const allData = [];

      allData.push(postsData);
      allData.push(commentsData);
      allData.push(usersData);
      console.log(allData, "all data");
      // setAllData(allData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // wip

  const fetchPosts = async () => {
    try {
      const searchParams = searchData ? `?userId=${searchData}` : ``;

      const posts = await fetch(
        `${process.env.REACT_APP_API}/posts` + searchParams,
        {
          method: "GET",
        }
      );

      const data: PostInterface[] = await posts.json();
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
      const data: PostInterface = await post.json();
      setPost(data);
    } catch (error: any) {
      throw new Error("Error fetching data:", error);
    }
  };

  const fetchCommentsByPostId = async (id: string) => {
    try {
      const comments = await fetch(
        `${process.env.REACT_APP_API}/posts/${id}/comments`,
        {
          method: "GET",
        }
      );
      const data: CommentInterface[] = await comments.json();
      setComments(data);
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
        fetchCommentsByPostId,
        fetchDataFromMultipleEndpoints,
        comments,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
