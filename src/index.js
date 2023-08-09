import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Cardlist from './router/index';
import { DatePicker } from 'antd';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode> 
        <Cardlist />
        <DatePicker />
  
    </StrictMode>
) 

// ReactDOM.Render(<Cardlist/>,document.getElementById('root'))