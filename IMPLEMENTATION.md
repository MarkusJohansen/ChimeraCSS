# ➕ Implement ChimeraCSS

You can implement ChimeraCSS into your private project by installing the ChimeraCSS package and directly linking to the `chimera.css` file:

```bash
npm install chimeracss
yarn add chimeracss
pnpm add chimeracss
```
```javascript
import "chimeracss/build/chimera.css"; // Import the default ChimeraCSS styles
```

Alternatively, you can include this `<link>` tag in your HTML `<head>` section:

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/chimeracss/build/chimera.css"
/>
```

## Responsiveness

ChimeraCSS is built with responsiveness in mind. Ensure your application is responsive by including the following meta viewport tag in your `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

## Themes

ChimeraCSS includes multiple themes:

- chimera
- chimera-dark
- chimera-golden
- chimera-autumn
- chimera-blues
- chimera-plain

To use an alternative theme, change the filename in your import statement to match the theme. For example, to implement the dark theme:

```javascript
import "chimeracss/build/chimera-dark.css"; // Use the dark theme
```

Alternatively, you can include a theme from the CDN in your HTML `<head>`:

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/chimeracss/build/chimera-dark.css"
/>
```

## Framework Implementations

### Astro

#### Step 1: Initialize an Astro Project

If you don’t have an Astro project already, you can create one with the following commands:

```bash
npm create astro@latest
cd my-astro-site
npm install
```

#### Step 2.1: Add ChimeraCSS via `<link>` tag

You can add ChimeraCSS directly in the `<head>` of your Astro HTML files:

```html
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <!-- HERE -->
        <link
            rel="stylesheet"
            type="text/css"
            href="https://unpkg.com/chimeracss/build/chimera.css"
        />
        <!-- Remember to add this for responsiveness-->
		<meta name="viewport" content="width=device-width, initial-scale=1" /> 
		<meta name="generator" content={Astro.generator} />
		<title>Astro</title>
	</head>
	<body>
		<h1>Astro</h1>
	</body>
</html>
```

#### Step 2.2: Add ChimeraCSS via NPM

Alternatively, you can install ChimeraCSS via npm (or `yarn`/`pnpm` if that's what you like):

```bash
npm install chimeracss
```

In your `index.astro` file:

```js
---
import "chimeracss/build/chimera.css"; // Import ChimeraCSS for this page
---

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content={Astro.generator} />
		<title>Astro</title>
	</head>
	<body>
		<h1>Astro</h1>
	</body>
</html>
```

#### Global Import of ChimeraCSS in Astro

To apply ChimeraCSS across your entire Astro site, you can import it globally by modifying your `src/layouts/BaseLayout.astro` file (or whichever layout file you use):

```html
<head>
    <link
        rel="stylesheet"
        type="text/css"
        href="https://unpkg.com/chimeracss/build/chimera.css"
    />
    <!-- Remember to add this for responsiveness-->
    <meta name="viewport" content="width=device-width, initial-scale=1" /> 
</head>
```

This method ensures that ChimeraCSS styles are applied globally across all pages in your site.