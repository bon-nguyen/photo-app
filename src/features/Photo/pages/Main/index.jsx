import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';

// import Images from 'constants/images';
function MainPage(props) {
    return (
        <div className="photo-main">
            <Banner title="Photo page" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <Link to='photos/add'>Add new photo</Link>
            </Container>
        </div>
    );
}

export default MainPage;