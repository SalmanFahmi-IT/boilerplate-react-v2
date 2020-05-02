import React from 'react';
import _ from 'lodash';

function TextField({ label, requiredField, field, form: { touched, errors }, name, ...props }) {
    const error = _.get(errors, field.name);
    return (
        <div className="c-input__holder">
            <div className="c-form__item">
                <label for={field.name}>{label}<span className="required">{requiredField ? '*' : ''}</span></label>
                <input
                    className={`control-form required  ${error ? 'error' : ''}`}
                    placeholder={label}
                    {...field}
                    {...props}
                />
            </div>
            <span id="input--text--01-error" className="error">{_.get(errors, field.name)}</span>
        </div>
    );
}

export default TextField;