import React, {FC} from 'react';
import {TextField, TextFieldProps} from "@material-ui/core";
import {useField} from "formik";
import {at} from 'lodash'

interface PropType {
    errorText?: string
    defaultProps: TextFieldProps

}

const InputField:FC<PropType> = ({errorText, defaultProps}) => {

    const [field, meta] = useField(defaultProps.name)

    const renderHelperText = () => {
        const [touched, error] = at(meta, 'touched', 'error')
        if (touched && error){
            return error
        }
    }

    return (
        <>
            <TextField
                type={'text'}
                helperText={renderHelperText()}
                {...field}
                {...defaultProps}
            />
        </>
    );
};

export default InputField;
