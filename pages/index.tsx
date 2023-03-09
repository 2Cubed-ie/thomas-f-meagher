import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { gql, wpgraphql } from '../lib/wpgrapghql';
import { useEffect, useState } from 'react';

const GetAllPosts = gql`
  query getPosts {
    posts {
      nodes {
        title
      }
    }
  }
`;

// const data = wpgraphql.request(GetAllPosts);

// const getAllPosts = async () => {
//   const { posts } = await wpgraphql.request(GetAllPosts);
//   console.log(posts);
//   return posts;
// };

// getAllPosts();

export default function Home() {

  const [postList, setPostList] = useState(undefined);
  
  const getAllPosts = async () => {
    const { posts } = await wpgraphql.request(GetAllPosts);
    
    setPostList(posts.nodes);
  };

  useEffect(() => {
    getAllPosts();
  }, []);
  console.log('postList', postList);
  
  return (
    <>
      <Head>
        <title>Thomas F Meagher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
      {
      postList === undefined
      ? <p>loading</p>
      : postList.map(item => (
          <div className="product-item" key={item.title}>
            <div>
              {item.title}
            </div>
          </div>
          ))}
        <h1 className={styles.title}>Thomas F Meagher</h1>
        <pre></pre>
      </main>
    </>
  );
}
