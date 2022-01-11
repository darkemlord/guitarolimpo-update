import React from "react";
import { Card, Layout, Page } from "@shopify/polaris";

class Products extends React.Component {
  render() {
    return (
      <Page>
        <Layout.AnnotatedSection
          title="products"
          description="best guitars in the world"
        >
          <Card sectioned></Card>
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

export default Products;
