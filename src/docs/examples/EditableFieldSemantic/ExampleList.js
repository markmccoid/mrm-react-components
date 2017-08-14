import React from 'react';
import EditableFieldSemantic from 'ps-react/EditableFieldSemantic';

/** Editable with a Select List passed */
class ExampleList extends React.Component {
  state = {fieldValue: 'Select A Value'}
  render() {
    return (
      <EditableFieldSemantic
        fieldValue={this.state.fieldValue}
        inputType="select"
        allowPickListSearch
        pickListValues={[{key:'', value: '', text: ' '}, {key:'one', value: 'one', text: 'one'},{key:'two', value: 'two', text: 'two'}, {key:'buckle my shoe!', value: 'buckle up bud', text: 'shoe'}]}
        onSave={(x)=> this.setState({fieldValue: x})}
      />
    );
  }
}

export default ExampleList;
