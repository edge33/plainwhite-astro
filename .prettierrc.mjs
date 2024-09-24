/** @type {import("prettier").Config} */

export default {
    // i am just using the standard config, change if you need something else

    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,

    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '**/*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
