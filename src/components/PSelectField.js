import React from 'react';
import { MultiSelect } from 'primereact/multiselect';

const SelectField = ({ options, label, field, ...props }) => {
    return (
        <>
            <label>{label}</label>
            <MultiSelect
                // value={city}
                options={options}
                style={{ minWidth: '12em' }}
                filter={true}
                placeholder={label}
                {...field}
                {...props}
            />
        </>
    );
}

export default SelectField;