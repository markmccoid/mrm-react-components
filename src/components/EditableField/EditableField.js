import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import uuid from 'uuid';
//import { Select, Button, Icon } from 'antd';
import Select from 'antd/lib/select';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
//import 'antd/dist/antd.css';
import 'antd/lib/button/style/css';
import 'antd/lib/select/style/css';

const Option = Select.Option;

//Used for regular input and textarea input needs
const CustomInput = (props) => {
	//don't want to spread inputType to these components, getting rid of it.
	let newProps = _.omit(props, ['inputType']);
	//let newStyle = props.style;

	if (props.inputType === 'textarea') {
	  return (
	    <textarea
	      {...newProps}
	     />
	  );
	} else {
	  return (
	    <input
	      {...newProps}
    		onKeyPress={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault();
						this.handleSave();
					}
				}}
	    />
	  );
	}
};
const ActionButtons = (props) => {

	return (
		<div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
			<Button.Group>
				<Button type="primary" size="small"
					onMouseDown={() => {
							props.onSave();
						}
					}
					>
					Save
					<Icon type="check" />
				</Button>
				<Button type="primary" size="small"
					onClick={props.onCancelEditing}
					onBlur={props.onCancelEditing}
				>
					Cancel
					<Icon type="close" />
				</Button>
			</Button.Group>
		</div>
	)
}

/** EditableField will show passed text and when clicked, it changes to an input field.
* You can have either standard input text, textarea or a select picker
*/
class EditableField extends React.Component {
  state = {
    editing: false,
    fieldValue: this.props.fieldValue,
		availablepickListValues: this.props.inputType === 'select' ? this.props.pickListValues : []
  };

	styles = {
		initialText: {
			border: "1px solid darkgray",
			padding: "5px",
			textAlign: "left",
			fontSize: "1em"
		},
		inputText: {
			width: "100%",
			border: "2px solid lightblue",
			fontSize: "1em",
			fontFamily: "sans-serif"
		},
		cursorPointer: {
			cursor: "pointer"
		}
	};

	cancelEditing = () => {
		this.setState({
			editing: false,
			fieldValue: '',
			availablepickListValues: this.props.inputType === 'select' ? this.props.pickListValues : []
		});
	}

	componentDidUpdate() {
		//if editing and we are not allowing them to select values from list and (state and passed field value) are equal
		//Give the input element focus
		if(this.state.editing && !this.props.inputType === 'select' && this.state.fieldValue === this.props.fieldValue) {
			//I have assign the fieldValue as the html id attribute on the input element
			let inputElem = this.props.fieldValue;
			//Give this element focus. Then the onFocus event actually selects the text
			document.getElementById(inputElem).focus();
		}
	}

//calls the passed in onSave function with the state fieldValue as an argument
//then set editing state to false
	handleSave = () => {
		this.props.onSave(this.state.fieldValue);
		this.setState({ editing: false, availablepickListValues: this.props.inputType === 'select' ? this.props.pickListValues : [] });
	}

	handleFieldSearch = value => {
		//Take the value typed and search the "label" key in the pickListValues object prop
		const re = new RegExp(value, "gi")
		this.setState({
			availablepickListValues: this.props.pickListValues.filter(aField => aField.label.match(re))
		});
	}

  render() {

		let fieldClass = this.props.customClass;// + " field-item-js";
		let selectMode = this.props.allowPickListSearch ? "combobox" : "";

		let fieldJSX =
				<div
          className={fieldClass}
					style={{...this.styles.initialText, ...this.styles.cursorPointer}}
          onClick={() => this.setState({ editing: true, fieldValue: this.props.fieldValue })}
        >
          {this.props.fieldValue}
        </div>;
    if (this.state.editing) {
			if (this.props.inputType === 'select') {
				//--------------------------------------------
				//--Search pickListValues list
				const options = this.state.availablepickListValues.map(aField => <Option key={aField.key} value={aField.key} >{aField.label}</Option>);
	      fieldJSX =
					<div
						className={fieldClass}
						onKeyPress={e => {
							if (e.key === 'Enter') {
								e.preventDefault();
								this.handleSave();
							}
						}}
            height="100%">
					<Select
					  mode={selectMode}
					  labelInValue
					  value={{key: this.state.fieldValue}}
					  style= {{width: "100%"}}
					  notFoundContent=""
					  defaultActiveFirstOption={false}
					  showArrow={!this.props.allowPickListSearch}
					  filterOption={false}
					  onBlur={() => this.cancelEditing()}
					  dropdownMatchSelectWidth={false}
					  onSearch={this.handleFieldSearch}
					  onChange={value => this.setState({ fieldValue: value.key	})}
					>
		        {options}
		      </Select>
					<ActionButtons
						onCancelEditing={this.cancelEditing}
						onSave={this.handleSave}
					/>
	      </div>
	    } else {
				//--------------------------------------------
				//--Does not want to search pickListValues list
				//--create unique id using uuid
				const itemId = uuid.v1();
				fieldJSX = <div className={fieldClass} style={{display: "flex", flexDirection: "column"}}>
					<CustomInput
						id={itemId}
						type="text"
						autoFocus
						value={this.state.fieldValue}
						onFocus={() => document.getElementById(itemId).select()}
						onChange={(e) => this.setState({ fieldValue: e.target.value })}
						onBlur={this.cancelEditing}
						inputType={this.props.inputType}
						style={{...this.styles.initialText, ...this.styles.inputText}}
					/>
				<ActionButtons
					onCancelEditing={this.cancelEditing}
					onSave={this.handleSave}
				/>
				</div>
			}
		}
    return (
      <div> {fieldJSX}</div>
    )
  }

}

EditableField.propTypes = {
  /** The value of to display */
  fieldValue: PropTypes.string.isRequired,
  /** Type of input field - 'select', 'input', 'textarea' */
  inputType: PropTypes.oneOf(['select', 'input', 'textarea']).isRequired,
  /** If true, then will show a select with the pickListValues as select options */
	showPickList: PropTypes.bool,
  /** an array of pickListValue object with the shape {key, label} */
	pickListValues: PropTypes.array,
  /** If true allows search by typing, otherwise a drop down with the values will be show to select from by clicking or using arrow key */
	allowPickListSearch: PropTypes.bool,
  /** a custom class to use to style */
	customClass: PropTypes.string,
  /** function to run when save is pressed */
	onSave: PropTypes.func.isRequired
};

export default EditableField;
