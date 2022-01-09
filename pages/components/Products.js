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
          <Card sectioned>
            <div>
              <p>List of guitars here! check it out!</p>
            </div>
          </Card>
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

export default Products;
