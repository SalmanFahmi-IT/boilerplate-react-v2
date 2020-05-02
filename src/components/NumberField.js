import React from 'react';
import _ from 'lodash';

function NumberField({ setFieldValue, label, field, form: { touched, errors }, name, ...props }) {
    return (
        <>
            <label>{label} <span style={{ color: "red" }} >{_.get(errors, field.name)}</span></label>
            <div class="number-input">
                <button
                    type='button'
                    onClick={() => setFieldValue(field.name, Number(field.value) - 1)}
                    disabled={Number(field.value) === props.min}
                ></button>
                <input type='number' {...field} {...props} placeholder={label} disabled />
                <button
                    type='button'
                    onClick={() => setFieldValue(field.name, Number(field.value) + 1)} class="plus"
                    disabled={Number(field.value) >= props.max}
                ></button>
            </div>
        </>
    );
}

export default NumberField;