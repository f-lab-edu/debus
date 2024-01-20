import Header from '@components/Header/Header';
import RootContainer from '@components/UI/RootContainer/RootContainer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Header />
            <RootContainer>
                <Outlet />
            </RootContainer>
        </>
    );
};

export default Root;
