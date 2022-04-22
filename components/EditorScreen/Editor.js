import React, { Component, useState } from "react";
import dynamic from "next/dynamic";
import { convertToRaw, EditorState } from "draft-js";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftjsToHtml from "draftjs-to-html";
import styled from "styled-components";

const MyEditor = ({setDescription,description}) => {
  

  const onEditorStateChange = (editorValue) => {
    const editorStateInHtml = draftjsToHtml(
      convertToRaw(editorValue.getCurrentContent())
    );

    setDescription({
      htmlValue: editorStateInHtml,
      editorState: editorValue,
    });
  };

  return (
    <Container>
      <Editor
        toolbarHidden={false}
        editorState={description.editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="Explain with steps and code - what is going wrong"
      />
    </Container>
  );
};
export default MyEditor;

const Container = styled.div`
  background-color: white;
  border: 1px solid #d4d4d4;
  margin-bottom:2rem;
  & .rdw-editor-wrapper {
    & .rdw-editor-toolbar {
      background-color: #f5f5f5;
      width: 100%;
    }
  }
  & .rdw-editor-main {
    margin-left:20px;
    min-height:300px;
  }
`;
