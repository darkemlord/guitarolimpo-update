import { Heading, Page, TextStyle, Layout, EmptyState } from "@shopify/polaris";
import Products from "./components/Products";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
        <Layout>
          <EmptyState // Empty state component
            heading="Discount your products temporarily"
            action={{
              content: "Select products",
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            <Products />
            <p>Select products to change their price temporarily.</p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }
}

export default Index;
