import { useRef } from "react";
import "./Editor.css";

function Editor() {
  const editorRef = useRef();

  const exec = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="editor-wrapper">
      <div className="toolbar-modern">
        <button onClick={() => exec("bold")} title="Bold">
          <span className="icon">𝐁</span>
        </button>
        <button onClick={() => exec("italic")} title="Italic">
          <span className="icon">𝑰</span>
        </button>
        <button onClick={() => exec("underline")} title="Underline">
          <span className="icon">U̲</span>
        </button>

        <select
          onChange={(e) => exec("fontName", e.target.value)}
          defaultValue="default"
        >
          <option disabled value="default">
            Font
          </option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times</option>
          <option value="Courier New">Courier</option>
          <option value="Georgia">Georgia</option>
        </select>

        <select
          onChange={(e) => exec("fontSize", e.target.value)}
          defaultValue="default"
        >
          <option disabled value="default">
            Size
          </option>
          <option value="2">Small</option>
          <option value="3">Normal</option>
          <option value="5">Large</option>
          <option value="7">Huge</option>
        </select>

        <input
          type="color"
          onChange={(e) => exec("foreColor", e.target.value)}
          title="Text Color"
        />

        <button onClick={() => exec("justifyLeft")} title="Align Left">
          ⬅
        </button>
        <button onClick={() => exec("justifyCenter")} title="Align Center">
          ⏺
        </button>
        <button onClick={() => exec("justifyRight")} title="Align Right">
          ➡
        </button>

        <button onClick={() => exec("removeFormat")} title="Clear">
          🧹
        </button>
      </div>

      <div
        ref={editorRef}
        className="modern-editor"
        contentEditable
        suppressContentEditableWarning
      >
        ✨ Start typing here...
      </div>
    </div>
  );
}

export default Editor;
