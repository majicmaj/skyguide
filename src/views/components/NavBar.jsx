import Logo from '@/assets/logo.svg'
import {
  HomeOutlined,
  MenuRounded,
  SettingsOutlined,
} from '@mui/icons-material'
import { Drawer, IconButton, List, ModalClose } from '@mui/joy'
import { useState } from 'react'
import NavBarLink from './NavBarLink'

const links = [
  {
    to: '/',
    label: 'Home',
    icon: <HomeOutlined />,
  },
  {
    to: '/settings',
    label: 'Settings',
    icon: <SettingsOutlined />,
  },
]

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <nav className='flex gap-4 p-4'>
      <IconButton
        size='sm'
        variant='outlined'
        onClick={() => setDrawerOpen(true)}
      >
        <MenuRounded />
      </IconButton>

      <img src={Logo} width='28' />

      <Drawer open={drawerOpen} onClose={closeDrawer} size='sm'>
        <div>
          <div className='flex items-center px-5 pt-4'>
            <img src={Logo} width='28' />
            <ModalClose size='sm' sx={{ top: 'unset', right: 20 }} />
          </div>

          <List
            sx={{ p: 2, height: 'min-content' }}
            size='md'
            onClick={closeDrawer}
          >
            {links.map((link, index) => (
              <NavBarLink key={index} link={link} />
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  )
}

export default NavBar
