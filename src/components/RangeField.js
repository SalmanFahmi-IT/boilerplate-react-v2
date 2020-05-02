import React from 'react';
import _ from 'lodash';

function pipValues(props) {
    let min = props.min
    let max = props.max
    let values = []
    while (min <= max) {
        values.push(min);
        min = min + props.step;
    }
    return values;
}
function RangeField({ label, field, form: { touched, errors }, ...props }) {
    const error = _.get(errors, field.name);
    const leftValue = 100 / ((props.max - props.min) / props.step);
    return (
        <div class="inputrange">
            <input
                type="range"
                {...props}
                {...field}
            />
            <div class="noUi-pips noUi-pips-horizontal">
                {
                    pipValues(props).map((val, idx) => (
                        <div
                            class="noUi-value noUi-value-horizontal noUi-value-large"
                            data-value={val}
                            style={{ left: `${idx * leftValue}%` }}>
                            {val}
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default RangeField;