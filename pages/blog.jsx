import Head from "next/head";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const POSTS_PER_PAGE = 10;
const theme = createTheme({
  palette: {
    primary: {
      main: "#374151",
    },
  },
});

const Blog = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedPosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <>
      <Head>
        <title>Emre | Blog</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="max-w-[940px] mx-auto p-5 pt-[120px]">
        <h2 className="text-center shadow-md bg-jelly-bean-50 text-jelly-bean-950 my-4 p-4 w-full rounded-lg dark:text-jelly-bean-50 dark:bg-jelly-bean-950 border dark:border-gray-700 ">
          Blog Posts
        </h2>
        <div className="text-center p-4 my-4 border rounded-lg divide-y divide-gray-700 shadow-lg shadow-gray-400  dark:shadow-jelly-bean-900 dark:shadow-none dark:bg-jelly-bean-950 dark:text-jelly-bean-50 dark:border dark:border-gray-700">
          {paginatedPosts.map((post, index) => {
            const date = new Date(post.pubDate);
            const formattedDate = date.toDateString();
            return (
              <div key={index}>
                <p className="py-1 font-medium italic tracking-wide text-gray-600 hover:text-jelly-bean-950 dark:text-gray-300 dark:hover:text-jelly-bean-50">
                  <a href={post.link} target="_blank" rel="noreferrer">
                    {post.title}
                  </a>
                </p>
                <p className="py-1 font-light italic">{formattedDate}</p>
                <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <ThemeProvider theme={theme}>
            <Pagination
              color="primary"
              size="small"
              count={Math.ceil(posts.length / POSTS_PER_PAGE)}
              page={page}
              onChange={handleChange}
            />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default Blog;

const API_URL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
    : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/posts`);
  const initialPosts = await res.json();

  return {
    props: {
      initialPosts,
    },
    revalidate: 1,
  };
}
