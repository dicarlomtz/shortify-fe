import MenuBookIcon from '@mui/icons-material/MenuBook'
import Typography from '@mui/material/Typography'

import {
  brandNameStylesSm,
  brandStylesSm
} from '../'

export const Toggler = () => {
  return (
      <>
        <MenuBookIcon sx={ brandStylesSm } />
        <Typography
            variant='h5'
            noWrap
            sx={ brandNameStylesSm } >
            Shortify
        </Typography>
    </>
  )
}
