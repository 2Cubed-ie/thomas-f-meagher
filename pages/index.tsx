import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { gql, wpgraphql } from '../lib/wpgrapghql';
import { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import Image from 'next/image';
import Footer from "@/components/Footer";
import Link from 'next/link';

const GetAllPosts = gql`
  query getPosts {
    posts {
      nodes {
        id
        slug
        title
        uri
      }
    }
  }
`;

const GetBg = gql`
  {
    page(id: "324", idType: DATABASE_ID) {
      title
      background_image {
        backgroundImage {
          mediaItemUrl
        }
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

type One = {
  posts: Nodes
}

type Nodes = {
  nodes: Posts
}

type Posts = {
  map(arg0: (post: { title: string; id: string; }) => JSX.Element): import("react").ReactNode;
  length: number;
  id: string
  slug: string
  title: string
  uri: string
}

interface PostsPageProps {
  posts:One;
  getBg: any
}

export default function Home({ posts: serverPosts, getBg: serverBg }: PostsPageProps) {
  const [postsList, setPostsList] = useState(serverPosts.posts.nodes);
  // const [screenWidth, setScreenWidth] = useState(0);

  // useEffect(() => {
  //   return setScreenWidth(window.screen.width);
  // }, [])

  // console.log("serverBg", serverBg.page.background_image.backgroundImage.mediaItemUrl);

  useEffect(() => {
    document.body.style.background = '#9dc3ea';
  }, []);
  
  

  return (
    <>
      <Head>
        <title>Thomas F Meagher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main 
        className={`${styles.main} first-page`} 
        style={{
          background: `url(${serverBg.page.background_image.backgroundImage.mediaItemUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        {/* {postsList.length === 0 ? (
          <p>loading</p>
        ) : (
          postsList.map((post) => (
            <div className="product-item" key={post.id}>
              <div>{post.title}</div>
            </div>
          ))
        )} */}
        <div></div>
        
        <div className="first-page-block">
          <div className="first-page-block-btn">
            <Link className="btn-primary" href="/second">
              enter here
            </Link>
          </div>
          
          <h1 className="first-page-block-title">Welcome to the Thomas F. Meagher FOundation</h1>
        </div>
        
        <Footer />
      </main>
      
    </>
  );
}

export async function getServerSideProps({}: NextPageContext) {
  const posts: any = await wpgraphql.request(GetAllPosts);
  const getBg: any = await wpgraphql.request(GetBg);

  return {
    props: {posts, getBg},
  }
}
