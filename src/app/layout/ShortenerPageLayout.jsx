import PropTypes from 'prop-types'
import Box from '@mui/system/Box'

export const ShortenerPageLayout = ({ children }) => {
  return (
    <Box sx={{ display: { xl: 'flex' } }}>
        {children}
    </Box>
  )
}

ShortenerPageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
}
