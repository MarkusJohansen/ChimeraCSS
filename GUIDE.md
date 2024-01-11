# How chimera works 🦁🐍

This is a simple guide to how the themes work and how you can create custom themes.

## How themes work in chimera 🎨
We utilize important SASS tools to create themes as easy as possible in chimera; variables and partials. 

We have a specific set of variables that each theme file has to declare to be able to compile the sass to css. These variables are the described here:

```scss
// fonts
$font-stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, "Noto Sans", sans-serif;

//Color palette
$Chimera: hsl(173, 100%, 33%);
$Chimera-dark: hsl(173, 100%, 23%);
$Chimera-darker: hsl(173, 100%, 13%);
$Chimera-text: hsl(0, 0%, 25%);
$Chimera-text-secondary: #ffff;
$Chimera-text-disabled: hsl(0, 0%, 65%);
$Chimera-bg: hsl(40, 30%, 100%);
$Chimera-bg-secondary: hsl(60, 5%, 95%);
$Chimera-link: hsl(173, 100%, 33%);
$Chimera-focus: hsl(267, 60%, 60%);
$Chimera-fill: hsla(173, 100%, 33%, 10%);
$Chimera-border: hsl(0, 0%, 90%);
```

After defining these variables we need to import the element styling, which applies these variables by adding this line to the bottom of the file.

```scss
@import "../elements/main";
```

The main file, which is imported, bundles all the element styling into a single file by importing every partial file into this file. In the workflow we compile the theme files to generate a theme as a css file. This is how we generate the original chimera theme in the compile-themes.yml action in ./.github/workflows/actions/:

```yml
 name: compile chimera theme
        run: sass src/themes/chimera.scss build/chimera.css
```

## How to create custom themes 🤘
To create custom themes you should just manipulate the variables to your preference. To test you have to compile your theme to an css file by running this command

```bash
sass src/themes/your-theme-file.scss build/your-theme.css
```

To test the code create an html file (or another project) that uses this stylesheet. If you want to add the theme to the chimera framework permanently, you will have to add the compilation command to the compile-themes.yml action in ./.github/workflows/actions/. 

### Conventions in custom themes

For a theme to be accepted into the repository permanently it has to comply to these requirements:
- It should be accesible
- It shall base itself on hsl/hsla color format, not hex or rgb
- You have to use fonts that doesnt need to be downloaded.
- The ``$Chimera-focus`` color, should have a high contrast towards the ``$Chimera`` color, to ensure accesibility.
- The filenames (.scss and .css) and theme-name must be equal and on the format: chimera-yourthemename. The theme name should ideally be one word.

Thanks for your contributions <3 

