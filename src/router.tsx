import Home from '@pages/Home';
import Lines from '@pages/Lines/Lines';
import MyPage from '@pages/MyPage';
import Operation from '@pages/Operation';
import Stations from '@pages/Stations';

import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            {
                path: '/stations',
                element: <Stations />,
            },
            {
                path: '/lines/:busId',
                element: <Lines />,
            },
            {
                path: '/my-page',
                element: <MyPage />,
            },
        ],
    },
    {
        path: '/my-operation',
        element: <Operation />,
    },
]);
