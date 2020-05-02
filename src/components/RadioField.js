import React from 'react';
import { ErrorMessage } from 'formik';

function RadioField({ label, field, form: { touched, errors }, ...props }) {
    return (
        <div className="c-radio">
            <label for={field.id}>

                <input type="radio" {...field} {...props} />
                <span>{label}</span>
            </label>
            <ErrorMessage name={field.name} component="span" style={{ color: "red" }} />
        </div>
    );
}

export default RadioField;