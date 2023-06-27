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

export const GET_SECOND_PAGE_DATA = gql`query getSecondPageData {
  page(id: "2", idType: DATABASE_ID) {
    secondPageSliders {
      firstSliderImage {
        mediaItemUrl
        id
      }
      firstSliderLink
      firstSliderTitle
      secondSliderImage {
        mediaItemUrl
        id
      }
      secondSliderLink
      secondSliderTitle
      thirdSliderImage {
        mediaItemUrl
        id
      }
      thirdSliderLink
      thirdSliderTitle
    }
  }
}`

export const GET_FOURTH_PAGE_DATA = gql`query getFourthPageData {
  page(id: "116", idType: DATABASE_ID) {
    fourthPage {
      listFamousPeopleAboutFlag {
        id
        caption
        description
        title
        mediaItemUrl
      }
    }
  }
}`

export const GET_FLAGS_DATA = gql`query getFlagsData {
  flags {
    nodes {
      id
      title
      excerpt
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}`
