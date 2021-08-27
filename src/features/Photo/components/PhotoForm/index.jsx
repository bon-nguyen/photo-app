import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import InputField from '../../../../custom-fields/inputField';
import RandomPhotoField from '../../../../custom-fields/randomPhotoField';
import SelectField from '../../../../custom-fields/selectField';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
    const initialValues = {
        title: '',
    }
    
    return (
        <Formik
            initialValues= {initialValues}
        >
            {formikProps => {
                // do something here ...
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched });
                    return (
                        <Form>
                            <FastField
                                name="title"
                                component = {InputField}

                                label= "title"
                                placeholder= "Eg: Wow nature"
                            />
                            <FastField
                                name="categoryId"
                                component = {SelectField}
                                
                                label="Category"
                                placeholder= "Eg: category"
                                options = {PHOTO_CATEGORY_OPTIONS}
                            />
                            <FastField
                                name="photo"
                                component={RandomPhotoField}
                                label="Photo"
                            />
                        </Form>
                    );
                }}
        </Formik>
    );
}

export default PhotoForm;