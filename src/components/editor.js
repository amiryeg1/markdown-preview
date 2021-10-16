import { useState } from "react";
import { useDispatch } from "react-redux";
import { setText } from "../store/input_slice";
import {initialInput} from "../store/initial_input"

const Editor = () => {
  const dispatch = useDispatch();
  const textHandler = (e) => {
    dispatch(setText(e.target.value));
  };
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

      <textarea
        style={{ width: 500, height: 300 }}
        id="editor"
        onChange={textHandler}
        typeof="text"
        spellCheck="false"
      >
{initialInput}
      </textarea>
    </div>
  );
};

export default Editor;
