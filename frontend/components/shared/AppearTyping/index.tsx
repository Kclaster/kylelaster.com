// External Dependencies
import { css } from 'emotion';
import React from 'react';

// Internal Dependencies
import { BasePercents, PADDING_SIZES } from '../../../constants/sizes';
import Text from '../Text';
import UnderScore from './UnderScore';
// Local Typings
interface Props extends WrapperProps {
  messages: string[];
}

interface WrapperProps {
  width?: BasePercents | 'auto';
}

interface State {
  currentMessage: string;
  iterator: number;
  messages: string[];
  renderedLetters: string[];
  shouldRender: boolean;
  splitChildren: string[];
  time: Time;
}

interface Time {
  timeBetweenLettersRendered: number;
  timeBetweenMessages: number;
  timeBetweenUndscoreRender: number;
}

// Local Variable
const getStyle = ({
  width = 'auto',
}: WrapperProps) => css({
  marginTop: PADDING_SIZES.md,
  textIndent: '30px',
  width,
});

// Component Definition
class AppearTyping extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentMessage: '',
      iterator: 0,
      messages: [],
      renderedLetters: [],
      shouldRender: false,
      splitChildren: [],
      time: {
        timeBetweenLettersRendered: 12,
        timeBetweenMessages: 3000,
        timeBetweenUndscoreRender: 250,
      },
    };
  }

  componentDidMount() {
    this.setState({
      currentMessage: this.props.messages[0],
      splitChildren: this.props.messages[0].split(''),
    });
    this.myInterval = window.setInterval(this.handleMoveCharacters, this.state.time.timeBetweenLettersRendered);
    this.underscoreInterval = window.setInterval(this.handleToggleUnderscore, this.state.time.timeBetweenUndscoreRender);
  }

  componentDidUpdate() {
    if (this.state.currentMessage && this.state.iterator === this.state.currentMessage.length && !this.myTimeout) {
      this.myTimeout = window.setTimeout(this.handleNextMessage, this.state.time.timeBetweenMessages);
    }
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
    clearInterval(this.myTimeout);
    clearInterval(this.underscoreInterval);
  }

  handleNextMessage = () => {
    this.myTimeout = 0;
    this.setState({
      currentMessage: this.props.messages[this.props.messages.indexOf(this.state.currentMessage) + 1],
      iterator: 0,
    }, () => {
      if (this.state.currentMessage) {
        this.setState({
          renderedLetters: [],
          splitChildren: this.state.currentMessage.split(''),
        });
      } else {
        clearInterval(this.myInterval);
      }
    });
  }

  handleMoveCharacters = () => {
    const nextLetter = this.state.splitChildren.shift();
    if (nextLetter) {
      this.setState({
        iterator: this.state.renderedLetters.length + 1,
        renderedLetters: [...this.state.renderedLetters, nextLetter],
      });
    }
  }

  handleToggleUnderscore = () => {
    this.setState({
      shouldRender: !this.state.shouldRender,
    });
  }

  render() {
    return (
      <div className={getStyle(this.props)}>
        <Text fontSize="sm">
          {this.state.renderedLetters.join('')}
          {' '}
          <UnderScore shouldRender={this.state.shouldRender} />
        </Text>
      </div>
    );
  }
  // tslint:disable-next-line:new-parens
  myInterval: number | undefined;
  myTimeout: number | undefined;
  splitChildren = [];
  underscoreInterval: number | undefined;
}

export default AppearTyping;
