import { useSelector } from "react-redux";
import marked from "marked";
import ReactMarkdown from "react-markdown";

const Previewer = () => {
  const inputText = useSelector((state) => state.inputText.value);
  return (
    <div id="preview">
      <ReactMarkdown id="preview">{inputText}</ReactMarkdown>
    </div>
  );
};

export default Previewer;
