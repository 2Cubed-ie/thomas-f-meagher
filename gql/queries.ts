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
  timelinePosts(first: 100) {
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

export const GET_SIXTH_PAGE_DATA = gql`query getSixthPageData {
  page(id: "155", idType: DATABASE_ID) {
    sixthPage {
      textNextToPlayButton
      topRightText
    }
  }
}`

export const GET_SEVENTH_PAGE_DATA = gql`query getSeventhPageData {
  page(id: "157", idType: DATABASE_ID) {
    seventhPageFields {
      centerImage {
        mediaItemUrl
      }
      leftTopImage {
        mediaItemUrl
      }
      leftTopText
      rightText
    }
  }
}`

export const GET_FEATURED_IMAGE_SECOND_PAGE = gql`query getIconSecond {
  page(id: "2", idType: DATABASE_ID) {
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}`

export const GET_FEATURED_IMAGE_THIRD_PAGE = gql`query getIconSecond {
  page(id: "333", idType: DATABASE_ID) {
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}`

export const GET_FEATURED_IMAGE_FOURTH_PAGE = gql`query getIconSecond {
  page(id: "116", idType: DATABASE_ID) {
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}`

export const GET_FEATURED_IMAGE_FIFTH_PAGE = gql`query getIconSecond {
  page(id: "338", idType: DATABASE_ID) {
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}`

export const GET_FEATURED_IMAGE_SIXTH_PAGE = gql`query getIconSecond {
  page(id: "155", idType: DATABASE_ID) {
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}`

export const GET_FEATURED_IMAGE_SEVENTH_PAGE = gql`query getIconSecond {
  page(id: "157", idType: DATABASE_ID) {
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}`

export const GET_FEATURED_IMAGE_EIGHTH_PAGE = gql`query getIconSecond {
  page(id: "343", idType: DATABASE_ID) {
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}`

export const GET_FEATURED_IMAGE_NINTH_PAGE = gql`query getIconSecond {
  page(id: "346", idType: DATABASE_ID) {
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}`
