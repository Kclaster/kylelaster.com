// External Dependencies
import { css } from 'emotion';
import React from 'react';

// Internal Dependencies
import { BasePercents, SPACE_SIZES } from '../../constants/sizes';
import Text from '../Text';
import UnderScore from './UnderScore';
// Local Typings
interface Props extends WrapperProps {
  children: string;
}

interface WrapperProps {
  width?: BasePercents | 'auto';
}

interface State {
  renderedLetters: string[];
  shouldRender: boolean;
  splitChildren: string[];
}

// Local Variable
const getStyle = ({
  width = 'auto',
}: WrapperProps) => css({
  marginTop: SPACE_SIZES.md,
  width,
});

// Component Definition
class AppearTyping extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      renderedLetters: [],
      shouldRender: false,
      splitChildren: [],
    };
  }

  componentDidMount() {
    this.myInterval = window.setInterval(this.handleMoveCharacters, 12);
    this.underscoreInterval = window.setInterval(this.handleToggleUnderscore, 250);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  handleMoveCharacters = () => {
    const nextLetter = this.splitChildren.shift();
    if (nextLetter) {
      this.setState({
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
        <Text textIndent="30px" fontSize="sm">
          {this.state.renderedLetters.join('')}
          {' '}
          <UnderScore shouldRender={this.state.shouldRender} />
        </Text>
      </div>
    );
  }
  // tslint:disable-next-line:new-parens
  myInterval: number | undefined;

  splitChildren = this.props.children.split('');
  underscoreInterval: number | undefined;
}

export default AppearTyping;
