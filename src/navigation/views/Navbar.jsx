import MenuBookIcon from '@mui/icons-material/MenuBook'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import {
  Toggler,
  brandIconStyles,
  brandNameStyles
} from '../'

export const Navbar = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>

          <MenuBookIcon sx={ brandIconStyles } />
          <Typography
            variant='h6'
            noWrap
            sx={ brandNameStyles } >
            Shortify
          </Typography>

          <Toggler />

        </Toolbar>
      </Container>
    </AppBar>
  )
}
