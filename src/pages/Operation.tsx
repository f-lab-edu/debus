import { Outlet } from 'react-router-dom';

const Operation = () => {
    return (
        <div>
            <h1>운행기록 - Root</h1>
            <p>별도 Header 적용</p>
            <Outlet />
        </div>
    );
};

export default Operation;
