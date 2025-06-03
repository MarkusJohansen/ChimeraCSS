export function CodeDemo() {
  return (
    <>
      <h1>Code and formatted text</h1>
      <p>
        Below is some code, you can copy it with <kbd>Ctrl-C</kbd>. 
        Did you know, <code>alert(1)</code> can show an alert in JavaScript!
      </p>
      <pre>
        <code>{`function changeStylesheet(cssFile) {
  document.getElementById("stylesheet").href = cssFile;
}`}</code>
      </pre>
      <hr />
    </>
  )
} 