import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useContext } from 'react';

import { Themecontext } from './App';

function Header() {
    const { setOpen } = useContext(Themecontext) as { setOpen: (open: boolean) => void };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#1c1c1c', boxShadow: 'none' }}>
            <Toolbar>
                {/* Logo và tên ứng dụng */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    {/* <MovieFilterIcon sx={{ mr: 1, color: '#f50057' }} /> */}
                    <Typography variant="h6" component="div">
                        MovieFlix
                    </Typography>
                </Box>

                {/* Thanh tìm kiếm */}
                <TextField
                    variant="outlined"
                    placeholder="Tìm kiếm phim..."
                    size="small"
                    sx={{ marginX: 2, backgroundColor: 'white', borderRadius: 1 }}
                />

                {/* Nút đăng nhập */}
                <Button
                    color="inherit"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Đăng nhập
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
