import React from 'react';
import EditableField from 'ps-react/EditableField';

/** Editable with a Select List passed */
const ExampleEditableSelect = () => {
  return (
    <EditableField
      fieldValue="One"
      inputType="select"
      pickListValues={[{key:'one', label: 'one'},{key:'two', label: 'two'}, {key:'buckle my shoe!', label: 'buckle up bud'}]}
      onSave={(x)=> console.log('value passed', x)}
    />
  );
};
export default ExampleEditableSelect;
