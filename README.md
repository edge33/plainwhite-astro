# plainwhite

Simplistic Astro portfolio-style theme for writers.

This is a port of https://github.com/samarsault/plainwhite-jekyll,

I fell in love with this theme and contributed by adding a dark mode. As a token of gratitude to the original author, I am porting the theme to Astro. All credits for the theme are owed to https://github.com/samarsault and all the contributors. I am solely responsible for the porting work.

**Demo**: [Demo on vercel](https://plainwhite-astro.vercel.app/)

![plainwhite theme preview](/screenshot.png)

## Installation on Github Pages

Fork this repo and follow the instructions [Here](https://docs.astro.build/it/guides/deploy/github/)

## Installation

Fork this repo, clone it and then execute:

    $ npm install

you can use your favorite package manager (I am using [pnpm](https://pnpm.io/it/))

## Usage

The "plainwhite" key in src\plainwhite.config.ts is used to customize the theme data.

```typescript
plainwhite: {
    name: Adam Denisov
    tagline: Developer. Designer
    date_format: {
        day: 'numeric',
        year: 'numeric',
        month: 'short',
    },

    social_links: {

        twitter: "samarsault",
        github: "samarsault"
        linkedIn: "in/samarsault" // format: locale/username
    }
}
```

**Updating Placeholder Image**

The placeholder portfolio image can be replaced by the desired image by placing it as `assets/portfolio.webp` in your Astro website, or by changing the following line in `plainwhite.config.ts`

```typescript
plainwhite: {
    portfolio_image: 'assets/portfolio.png'; // the path from the base directory of the site to the image to display (no / at the start)
}
```

To use a different image for dark mode, e.g. with different colors that work better in dark mode, add a `portfolio_image_dark` entry in addition to the `portfolio_image`.

```typescript
plainwhite: {
    portfolio_image: 'assets/portfolio.png';
    portfolio_image_dark: 'assets/portfolio_dark.png';
}
```

**Comments (Disqus)**

Comments on posts can be enabled by specifying your disqus_shortname under plainwhite in `plainwhite.config.ts`. For example,

```typescript
plainwhite: {
    disqus_shortname: 'games';
}
```

**Google Analytics**

It can be enabled by specifying your analytics id under plainwhite in `plainwhite.config.ts`

```typescript
plainwhite: {
    analytics_id: '<YOUR ID>';
}
```

**Sitemap**

It can be toggled by the following line to under plainwhite in `plainwhite.config.ts`

```typescript
plainwhite: {
    sitemap: true;
}
```

**Excerpts**

Excerpts can be enabled by adding the following line to your `plainwhite.config.ts`

```typescript
show_excerpts: true;
```

**Layouts**

-   Home
-   Page
-   Post

**Navigation**

Navigation can be enabled by adding the following line to your `plainwhite.config.ts`

```typescript
plainwhite: {
    navigation: [
        { title: 'My Work', url: '/my-work' },
        { title: 'Resume', url: '/resume' },
    ],
}
```

**Mobile**

By default, Plainwhite places the sidebar (logo, name, tagline etc.) above the content on mobile (narrow screens).
To condense it (moving some things to the bottom of the page and making the rest smaller) so it takes up less space, add the following to your `plainwhite.config.ts`:

```typescript
plainwhite: {
    condensed_mobile: ['home', 'page', 'post'];
}
```

This chooses which layouts (types of page) should be condensed on mobile screens. E.g. if you want everything but the landing page to be condensed, remove `home` from the list. This option does not affect rendering on wider screens.

**Dark mode**

Dark mode can be enabled by setting the `dark_mode` flag in your `plainwhite.config.ts`
In order to disable dark mode you should set the flag to `false` and comment out the imports in the code, Astro does not support dynamic imports yet.

The website will check the OS preferred color scheme and set the theme accordingly, the preference will then be saved in a cookie

```typescript
plainwhite: {
    dark_mode: true;
}
```

![plainwhite dark theme previe](/dark.png)

**Multiline tagline**

Tagline can be multiline in this way (using backticks)

```typescript
plainwhite: {
    tagline: `
    First Line.

    Second Line.

    Third Line.
    `;
}
```

**Search-bar**

Search-bar can be enabled by adding the following line to `config.yml`, like dark mode, this can be disabled removing the references to search components in the code.

```typescript
plainwhite: search: true;
```

Search is powered by [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search) Jekyll plugin. A `search.json` containing post meta and contents will be generated in site root folder. Plugin JavaScript will then match for posts based on user input. More info and `search.json` customization documentation can be found in plugin repository.

This is template uses a ported version of jekyll search, in the future I might implement a full astro solution.

**Base URL**

You can specify a custom base URL (eg. example.com/blog/) by adding the following line to `astro.config.ts`. Note that there is no trailing slash on the URL.

```typescript
{
    base: '/docs';
}
```

**Language**

You can set the `lang` attribute of the `<html>` tag on your pages by changing the following line in `plainwhite.config.ts`:

```typescript
plainwhite: {
    html_lang: 'en';
}
```

[See here for a full list of available language codes](https://www.w3schools.com/tags/ref_country_codes.asp)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/edge33/plainwhite-astro. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `npm install`.

then run the dev instance with `npm dev`

## Donation

If this project help you reduce time to develop, you can give me a cup of coffee :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/francescomaida91)

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
