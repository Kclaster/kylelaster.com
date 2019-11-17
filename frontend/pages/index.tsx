// Internal Dependencies
import AppearTyping from '../components/shared/AppearTyping';
import Flex from '../components/shared/Flex';
import GlossedWindow from '../components/shared/GlossedWindow';
import Page from '../components/shared/Page';
import Heading1 from '../components/shared/Text/Heading1';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Snippet from '../components/shared/Snippet';
import Paragraph from '../components/shared/Text/Paragraph';

const All_SNIPPETS_QUERY = gql`
query All_SNIPPETS_QUERY {
  snippets{
  title
  image
  description
  }
}
`;

// Component Definition
const Home = () => {
  return (
    <Page>
      <Flex flexDirection="column">
        <Query query={All_SNIPPETS_QUERY}>
          {({ data, error, loading }) => {
            console.log({ data })
            console.log({ error })
            console.log({ loading })
            if (loading || !data) return <Paragraph>Loading...</Paragraph>
            return (
              <GlossedWindow
                width="75%"
              >
                <Flex
                  fullHeight={false}
                  flexDirection="column"
                >
                  <Heading1>My Portfolio</Heading1>
                  {data.snippets.map(snippet => {
                    return (
                      <Snippet {...snippet} />
                    )
                  })}
                </Flex>
              </GlossedWindow>
            )
          }}
        </Query>
        <AppearTyping
          width="75%"
          messages={[
            'Hi my name is Kyle Laster',
            'I am a    front-end web developer    with a focus in ReactJS. And I love turning static pages into interactive works of art. If you are looking to build up your developer team or just wanting to design your own website, I am waiting to hear from you below!',
          ]}
        />
      </Flex>
    </Page>
  );
};
export default Home;
export { All_SNIPPETS_QUERY }