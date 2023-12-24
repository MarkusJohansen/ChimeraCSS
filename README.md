<div align="center">
    <img  
        align="center" 
        src="./public/chimeracss.svg"
        alt="Chimera"
        width="215" 
    />
</div>

<br>

[![GitHub Stars](https://img.shields.io/github/stars/J0hans1/Chimera.svg)](https://github.com/J0hans1/Chimera/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/J0hans1/Chimera.svg)](https://github.com/J0hans1/Chimera/issues)
[![npm version](https://badge.fury.io/js/chimeracss.svg)](https://badge.fury.io/js/chimeracss)
[![downloads badge](https://img.shields.io/npm/dm/chimeracss?color=informational&logo=npm)](https://img.shields.io/npm/dm/chimeracss)


# ChimeraCSS

Classless CSS framework with a clean, soft and modern design inspired By SakuraCSS and Marx.

## Why?

Classless css frameworks is great for building beautiful UI, without worrying about unresponsive and unacessible elements. Chimera does the element styling for you, which only leaves the layout to you. For building MVPs fast and building UI without a designsystem; Chimera is a great framework.

## Goals

What we want to achieve for the framework is as following:

- Easy to implement into private projects
- Clean, soft and modern design
- Responsive by default
- Acessible elements
- Compatibility with classbased css-frameworks

## How?

You can implement chimera into your private project by including this tag in your HTML header. (Remember to declare version where ":version" is, in the URL)

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/chimeracss@:version/build/chimera.css"
/>
```

You can also download the ChimeraCSS package and directly link to the Chimera.css file:

```bash
npm install chimeracss
```

or

```bash
yarn add chimeracss
```

### Themes

Chimera has three themes: chimera, chimera-dark, chimera-golden. to use an alternative theme, change the filename in the import to the same as the theme:

Chimera-dark

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/chimeracss@:version/build/chimera-dark.css"
/>
```

Chimera-golden

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/chimeracss@:version/build/chimera-golden.css"
/>
```

### Theme comparisons

<div>
    <p>No css/HTML only</p>
    <img  
      align="center" 
      src="./public/img/no-css.png"
      alt="Chimera"
      width="50%" 
    />
    <p>Chimera:</p>
    <img  
      align="center" 
      src="./public/img/chimera.png"
      alt="Chimera"
      width="50%" 
    />
    <p>Chimera-dark:</p>
    <img  
      align="center" 
      src="./public/img/chimera-dark.png"
      alt="Chimera"
      width="50%" 
    />
    <p>Chimera-golden:</p>
    <img  
      align="center" 
      src="./public/img/chimera-golden.png"
      alt="Chimera"
      width="50%" 
    />
    
</div>

## License

You can check out the full license [here](https://github.com/J0hans1/Chimera/blob/master/LICENSE)
This project is licensed under the terms of the **Apache License 2.0** license.
