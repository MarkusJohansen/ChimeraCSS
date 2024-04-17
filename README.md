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
[![Monthly downloads badge](https://img.shields.io/npm/dm/chimeracss?color=informational&logo=npm)](https://img.shields.io/npm/dm/chimeracss)
[![Total downloads badge](https://img.shields.io/npm/dt/chimeracss?color=informational&logo=npm)](https://img.shields.io/npm/dt/chimeracss)


# 🦁🐍 ChimeraCSS

Classless CSS framework with a clean, soft and modern design inspired by [SakuraCSS](https://github.com/oxalorg/sakura) and [Marx](https://github.com/mblode/marx).

## 🤓 Why use Chimera?

Classless CSS frameworks is great for building a beautiful UI, without worrying about unresponsive and unaccessible elements. Chimera does the element-styling for you, which only leaves the layout to you. For building MVPs fast and building UIs without a designsystem; Chimera is a great framework.

### Roadmap

- [Guide to how chimera works and custom themes](./GUIDE.md)
- [License](./LICENSE)
- [Code of conduct](./CODE_OF_CONDUCT.md)
- [Contribution guide](./CONTRIBUTING.md)
- [Security](./SECURITY.md)

## ✅ Goals

What we want to achieve with this framework is as following:

- 🔥 Easy to implement
- 👨‍🎨 Clean, soft and modern design
- 📱 Responsive by default
- ♿️ Accessible elements
- 🤝 Class overridable styles
- 🪽 Fast and lightweight
- 🎨 Theme based - Easy to customize

## ➕ Implement Chimera

You can implement Chimera into your private project by downloading the ChimeraCSS package and directly link to the Chimera.css file:

```bash
npm install chimeracss
yarn add chimeracss
pnpm add chimeracss
```

```javascript
import "~/node_modules/chimeracss/build/chimera.css";
```
or by including this tag in your HTML header.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/chimeracss/build/chimera.css"
/>
```

### Responsiveness

ChimeraCSS is built with responsiveness in mind. All you have to do is to ensure that your application is responsive when using Chimera, and to include the ``Responsiveness tag`` in your ``<header>``:

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Themes

Chimera has multiple themes: 

- chimera
- chimera-dark
- chimera-golden
- chimera-autumn
- chimera-blues
- chimera-plain

To use an alternative theme, change the filename in the import to the same as the theme. Here is an example of how to implement chimera-dark using the `node_modules` import method:

```javascript
import "~/node_modules/chimeracss/build/chimera-dark.css";
```

## 🧑‍⚖️ License

You can check out the full license [here](https://github.com/J0hans1/Chimera/blob/master/LICENSE). This project is licensed under the terms of the **Apache License 2.0** license.

## 🤩 Contribute

You can contribute to the project in multiple ways!

- You can report issues
- Create pull requests
- Review pull requests
- And much more!

If you are interested in contributing with code to the project you can read more about that [here](./CONTRIBUTING.md), and about how Chimera works [here](./GUIDE.md).

Financial contributions are also very welcome, and can be made through a [**GitHub sponsors**](https://github.com/sponsors/MarkusJohansen) or via buy me a coffee:

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/markusjohansen)

## Thanks to all contributors ❤

 <a href = "https://github.com/chimeracss/chimeracss/graphs/contributors">
   <img src = "https://contrib.rocks/image?repo=chimeracss/chimeracss"/>
 </a>

## 🌟 Featured Projects

- [CV](https://cv-nine-gilt.vercel.app/) by @MarkusJohansen
