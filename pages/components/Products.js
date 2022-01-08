import React from "react";
import { Card, Layout, Page } from "@shopify/polaris";

class Products extends React.Component {
  componentDidMount() {
    fetch("/getProducts")
      .then((res) => res.json())
      .then((items) => console.log(items));
  }
  render() {
    return (
      <Page>
        <Layout.AnnotatedSection
          title="products"
          description="best guitars in the world"
        >
          <Card sectioned>
            <div>
              <p>List of guitars here!</p>
            </div>
          </Card>
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

export default Products;
