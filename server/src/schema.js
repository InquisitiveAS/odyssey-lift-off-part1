// We need few packages first 
// GraphQl provdes the core logic for parsing and validating GraphQL queries 
// Apollo server is a full fledged GraphQL spec-compliant server.
// GraphQl-tag provided the gql template literal that we'll use in a moment 

// Inside the Server folder, we use the following command
// npm install @apollo/server graphql graphql-tag 

//gql is a tagged template literal for wrapping GraphQL strings such as schema definition we are about to write
// This converts GraphQL strings into the format that Apollo libraries expect when working with operations
// and schemas and also enables syntax highlighting. 
const gql = require("graphql-tag");

// All definitions will go here 
// We will start with two tracks and authors 
const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }
   
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }
   
  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs; 

// Schema reflects our businness domains rules 
// Rule 1- Track could exist without a thumbnail 
// Rule 2- Track without a title or an author doesn't really make any sense from business point of view 
