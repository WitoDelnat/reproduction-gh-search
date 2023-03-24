import { Octokit } from "octokit";

// Follow authenticate.mts instructions
const USER_TO_SERVER_TOKEN = "enter_your_token";
const client = new Octokit({ auth: USER_TO_SERVER_TOKEN });

const testRest = await client.rest.search.repos({ q: "hello", per_page: 5 });
console.log(JSON.stringify(testRest, null, 2));

const testGql = await client.graphql(`query searchRepositories {
  search(type: REPOSITORY, first: 5, query: "hello") {
    repositoryCount
    edges {
      cursor
      node {
        ... on Repository {
          __typename
          id
          name
          owner {
            id
            login
          }
          nameWithOwner
          description
          url
          pushedAt
        }
      }
    }
  }
}`);
console.log("graphql", JSON.stringify(testGql, null, 2));
