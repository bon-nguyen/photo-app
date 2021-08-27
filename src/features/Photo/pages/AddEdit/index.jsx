import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';




function AddEditPage(props) {
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo"/>
            <div className="photo-edit__form">
                <Container>
                    <Row>
                        <Col>
                            <PhotoForm onSubmit={values => console.log('Form submit', values)} />
                        </Col>
                    </Row>
                </Container>
               
            </div>
        </div>
    );
}

export default AddEditPage;