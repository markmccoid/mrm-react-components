import React from 'react';
import EditableField from 'ps-react/EditableField';

/** Basic input editable field */
const ExampleEditableField = () => {
  return (<EditableField
            	fieldValue="New Id Test"
            	inputType="input"
            	onSave={(x)=> console.log('value passed', x)}
          	/>);
};

export default ExampleEditableField;
