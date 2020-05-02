import React from 'react';
import { Field } from 'formik';
import RadioField from './RadioField';

function RadioFieldList(props) {
    return (
        <>
            <label>{props.title}</label>
            <div className="c-radio-group radio-button linked-style inline-group align-left j-change-form small">
                {
                    props.list.map((item, idx) => (
                        <Field
                            key={idx}
                            component={RadioField}
                            label={item.libelle}
                            value={item.value}
                            defaultChecked={idx === 0}
                            {...props}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default RadioFieldList;