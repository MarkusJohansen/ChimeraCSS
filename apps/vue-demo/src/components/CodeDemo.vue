<template>
  <div>
    <h1>Code and formatted text</h1>
    <p>
      Below is some code, you can copy it with <kbd>Ctrl-C</kbd>. 
      Did you know, <code>alert(1)</code> can show an alert in JavaScript!
    </p>
    <pre>
      <code>{{ codeExample }}</code>
    </pre>
    <hr />
  </div>
</template>

<script setup lang="ts">
const codeExample = `function changeStylesheet(cssFile) {
  document.getElementById("stylesheet").href = cssFile;
}`
</script> 