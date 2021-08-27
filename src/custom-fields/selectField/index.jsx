import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};
SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}

function SelectField(props) {
    const {
        field, form,
        label, disabled, options,placeholder
    } = props;
    const {name, value} = field;
    const {errors, touched } = form;

    const selectedOption = options.find(option => option.value === value);
    console.log("select Option", selectedOption);
    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
    
        const changeEvent = {
          target: {
            name: name,
            value: selectedValue
          }
        };
        field.onChange(changeEvent);
      }
    return (
        <div>
            <FormGroup>
                {label && <Label for={name}>{label}</Label>}
                <Select
                    id={name}
                    {...field}
                    value={selectedOption}
                    onChange={handleSelectedOptionChange}

                    placeholder={placeholder}
                    options={options}
                    isDisabled={disabled}
                />
            </FormGroup>
        </div>
    );
}

export default SelectField;