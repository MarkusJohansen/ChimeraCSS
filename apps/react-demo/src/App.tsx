import { useState } from 'react'
import { ThemeSelector } from './components/ThemeSelector'
import { TypographyDemo } from './components/TypographyDemo'
import { FormsDemo } from './components/FormsDemo'
import { CodeDemo } from './components/CodeDemo'
import { TablesDemo } from './components/TablesDemo'
import { TextFormattingDemo } from './components/TextFormattingDemo'
import { UnimplementedDemo } from './components/UnimplementedDemo'

function App() {
  const [showUnimplemented, setShowUnimplemented] = useState(false)

  return (
    <main>
      <a href="https://github.com/MarkusJohansen/ChimeraCSS/">
        <h1>ChimeraCSS</h1>
      </a>
      <hr />
      
      <p>
        Welcome to the ChimeraCSS React demo! This demo showcases all the features
        and components available in ChimeraCSS. You can switch between different
        themes to see how they affect the styling of all elements.
      </p>

      <blockquote>
        <p>
          <strong>NOTE:</strong> This is a React demo of ChimeraCSS. For full documentation,
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
      
      <button onClick={() => setShowUnimplemented(!showUnimplemented)}>
        Toggle unimplemented elements
      </button>
      
      {showUnimplemented && <UnimplementedDemo />}

      <button onClick={() => window.scrollTo(0, 0)}>
        Scroll to top
      </button>
    </main>
  )
}

export default App
