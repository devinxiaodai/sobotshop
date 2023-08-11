import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Goodlist from './pages/goodlist';
import Member from './pages/member';
import { DatePicker } from 'antd';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode> 
        <Member />
        <Goodlist />

    </StrictMode>
) 

// ReactDOM.Render(<Cardlist/>,document.getElementById('root'))