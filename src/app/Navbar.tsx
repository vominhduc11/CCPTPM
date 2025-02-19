import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { List, ListItemButton, ListItemText } from '@mui/material';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#000' }}>
                <Toolbar>
                    <Button color="inherit">Trang Chủ</Button>

                    <Tippy
                        interactive
                        placement="bottom"
                        render={(attrs) => (
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.paper',
                                    color: 'text.secondary',
                                    maxHeight: 300,
                                    overflowY: 'auto'
                                }}
                                className="box"
                                tabIndex={-1}
                                {...attrs}
                            >
                                <List>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Hành động" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kinh dị" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Khoa học viễn tưởng" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Hành động" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kinh dị" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Khoa học viễn tưởng" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Hành động" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kinh dị" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Khoa học viễn tưởng" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Hành động" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kinh dị" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Khoa học viễn tưởng" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Hành động" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kinh dị" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Khoa học viễn tưởng" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Hành động" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kinh dị" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Khoa học viễn tưởng" />
                                    </ListItemButton>
                                </List>
                            </Box>
                        )}
                    >
                        <Button color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                            Thể Loại <ExpandMoreIcon sx={{ ml: 0.5 }} />
                        </Button>
                    </Tippy>

                    <Tippy
                        interactive
                        placement="bottom"
                        render={(attrs) => (
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.paper',
                                    color: 'text.secondary',
                                    maxHeight: 300,
                                    overflowY: 'auto'
                                }}
                                className="box"
                                tabIndex={-1}
                                {...attrs}
                            >
                                <List>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Hành động" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kinh dị" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Khoa học viễn tưởng" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Hành động" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kinh dị" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Khoa học viễn tưởng" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Hành động" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kinh dị" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Khoa học viễn tưởng" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Hành động" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kinh dị" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Khoa học viễn tưởng" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Hành động" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kinh dị" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Khoa học viễn tưởng" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Hành động" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kinh dị" />
                                    </ListItemButton>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Khoa học viễn tưởng" />
                                    </ListItemButton>
                                </List>
                            </Box>
                        )}
                    >
                        <Button color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                            Quốc Gia <ExpandMoreIcon sx={{ ml: 0.5 }} />
                        </Button>
                    </Tippy>

                    <Button color="inherit">Phim Đã Mua</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
