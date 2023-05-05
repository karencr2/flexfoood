import React, { useState } from 'react'
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { AddShoppingCart, Deck, Home, ShoppingCart, Shower } from '@mui/icons-material';
import ItemDaLista from './ItemDaLista';
import { useNavigate } from 'react-router-dom';

const Navegacao = () => {
    const navigate = useNavigate()
    const [drawer, setDrawer] = useState(false)
    const tipoUsuario = localStorage.getItem('user-type')

    const handleSair = () => {
        localStorage.removeItem('user-token')
        navigate('/login')
    }

    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => { setDrawer(true) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h5' sx={{ flexGrow: 1 }}>
                        FlexFood
                    </Typography>
                    <Button color="inherit" onClick={handleSair}>Sair</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={drawer} onClose={(e) => setDrawer(false)}>
                <Box sx={{ width: 250 }}>
                    <List>
                        <ItemDaLista texto="Home" icone={<Home />} link="/dashboard" />
                        {(tipoUsuario == 'R') && (<ItemDaLista texto="Restaurante" icone={<Deck />} link="/restaurante" />)}
                        {(tipoUsuario == 'R') && (<ItemDaLista texto="Produtos" icone={<Shower />} link="/produtos" />)}
                        {(tipoUsuario == 'R') && (<ItemDaLista texto="Pedidos" icone={<ShoppingCart />} link="/pedidos" />)}
                        {(tipoUsuario == 'C') && (<ItemDaLista texto="Fazer Pedido" icone={<AddShoppingCart />} link="/fazer-pedido" />)}
                        <Divider />
                        <Box sx={{ mt: 2, mx: 2 }}>
                            {(tipoUsuario == 'R') ? <Typography>Tipo: Restaurante</Typography> : <Typography>Tipo: Cliente</Typography>}
                        </Box>

                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default Navegacao