module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Contentful",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "CFPAT-eSWE2MFnnt9gwUodsQ0oSm_sx2fgR17WLcXrbGD6nqE",
        spaceId: "",
      },
    },
  ],
};
