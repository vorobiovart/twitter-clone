import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Feed} from './Feed';
import {Layout} from './Layout';
import {Notifications} from './Notifications';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
