import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';
import ExampleComponent from '@library';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPage {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(fields: { slug: { eq: "/readme/" } }) {
        html
        excerpt
        frontmatter {
          title
        }
      }
    }
  `);
  console.log(data);
  return (
    <IndexLayout>
      <Page>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
          <ExampleComponent text={'xxx'} />
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default IndexPage;
