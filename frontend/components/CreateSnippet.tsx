import React, { Component, useState } from "react";
import { Mutation } from "react-apollo";
import Form from "./Form";
import gql from "graphql-tag";
import Router from "next/router";
import Input from "./Input";
import Button, { ButtonType } from "./Button";
import { useTextField } from "../hooks";

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


const CreateSnippet = () => {
  const [image, setImage] = useState();
  const [largeImage, setLargeImage] = useState();
  const titleField = useTextField('');
  const githubLinkField = useTextField('');
  const linkField = useTextField('');
  const descriptionField = useTextField('');
  const snippetState = {
    image,
    largeImage,
    title: titleField.value,
    githubLink: githubLinkField.value,
    description: descriptionField.value
  }

  const uploadFile = async e => {
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
    setImage(file.secure_url);
    setLargeImage(file.eager[0].secure.url)
  };
  // const handleChange = e => {
  //   const { name, type, value } = e.target;
  //   const val = type === "number" ? parseFloat(value) : value;
  //   this.setState({
  //     [name]: val
  //   });
  // };
  return (
    <Mutation mutation={CREATE_SNIPPET_MUTATION} variables={snippetState}>
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
              onChange={uploadFile}
            />
            <Input
              name="title"
              label="Title"
              required
              {...titleField}
            />
            <Input
              name="githubLink"
              label="GitHub Link"
              required
              {...githubLinkField}
            />
            <Input
              name="link"
              label="Link"
              required
              {...linkField}
            />
            <Input
              name="description"
              label="Description"
              required
              {...descriptionField}
            />
            <Button variant='outlined' type='submit'>
              Submit
            </Button>
          </Form>
        );
      }}
    </Mutation>
  );
}
export default CreateSnippet;
export { CREATE_SNIPPET_MUTATION };
