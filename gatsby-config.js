module.exports = {
  siteMetadata: {
    title: 'midorichan',
    description: 'I am a designer. Living and working in Mar del Plata, Argentina. Focused on experience design. I occasionally code for fun',
    keywords: 'designer, ux, argentina, web, mobile',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'v4s0een8waq0',
        accessToken: 'a0fd245d2fda11d9ab033c3dcb29c42237309236ee86ddba3f48775f9d936fa3',
      }
    }
  ],
}
