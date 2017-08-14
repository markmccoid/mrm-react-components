import React from 'react';
import TextWithLabel from 'ps-react/TextWithLabel';

/** Optional Text input passing border color and background colors*/
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextWithLabel
        label="Word"
        borderColor="chocolate"
        labelBackgroundColor="azure"
        textBackgroundColor="azure"
      >This is a child text thingy</TextWithLabel>
    );
  }
}
