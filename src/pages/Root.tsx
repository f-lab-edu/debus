import Header from '@components/Header/Header';
import RootContainer from '@components/UI/RootContainer/RootContainer';
import { Outlet } from 'react-router-dom';
import { DarkModeProvider } from 'src/context/DarkModeContext';

const Root = () => {
    return (
        <DarkModeProvider>
            <Header />
            <RootContainer>
                <Outlet />
            </RootContainer>
        </DarkModeProvider>
    );
};

export default Root;
