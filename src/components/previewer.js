import { useSelector } from "react-redux";
import marked from "marked";
import "./previewer.css";

const Previewer = () => {
  marked.setOptions({
    breaks: true,
    gfm: true,
  });
  const inputText = useSelector((state) => state.inputText.value);
  return (
    <div>
      <h2 className="result">result</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(inputText) }}
      ></div>
    </div>
  );
};

export default Previewer;
