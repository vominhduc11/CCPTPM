import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#000' }}>
                <Toolbar>
                    <Button color="inherit">Trang Chủ</Button>
                    <Button color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                        Thể Loại <ExpandMoreIcon sx={{ ml: 0.5 }} />
                    </Button>
                    <Button color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                        Quốc Gia <ExpandMoreIcon sx={{ ml: 0.5 }} />
                    </Button>
                    <Button color="inherit">Phim Đã Mua</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
