import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import { useFormik } from 'formik'
import Box from '@mui/system/Box'
import { useState } from 'react'
import * as Yup from 'yup'

import { API_SHORT_CODE_URL } from '../../constants'
import { shortenUrl } from '../../api'

import {
  UrlClipboard,
  buttonBoxContainer,
  itemsBoxContainer,
  boxContainer,
  titleStyles
} from '../'

const validations = Yup.object({
  full_url: Yup.string().url('Invalid Link Page')
})

export const ShortenerForm = () => {
  const [shortURL, setShortURL] = useState(null)

  const urlForm = useFormik({
    initialValues: {
      full_url: ''
    },
    validationSchema: validations,
    onSubmit: (values) => {
      setShortURL(null)
      shortenUrl(values.full_url).then(res => {
        const { shortCode, errorMessage, errors } = res
        if (errors) urlForm.setStatus(errors)
        if (errorMessage) urlForm.setFieldValue('errorMessage', errorMessage)
        if (shortCode) setShortURL(API_SHORT_CODE_URL + shortCode)
        urlForm.setSubmitting(false)
      })
    }
  })

  const onFocusHandler = ({ target }) => {
    if (status && status[target.id]) urlForm.setStatus(target.id, null)
  }

  const { touched, errors, status, values, handleChange, isSubmitting } = urlForm

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
                  label='Page Link *'
                  size='small'
                  placeholder='https://www.facebook.com/'
                  fullWidth
                  name='full_url'
                  id='full_url'
                  error={(touched.full_url && Boolean(errors.full_url)) || (status && Boolean(status.full_url))}
                  helperText={ (touched.full_url && errors.full_url) || (status && status.full_url?.join(', '))}
                  onChange={ handleChange }
                  onFocus={ onFocusHandler }
                  value={ values.full_url }/>
          </Box>
          <Box sx={buttonBoxContainer}>
            <Box sx={{ width: '100%', height: '100%' }}>
              <Button disabled={ isSubmitting } type='submit' variant='contained' fullWidth>Shortify</Button>
            </Box>
          </Box>
          <Box sx={{ gridArea: 'error' }} display={ values.errorMessage ? '' : 'none' } >
            <Alert severity='error' >{ values.errorMessage }</Alert>
          </Box>
            {shortURL && <UrlClipboard shortURL={shortURL} />}
        </Box>
      </Box>
    </form>
  )
}
