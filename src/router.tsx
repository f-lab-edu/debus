import Home from '@pages/HomePage/Home';
import Line from '@pages/LinePage/Line';
import MyPage from '@pages/MyPage/MyPage';
import Operation from '@pages/OperationPage/Operation';
import Station from '@pages/StationPage/Station';
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
                element: <Station />,
            },
            {
                path: '/lines/:id',
                element: <Line />,
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
