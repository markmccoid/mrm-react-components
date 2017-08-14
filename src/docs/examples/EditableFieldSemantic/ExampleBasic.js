import React from 'react';
import EditableFieldSemantic from 'ps-react/EditableFieldSemantic';

/** Basic input editable field and a text area*/
const ExampleBasic = () => {
  return (<div>
          <EditableFieldSemantic
            	fieldValue="New Id Test"
            	inputType="input"
            	onSave={(x)=> console.log('value passed', x)}
          	/>
            <br />
            <EditableFieldSemantic
                      	fieldValue="New Id Text area"
                      	inputType="textarea"
                      	onSave={(x)=> console.log('value passed', x)}
            />
          </div>
          );
};

export default ExampleBasic;
