import React from 'react';
import _ from 'lodash';

function TextFieldTag({ tag, label, requiredField, field, form: { touched, errors }, name, ...props }) {
    const error = _.get(errors, field.name);
    return (
        <>
            {/* <span className="required">{requiredField ? '*' : ''}</span> */}
            <label for={field.name}>{label}</label>
            <div className="c-input">
                <input
                    className={`required  ${error ? 'error' : ''}`}
                    placeholder={label}
                    {...field}
                    {...props}
                />
                <span>{tag}</span>
            </div>
            <span id="input--text--01-error" className="error">{_.get(errors, field.name)}</span>

        </>
    );
}

export default TextFieldTag;