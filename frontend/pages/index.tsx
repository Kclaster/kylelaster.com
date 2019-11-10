// Internal Dependencies
import AppearTyping from '../components/AppearTyping';
import Flex from '../components/Flex';
import GlossedWindow from '../components/GlossedWindow';
import Page from '../components/Page';
import Heading1 from '../components/Text/Heading1';

// Component Definition
const Home = () => {
  return (
    <Page>
      <Flex flexDirection="column">
        <GlossedWindow
          width="75%"
        >
          <Flex
            fullHeight={false}
            flexDirection="column"
          >
            <Heading1>My Portfolio</Heading1>
          </Flex>
        </GlossedWindow>
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