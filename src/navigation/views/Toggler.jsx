import Typography from '@mui/material/Typography'
import LinkIcon from '@mui/icons-material/Link'

import {
  brandNameStylesSm,
  brandStylesSm
} from '../'

export const Toggler = () => {
  return (
      <>
        <LinkIcon sx={ brandStylesSm } />
        <Typography
            variant='h5'
            noWrap
            sx={ brandNameStylesSm } >
            Shortify
        </Typography>
    </>
  )
}
