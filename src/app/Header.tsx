import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Box, Button } from '@mui/material';
// import { Fragment, useContext } from 'react';
import { useContext } from 'react';

import { Themecontext } from './App';
// import Tippy from '@tippyjs/react/headless';

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
                    sx={{ marginX: 2, backgroundColor: 'white', borderRadius: 1, width: 300 }}
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

                {/* <Tippy
                    interactive
                    placement="bottom"
                    render={(attrs) => (
                        <Box
                            sx={{
                                padding: 1,
                                bgcolor: 'background.paper',
                                color: 'text.secondary',
                                cursor: 'pointer'
                            }}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="https://img.phimmoichill.bar/images/info/bogota-city-of-the-lost.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Xác nhận mua thành công!"
                                        secondary={
                                            <Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    sx={{ color: 'text.primary', display: 'inline' }}
                                                >
                                                    Bogotá: Thành Phố Của Những Kẻ Lưu Lạc
                                                </Typography>
                                                {" — 900.000đ"}
                                            </Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="https://img.phimmoichill.bar/images/info/bogota-city-of-the-lost.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Chủ phòng đã mở phòng"
                                        secondary={
                                            <Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    sx={{ color: 'text.primary', display: 'inline' }}
                                                >
                                                    Bogotá: Thành Phố Của Những Kẻ Lưu Lạc
                                                </Typography>
                                            </Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    )}
                >
                    <NotificationsIcon sx={{ marginLeft: 3 }} />
                </Tippy>

                <Tippy
                    interactive
                    placement="bottom"
                    render={(attrs) => (
                        <Box
                            sx={{
                                padding: 1,
                                bgcolor: 'background.paper',
                                color: 'text.secondary',
                                cursor: 'pointer'
                            }}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <Typography>Đăng xuất</Typography>
                        </Box>
                    )}
                >
                    <Avatar sx={{ height: 40, width: 40, marginLeft: 3 }} alt="" />
                </Tippy> */}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
