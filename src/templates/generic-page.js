import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

const GenericPage = ({data}) => {
  console.log(data)
  return (
    <Layout>
      <h1>Generic Page: {data.datoCmsPage.title}</h1>
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
    }
  }
`;