import React from 'react';
import TextWithLabel from 'ps-react/TextWithLabel';

/** Optional Text input NO Border Color*/
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextWithLabel
        label="Word">
        Using defaults, only passing Label
      </TextWithLabel>
    );

  }
}
