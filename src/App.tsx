import React from 'react';
import './assets/styles/main.scss'
import { AppHeader } from './components/AppHeader';
import { Route, Routes } from 'react-router-dom';
import { UploadFile } from './components/UploadFile';
import { SongList } from './components/SongList';

function App() {

  return (
    <div className="app">
      <AppHeader />
      <main className='main-container'>
        <Routes>
        <Route path="/" element={<UploadFile />} />
        <Route path="upload" element={<UploadFile />} />
        <Route path="song-list" element={<SongList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
