export default {
    title: "Your awesome title",
    author: "GitHub User",
    email: "your-email@domain.com",
    description: "Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.\n",
    show_excerpts: true,

    plainwhite: {
        name: "Adam Denisov",
        tagline: "Developer. Designer",
        date_format: "%b %-d, %Y",
        sitemap: true, // set to true to generate sitemap.xml content
        search: true, // set to true to enable searchbar
        dark_mode: true, // set to true to add dark mode toggle
        portfolio_image: "assets/portfolio.png", // the path from the base directory of the site to the image to display (no / at the start)
        portfolio_image_dark: "",
        html_lang: "en", // set the lang attribute of the <html> tag for the pages. See here for a list of codes: https://www.w3schools.com/tags/ref_country_codes.asp
        condensed_mobile: [
            "page",
            "post"
        ],
        social_links: {
            twitter: "samarsault",
            github: "samarsault",
            linkedIn: "in/samarsault",
            // dribbble: "jekyll",
            // flickr:   "jekyll",
            // instagram: "jekyll",
            // pinterest: "jekyll",
            // youtube: "jekyll",
            // facebook: "jekyll",
            // soundcloud: "jekyll",
            // telegram: "jekyll",
            // gitlab: "jekyll",
            // email: "jekyll",
        },
        // mastodon: [
        //     { username: "jekyll", instance: "example.com" }
        // ]
    },
}