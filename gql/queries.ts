import { gql } from '../lib/wpgrapghql';

export const GET_POSTS = gql`
query getPosts {
  posts(first: 100) {
    nodes {
      author {
        node {
          name
        }
      }
      title
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      date
      id
      content
      slug
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
}`

export const GET_TIMELINE_POSTS = gql `query getTimelinePosts {
  timelinePosts {
    nodes {
      id
      title
      timeLineFields {
        subtitle
        text
        year
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}`

