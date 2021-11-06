import React, {FC} from 'react';
import InputField from "../../atoms/form-fields/Input-fields";
import {FormikValues} from "formik";
import model from "../../../utils/form-model";
import {Grid, Typography} from "@material-ui/core";
import SelectField from '../../atoms/form-fields/select-fields'
import CheckboxField from '../../atoms/form-fields/checkbox-field'

// interface PropTypes {
//     formField: FormikValues
// }
//
// const AddressForm:FC<PropTypes> = (props) => {
//     const {
//         formField: {
//             firstName,
//             lastName,
//             address1,
//             city,
//             zipcode,
//             country,
//             useAddressForPaymentDetails,
//             nameOnCard,
//             cardNumber,
//             expiryDate,
//             cvv,
//         },
//     } = props
//     return (
//         <>
//             <Typography>
//                 Shipping address
//             </Typography>
//            <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                   <InputField defaultProps={{
//                       name: firstName.name,
//                       label: firstName.label,
//                       fullWidth: true,
//                   }}/>
//               </Grid>
//                <Grid item xs={12} sm={6}>
//                    <InputField defaultProps={{
//                        name: lastName.name,
//                        label: lastName.label,
//                        fullWidth: true,
//                    }}/>
//                </Grid>
//                <Grid item xs={12} sm={6}>
//                    <InputField defaultProps={{
//                        name: address1.name,
//                        label: address1.label,
//                        fullWidth: true,
//                    }}/>
//                </Grid>
//                <Grid item xs={12} sm={6}>
//                    <InputField defaultProps={{
//                        name: city.name,
//                        label: city.label,
//                        fullWidth: true,
//                    }}/>
//                </Grid>
//                <Grid item xs={12} sm={6}>
//                    <InputField defaultProps={{
//                        name: zipcode.name,
//                        label: zipcode.label,
//                        fullWidth: true,
//                    }}/>
//                </Grid>
//                <Grid item xs={12} sm={6}>
//                    <InputField defaultProps={{
//                        name: country.name,
//                        label: country.label,
//                        fullWidth: true,
//                    }}/>
//                </Grid>
//                <Grid item xs={12} sm={6}>
//                    <InputField defaultProps={{
//                        name: useAddressForPaymentDetails.name,
//                        label: useAddressForPaymentDetails.label,
//                        fullWidth: true,
//                    }}/>
//                </Grid>
//                <Grid item xs={12} sm={6}>
//                    <InputField defaultProps={{
//                        name: nameOnCard.name,
//                        label: nameOnCard.label,
//                        fullWidth: true,
//                    }}/>
//                </Grid>
//                <Grid item xs={12} sm={6}>
//                    <InputField defaultProps={{
//                        name: cardNumber.name,
//                        label: cardNumber.label,
//                        fullWidth: true,
//                    }}/>
//                </Grid>
//                <Grid item xs={12} sm={6}>
//                    <InputField defaultProps={{
//                        name: expiryDate.name,
//                        label: expiryDate.label,
//                        fullWidth: true,
//                    }}/>
//                </Grid>
//                <Grid item xs={12} sm={6}>
//                    <InputField defaultProps={{
//                        name: cvv.name,
//                        label: cvv.label,
//                        fullWidth: true,
//                    }}/>
//                </Grid>
//            </Grid>
//         </>
//     );
// };
//
// export default AddressForm;
interface PropsType {
    formField: FormikValues
}

const AddressForm: FC<PropsType> = (props) => {
    const {
        formField: {
            firstName,
            lastName,
            address1,
            address2,
            city,
            state,
            zipcode,
            country,
            useAddressForPaymentDetails,
        },
    } = props

    return (
        <>
            <Typography>Shipping address</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputField
                        defaultProps={{
                            name: firstName.name,
                            label: firstName.label,
                            fullWidth: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        defaultProps={{
                            name: lastName.name,
                            label: lastName.label,
                            fullWidth: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        defaultProps={{
                            name: address1.name,
                            label: address1.label,
                            fullWidth: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        defaultProps={{
                            name: address2.name,
                            label: address2.label,
                            fullWidth: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectField
                        name={city.name}
                        label={city.label}
                        data={cities}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectField
                        name={state.name}
                        label={state.label}
                        data={states}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        defaultProps={{
                            name: zipcode.name,
                            label: zipcode.label,
                            fullWidth: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectField
                        name={country.name}
                        label={country.label}
                        data={countries}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <CheckboxField
                        name={useAddressForPaymentDetails.name}
                        label={useAddressForPaymentDetails.label}
                    />
                </Grid>
            </Grid>
        </>
    )
}

const cities = [
    {
        value: undefined,
        label: "None",
    },
    {
        value: "1",
        label: "New York",
    },
    {
        value: "2",
        label: "Chicago",
    },
    {
        value: "3",
        label: "Saigon",
    },
]

const states = [
    {
        value: undefined,
        label: "None",
    },
    {
        value: "11",
        label: "Florida",
    },
    {
        value: "22",
        label: "Michigan",
    },
    {
        value: "33",
        label: "Texas",
    },
]

const countries = [
    {
        value: null,
        label: "None",
    },
    {
        value: "111",
        label: "United States",
    },
    {
        value: "222",
        label: "Italy",
    },
    {
        value: "333",
        label: "Vietnam",
    },
]

export default AddressForm
