import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Optional Text input */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        required
        error="First Name is required"
        onChange={() => {}}
      />
    );
  }
}
