import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg)',
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}>
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column'
        }}>
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.75) 0.5rem 0px 0px, rgba(0, 0, 0, 0.75) -0.5rem 0px 0px',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em'
          }}>
          {data.site.siteMetadata.home.title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.75) 0.5rem 0px 0px, rgba(0, 0, 0, 0.75) -0.5rem 0px 0px',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em'
          }}>
          { data.site.siteMetadata.home.description}
        </h3>
      </div>
    </div>
    )}
  />
)
