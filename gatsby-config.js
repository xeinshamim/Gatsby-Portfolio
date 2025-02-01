module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://gatsby-starter-portfolio-minimal-theme.netlify.app/",
        manifestSettings: {
          favicon: "./content/images/favicon.png",
          siteName: "My Minimal Portfolio",
          shortName: "Portfolio",
          startUrl: "/",
          backgroundColor: "#FFFFFF",
          themeColor: "#000000",
          display: "minimal-ui",
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/articles",
          usePathPrefixForArticles: true,
        },
      },
    },
  ],
};
