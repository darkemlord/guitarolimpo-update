import { EmptyState, Heading, Page } from "@shopify/polaris";
import React from "react";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
        <EmptyState
          heading="Discover our products"
          action={{
            content: "select products",
            onAction: () => this.setState({ open: true }),
          }}
          image={img}
        ></EmptyState>
      </Page>
    );
  }
}

export default Index;
