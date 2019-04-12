const TITLE = 'New Site'
const SHORT_TITLE = 'My new web site'
const THEME_COLOR = '#101018'

module.exports = {
  siteMetadata: {
    title: TITLE
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: TITLE,
        short_name: SHORT_TITLE,
        start_url: '/',
        background_color: THEME_COLOR,
        theme_color: THEME_COLOR,
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    }
  ]
}
