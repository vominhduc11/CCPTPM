import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { List, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Navbar = () => {
    interface Category {
        id: number;
        name: string;
    }

    interface Country {
        id: number;
        name: string;
    }

    const [categories, setCategories] = useState<Category[]>([]);
    const [countries, setCountries] = useState<Country[]>([]);

    // Gọi API lấy danh sách thể loại và quốc gia khi component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoryRes, countryRes] = await Promise.all([
                    axios.get('http://localhost:8080/public/api/getAllCategory'),
                    axios.get('http://localhost:8080/public/api/getAllCountry')
                ]);
                console.log('Danh sách thể loại:', categoryRes.data);
                console.log('Danh sách quốc gia:', countryRes.data);
                setCategories(categoryRes.data);
                setCountries(countryRes.data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box position="sticky" top={64} zIndex={1}>
            <AppBar position="static" sx={{ backgroundColor: '#000' }}>
                <Toolbar>
                    <Button color="inherit">
                        <Link to="/">Trang chủ</Link>
                    </Button>

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
                                    {categories.map((category: Category, index) => (
                                        <ListItemButton key={index} component="a" href="#simple-list">
                                            <Link to={`/category/${category.id}`}>{category.name}</Link>
                                        </ListItemButton>
                                    ))}
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
                                    {countries.map((country: Country, index) => (
                                        <ListItemButton key={index} component="a" href="#simple-list">
                                            <Link to={`/country/${country.id}`}>{country.name}</Link>
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Box>
                        )}
                    >
                        <Button color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                            Quốc Gia <ExpandMoreIcon sx={{ ml: 0.5 }} />
                        </Button>
                    </Tippy>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
