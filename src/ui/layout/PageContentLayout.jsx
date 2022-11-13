import Container from '@mui/material/Container'
import PropTypes from 'prop-types'

export const PageContentLayout = ({ children }) => {
  return (
      <>
        <Container maxWidth='lg' sx={{ pt: 5 }}>
            { children }
        </Container>
    </>
  )
}

PageContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
}
