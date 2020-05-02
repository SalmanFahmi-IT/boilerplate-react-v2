import React from 'react';
import { ErrorMessage } from 'formik';

function NSelectField({ objectValue, options = [], label, field, form: { touched, errors }, ...props }) {
    return (
        <div className="c-form__item">
            <label for="raisonsociale">
                {label} <span className="required"></span>
            </label>
            <select {...field} {...props}>
                <option value=''>Select option ...</option>
                {
                    options.map((opt, idx) => {
                        return <option
                            key={idx}
                            value={objectValue ? JSON.stringify(opt) : opt.value}>
                            {opt.libelle}
                        </option>
                    })
                }
            </select>
            <ErrorMessage name={field.name} component="span" style={{ color: "red" }} />
        </div>
    );
}

export default NSelectField;