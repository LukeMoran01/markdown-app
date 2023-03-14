import './App.css';
import {useState} from 'react';
import { marked } from "marked";


function App() {
  
  const [input, setInput] = useState(placeholder)

  console.log(input.split(''));

  const markdown = marked.parse(input);

  function handleChange(event) {
    setInput(event.target.value);
  };

  return (
    <div className="page">
    <div className="box">
      <div className="bar">
        <span>Editor</span>
      </div>
      <textarea id="editor" onChange={handleChange} value={input}></textarea>
    </div>
    <div className="box">
      <div className="bar">
        <span>Previewer</span>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{__html: markdown}} />
    </div>
    <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  );
}

const placeholder = `# Sample Markdown Header Level

  ## Sample Header Level 2
  
  ### Link
  
  Here's a link to [Codepen](https://codepen.io).
  
  ### Code Block
  
  1.  Open the file.
  2.  Find the following code block on line 21:
  
          <html>
            <head>
              <title>Test</title>
            </head>
  
  3.  Update the title to match the name of your website.
  
  ### Inline Code
  
  I think you should use an \`<addr>\` element here instead.
  
  ### List
  
  - First item
  - Second item
  
  ### Blockquote
  
  > Dorothy followed her through many of the beautiful rooms in her castle.
  
  ### Image
  
  ![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png "Markdown Logo")
  
  ### Bold Text
  
  I just love **bold text**.
  \`;
  `

export default App;
