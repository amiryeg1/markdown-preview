import { initialInput } from "../store/initial_input";
import { setText } from "../store/input_slice";
import { useDispatch } from "react-redux";
import "./editor.css";

const Editor = () => {
  const dispatch = useDispatch();
  const textHandler = (e) => {
    dispatch(setText(e.target.value));
  };
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
      <h2 style={{ textAlign: "center" }}>enter markdown</h2>
      <textarea
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
