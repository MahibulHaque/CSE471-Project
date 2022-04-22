import React, { useState } from "react";
import MyEditor from "./Editor";
import {
  ButtonHolder,
  Container,
  InputField,
  TagContainer,
  TextAreaHolder,
  TextContainer,
} from "./EditorScreenElements";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { useUserContext } from "../../Contexts/UserContext";
import { EditorState } from "draft-js";
import axios from "axios";

if (typeof window !== "undefined") {
  injectStyle();
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "#ros",
  "#linux",
  "#python",
  "#deep-learning",
  "#tensorflow",
  "#c++",
];
const EditorScreen = () => {
  const { user } = useUserContext();
  const [briefTitle, setBriefTitle] = useState("");

  const handlePostQuestion = async () => {
    if (user.name == undefined) {
      toast.error("You are not logged in", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setDescription({
        htmlValue: "<p></p>\n",
        editorState: EditorState.createEmpty(),
      });
      setBriefTitle("");
      setTagName([]);
    } else if (briefTitle === "") {
      toast.warn("Input field empty", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      try {
        const res = await axios.post("/api/community/post-question", {
          postUsername: user.name,
          questionTitle: briefTitle,
          questionDesc: description.htmlValue,
          questionTags: TagName,
        });
        if (res.status === 201) {
          toast.success(`${res.data.message}`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error("An error occured. Try again later!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } catch (error) {
        console.log(error);
      }
      setDescription({
        htmlValue: "<p></p>\n",
        editorState: EditorState.createEmpty(),
      });
      setBriefTitle("");
      setTagName([]);
    }
  };

  const [TagName, setTagName] = useState([]);
  const [description, setDescription] = useState({
    htmlValue: "<p></p>\n",
    editorState: EditorState.createEmpty(),
  });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTagName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Container>
      <TextContainer>
        <h1>Post Your Question</h1>
      </TextContainer>
      <TextAreaHolder>
        <p>Brief Title</p>
        <InputField
          type="text"
          onChange={(e) => {
            setBriefTitle(e.target.value);
          }}
          value={briefTitle}
        />
        <p>Explain in detail</p>
        <MyEditor setDescription={setDescription} description={description} />
        <span>Explain your question here. Markdown supported</span>
        <TagContainer>
          <p>Tags</p>
          <span>Add up to 5 tags to describe what your question is about</span>
          <div>
            <FormControl sx={{ marginBlock: 1, width: 940 }}>
              <InputLabel
                id="demo-multiple-checkbox-label"
                placeholder="Add tags (ros, python etc.)"
                style={{ fontFamily: "Inter" }}
              >
                Tags
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={TagName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join("  ")}
                MenuProps={MenuProps}
                style={{ fontFamily: "Inter" }}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={{ fontFamily: "Inter" }}
                  >
                    <Checkbox
                      checked={TagName.indexOf(name) > -1}
                      style={{ fontFamily: "Inter" }}
                    />
                    <ListItemText
                      primary={name}
                      style={{ fontFamily: "Inter" }}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <ButtonHolder>
            <button onClick={handlePostQuestion}>Post the question</button>
          </ButtonHolder>
        </TagContainer>
      </TextAreaHolder>
    </Container>
  );
};

export default EditorScreen;
