import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import { useFormik } from 'formik'
import Box from '@mui/system/Box'
import * as Yup from 'yup'

import {
  buttonBoxContainer,
  itemsBoxContainer,
  boxContainer,
  titleStyles
} from '../'

const validations = Yup.object({
  url: Yup.string().url('Invalid Link Page')
})

export const ShortenerForm = () => {
  const urlForm = useFormik({
    initialValues: {
      url: ''
    },
    validationSchema: validations,
    onSubmit: (values) => {

    }
  })

  const onFocusHandler = ({ target }) => {
    if (status && status[target.id]) urlForm.setStatus(target.id, null)
  }

  const { touched, errors, status, values, handleChange, handleReset, isSubmitting } = urlForm

  return (
    <form onSubmit={ urlForm.handleSubmit }>
      <Box
        sx={ boxContainer }>
        <Box sx={ itemsBoxContainer }>
          <Box sx={{ gridArea: 'title' }}>
            <Typography variant="h1" align='center' sx={ titleStyles }>
              Shorten Your Links Here!
            </Typography>
          </Box>
          <Box sx={{ gridArea: 'input' }}>
            <TextField
                  required
                  label='Page Link'
                  placeholder='https://www.facebook.com/'
                  fullWidth
                  name='url'
                  id='url'
                  error={(touched.url && Boolean(errors.url)) || (status && Boolean(status.url))}
                  helperText={ (touched.url && errors.url) || (status && status.url?.join(', '))}
                  onChange={ handleChange }
                  onFocus={ onFocusHandler }
                  value={ values.url }/>
          </Box>
          <Box sx={buttonBoxContainer}>
            <Box sx={{ width: '100%' }}>
              <Button disabled={ isSubmitting } onClick={ handleReset } type='submit' variant='contained' fullWidth>Shortify</Button>
            </Box>
          </Box>
          <Box sx={{ gridArea: 'error' }} display={ values.errorMessage ? '' : 'none' } >
            <Alert severity='error' >{ values.errorMessage }</Alert>
          </Box>
        </Box>
      </Box>
    </form>
  )
}
