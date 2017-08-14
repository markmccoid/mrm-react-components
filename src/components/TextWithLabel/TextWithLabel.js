import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 10px;
`;

const Label = styled.label`
  padding: 5px;
  border: 1px solid ${props => props.borderColor};
  border-bottom: 0;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 200px;
  font-weight: bold;
  background-color: ${props => props.backgroundColor}
`;

const Text = styled.div`
  border: 1px solid ${props => props.borderColor};
  padding: 5px;
  background-color: ${props => props.backgroundColor};
`;

/** A simple Label/Text display.  The label is above the div containing the text
You can pass in border color and background colors*/
const TextWithLabel = (props) => {
  console.log(props);
  return (
    <Container>
      <Label 
        borderColor={props.borderColor}
        backgroundColor={props.labelBackgroundColor}
      >
        {props.label}
      </Label>
      <Text borderColor={props.borderColor}
        backgroundColor={props.textBackgroundColor}>
        {props.children}
      </Text>
    </Container>
  )
};

TextWithLabel.propTypes = {
  /** label text */
  label: PropTypes.string,
  /** border color for label and div containing content text */
  borderColor: PropTypes.string,
  /** background color for label - default is white */
  labelBackgroundColor: PropTypes.string,
  /** background color for content text div - default is white */
  textBackgroundColor: PropTypes.string
};

TextWithLabel.defaultProps = {
  borderColor: 'black',
  labelBackgroundColor: 'white',
  textBackgroundColor: 'white'
};

export default TextWithLabel;