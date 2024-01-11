import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <h1>공통 레이아웃</h1>
            <Outlet />
        </>
    );
};

export default Root;
