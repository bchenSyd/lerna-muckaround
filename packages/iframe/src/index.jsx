import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const IFrame = styled.iframe`
  width: 100%;
  ${props => props.styles};
`;

export class GelXIframe extends Component {
  static propTypes = {
    sandbox: PropTypes.string,
    displayLoader: PropTypes.element,
    setIFrameRef: PropTypes.func,
    onReceiveMessage: PropTypes.func,
    url: PropTypes.string.isRequired,
    styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  };
  static defaultProps = {
    sandbox: "allow-forms allow-scripts ",
    displayLoader: <div />,
    setIFrameRef: undefined,
    onReceiveMessage: undefined,
    styles: undefined
  };

  state = {
    isFrameLoaded: false
  };

  componentDidMount() {
    const { onReceiveMessage } = this.props;
    if (onReceiveMessage) {
      this.messageEvent = this.addEventListener("message", onReceiveMessage);
    }
  }

  componentWillUnmount() {
    if (this.messageEvent) {
      this.messageEvent.remove();
    }
  }

  onIFrameLoaded = () => {
    this.setState({
      isFrameLoaded: true
    });
  };

  messageEvent = undefined;

  addEventListener = (message, handler) => {
    window.addEventListener(message, handler);
    return {
      remove: () => {
        window.removeEventListener(message, handler);
      }
    };
  };

  render() {
    const { sandbox, url, displayLoader, styles, setIFrameRef } = this.props;
    const { isFrameLoaded } = this.state;

    return (
      <div name="iframe-wrapper">
        {!isFrameLoaded && displayLoader}
        <IFrame
          title="lerna-iframe"
          frameBorder="0"
          src={url}
          styles={styles}
          scrolling="no"
          innerRef={ref => setIFrameRef && setIFrameRef(ref)}
          onLoad={this.onIFrameLoaded}
          sandbox={sandbox}
        />
      </div>
    );
  }
}
