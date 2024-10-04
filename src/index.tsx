import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/animation.css'
import './css/color.css'
import './css/font.css'
import './css/layout.css'
import App from './App';
import { useFontFamily } from './components/utils/useFontFamily';


const RootComponent = () => {
  useFontFamily();

  return <App />;
};


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);


