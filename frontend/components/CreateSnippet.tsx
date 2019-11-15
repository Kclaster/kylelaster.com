import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "./Form";
import gql from "graphql-tag";
import Router from "next/router";
import Input from "./Input";
import Button, { ButtonType } from "./Button";

const CREATE_SNIPPET_MUTATION = gql`
  mutation CREATE_SNIPPET_MUTATION(
    $title: String
    $description: String
    $image: String
    $largeImage: String
    $gitLink: String
    $link: String
  ) {
    createSnippet(
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
    link: ""
  };
  uploadFile = async e => {
    console.log("uploading file");
    const { files } = e.target;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "kylelaster.com");
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
        {(createSnippet, payload) => {
          const { loading, error } = payload;
          return (
            <Form
              onSubmit={async e => {
                // stop form from submitting
                e.preventDefault();
                // call the mutation
                const res = await createSnippet();
                // bring them to the single item page
                console.log({ res });
                Router.push({
                  pathname: "/",
                  // query: { id: res.data.createSnippet.id }
                });
              }}
            >
              <Input
                name="file"
                label="Image"
                required
                onChange={this.uploadFile}
              />
              <Input
                name="title"
                label="Title"
                required
                value={this.state.title}
                onChange={this.handleChange}
              />
              <Input
                name="title"
                label="GitHub Link"
                required
                value={this.state.gitLink}
                onChange={this.handleChange}
              />
              <Input
                name="link"
                label="Link"
                required
                value={this.state.link}
                onChange={this.handleChange}
              />
              <Input
                name="description"
                label="Description"
                required
                value={this.state.description}
                onChange={this.handleChange}
              />
              <Button type={ButtonType.SUBMIT}>
                Submit
              </Button>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}
export default CreateSnippet;
export { CREATE_SNIPPET_MUTATION };
