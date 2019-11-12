import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Heading1 from "./Text/Heading1";

const ALL_BLOGS_QUERY = gql`
  query ALL_Blogs_QUERY {
    blogs {
      id
      title
      description
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

class DisplayBlogs extends Component {
  render() {
    return (
      <Center>
        <Query
          query={ALL_BLOGS_QUERY}
          // fetchPolicy="network-only"
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            console.log({ data });
            return data.blogs.map(blog => <Heading1>{blog.title}</Heading1>);
          }}
        </Query>
      </Center>
    );
  }
}

export default DisplayBlogs;
export { ALL_BLOGS_QUERY };
