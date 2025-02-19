// import { Route, Routes } from 'react-router-dom';
import { Modal } from '@mui/material';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Login from './modal/Login';
import { createContext, useState } from 'react';
// import MovieGrid from './MovieGrid';
// import GenreDetailPage from './GenreDetailPage';

export const Themecontext = createContext();

function App() {
    const [open, setOpen] = useState(true);

    const handleClose = () => setOpen(false);

    return (
        <Themecontext.Provider value={{ setOpen }}>
            <div className="App">
                <Header />
                <Navbar />
                <Body />
                <Footer />

                {/* <Header />
            <Routes>
                <Route path="/" element={<MovieGrid />} />
                <Route path="/genres/:genre" element={<GenreDetailPage />} />
            </Routes>
            <Footer /> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Login />
                </Modal>
            </div>
        </Themecontext.Provider>
    );
}

export default App;
