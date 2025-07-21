import { useRef } from "react";
import "./Editor.css";

function Editor() {
  const editorRef = useRef();

  const exec = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button onClick={() => exec("bold")}>
          <b>B</b>
        </button>
        <button onClick={() => exec("italic")}>
          <i>I</i>
        </button>
        <button onClick={() => exec("underline")}>
          <u>U</u>
        </button>
        <select onChange={(e) => exec("fontName", e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times</option>
          <option value="Courier New">Courier</option>
          <option value="Verdana">Verdana</option>
        </select>
        <select onChange={(e) => exec("fontSize", e.target.value)}>
          <option value="1">Tiny</option>
          <option value="2">Small</option>
          <option value="3">Normal</option>
          <option value="4">Medium</option>
          <option value="5">Large</option>
          <option value="6">X-Large</option>
          <option value="7">Huge</option>
        </select>
        <input
          type="color"
          onChange={(e) => exec("foreColor", e.target.value)}
        />
        <button onClick={() => exec("justifyLeft")}>⬅️</button>
        <button onClick={() => exec("justifyCenter")}>⬇️</button>
        <button onClick={() => exec("justifyRight")}>➡️</button>
        <button onClick={() => exec("removeFormat")}>🧹</button>
      </div>

      <div
        ref={editorRef}
        className="editor"
        contentEditable
        suppressContentEditableWarning
      >
        Start writing here...
      </div>
    </div>
  );
}

export default Editor;
