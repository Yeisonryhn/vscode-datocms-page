import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';

const GenericPage = ({ data }) => {
  console.log(data.datoCmsPage)
  return (
    <Layout>
      <h1 style={{padding: `var(--space-4) var(--size-gutter)`, textAlign: `center`}}>Generic Page: {data.datoCmsPage.title}</h1>
      {data.datoCmsPage.sections.map(section => {
        return <Section key={section.originalId} gridColumns={section.gridColumns}/>
      })}
    </Layout>
  )
}

export default GenericPage;

export const query = graphql`
  query ($pageIdJim: String){
    datoCmsPage(originalId: {eq: $pageIdJim}) {
      slug
      title
      originalId
      sections {
        originalId
        gridColumns {
          originalId
          desktopWidth
          tabletWidth
          mobileWidth
          content {
            value
            links
            blocks {
							__typename
              ... on DatoCmsImageInline {
                id: originalId
                image{
									gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`;