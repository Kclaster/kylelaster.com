import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import withData from "../utils/withData";
import { injectGlobal } from 'emotion'
import { BASE_COLORS } from "../constants/styles";

// Local Variable
injectGlobal`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps: any = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props as any;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}
export default withData(MyApp);