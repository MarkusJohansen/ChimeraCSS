<script setup lang="ts">
import { ref } from 'vue'
import ThemeSelector from './components/ThemeSelector.vue'
import TypographyDemo from './components/TypographyDemo.vue'
import FormsDemo from './components/FormsDemo.vue'
import CodeDemo from './components/CodeDemo.vue'
import TablesDemo from './components/TablesDemo.vue'
import TextFormattingDemo from './components/TextFormattingDemo.vue'
import UnimplementedDemo from './components/UnimplementedDemo.vue'

const showUnimplemented = ref(false)
</script>

<template>
  <main>
    <a href="https://github.com/MarkusJohansen/ChimeraCSS/">
      <h1>ChimeraCSS</h1>
    </a>
    <hr />
    
    <p>
      Welcome to the ChimeraCSS Vue demo! This demo showcases all the features
      and components available in ChimeraCSS. You can switch between different
      themes to see how they affect the styling of all elements.
    </p>

    <blockquote>
      <p>
        <strong>NOTE:</strong> This is a Vue demo of ChimeraCSS. For full documentation,
        please visit the <a href="https://github.com/MarkusJohansen/ChimeraCSS/">Github repository</a> 
        or the <a href="https://www.npmjs.com/package/chimeracss">NPM page</a>.
      </p>
    </blockquote>

    <ThemeSelector />
    <TypographyDemo />
    <FormsDemo />
    <CodeDemo />
    <TablesDemo />
    <TextFormattingDemo />

    <h1>Unimplemented Elements</h1>
    <p>
      There are some elements that are not implemented yet, but will be in the future.
      This section can be very useful for testing when contributing to chimera!
    </p>
    
    <button @click="showUnimplemented = !showUnimplemented">
      Toggle unimplemented elements
    </button>
    
    <UnimplementedDemo v-if="showUnimplemented" />

    <button @click="window.scrollTo(0, 0)">
      Scroll to top
    </button>
  </main>
</template>

<style>
main {
  max-width: 50%;
  margin: auto;
  padding: 1em;
}

@media screen and (max-width: 800px) {
  main {
    max-width: 90%;
  }
}
</style>


