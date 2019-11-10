import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "./Form";
import gql from "graphql-tag";
import Router from "next/router";
const CREATE_SNIPPET_MUTATION = gql`
  mutation CREATE_SNIPPET_MUTATION(
    $title: String!
    $description: String!
    $image: String!
    $largeImage: String!
    $gitLink: String
    $link: String
  ) {
    createItem(
      title: $title
      description: $description
      image: $image
      largeImage: $largeImage
      gitLink: $gitLink
      link: $link
    ) {
      id
    }
  }
`;
class CreateSnippet extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    largeImage: "",
    gitLink: "",
    link: "",
  };
  uploadFile = async e => {
    console.log("uploading file");
    const { files } = e.target;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sickfits");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtmnev3wn/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    console.log(file);
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({
      [name]: val
    });
  };
  render() {
    return (
      <Mutation mutation={CREATE_SNIPPET_MUTATION} variables={this.state}>
        {(createItem, payload) => {
          const { loading, error } = payload;
          return (
            <Form
              onSubmit={async e => {
                // stop form from submitting
                e.preventDefault();
                // call the mutation
                console.log(this.state);
                const res = await createItem();
                // bring them to the single item page
                console.log(res);
                Router.push({
                  pathname: "/snippet",
                  query: { id: res.data.createItem.id }
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="file">
                  Image
                  <input
                    type="file"
                    id="file"
                    name="file"
                    placeholder="Upload an image"
                    required
                    onChange={this.uploadFile}
                  />
                  {this.state.image && (
                    <img src={this.state.image} alt="upload preview" />
                  )}
                </label>
                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    required
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="title">
                  GitHub Link
                  <input
                    type="text"
                    id="gitLink"
                    name="gitLink"
                    placeholder="GitLink"
                    required
                    value={this.state.gitLink}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="title">
                  Link
                  <input
                    type="text"
                    id="link"
                    name="link"
                    placeholder="Link"
                    required
                    value={this.state.link}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="description">
                  Description
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Enter A Description"
                    required
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </label>
                <button type="submit">Submit</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}
export default CreateSnippet;
export { CREATE_SNIPPET_MUTATION };