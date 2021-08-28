import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import InputField from '../../../../custom-fields/inputField';
import RandomPhotoField from '../../../../custom-fields/randomPhotoField';
import SelectField from '../../../../custom-fields/selectField';
import * as Yup from 'yup';
import { Button, FormGroup } from 'reactstrap';


PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null,
        photo: '',
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Required'),

        categoryId: Yup.number().required("Required").nullable(),

        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('Required'),
            otherwise: Yup.string().notRequired(),
        })
    });
    return (
        <Formik
            initialValues= {initialValues}
            validationSchema = {validationSchema}
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
                                component={SelectField}

                                label="Category"
                                placeholder="What's your photo category?"
                                options={PHOTO_CATEGORY_OPTIONS}
                            />
                            <FastField
                                name="photo"
                                component={RandomPhotoField}
                                label="Photo"
                            />
                            <FormGroup>
                                <Button type="submit" color={'primary'}>
                                    Add to album
                                </Button>
                            </FormGroup>
                        </Form>
                    );
                }}
        </Formik>
    );
}

export default PhotoForm;