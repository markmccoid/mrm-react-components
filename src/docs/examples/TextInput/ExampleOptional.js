import React from 'react';
import TextInput from 'ps-react/TextInputSC';

/** Optional Text input with Styled Components */
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
