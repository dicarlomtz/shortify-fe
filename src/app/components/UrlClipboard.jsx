import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CheckIcon from '@mui/icons-material/Check'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import PropTypes from 'prop-types'
import Box from '@mui/system/Box'
import { useState } from 'react'

import { clipboardPaperStyles } from '../'

export const UrlClipboard = ({ shortURL }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    if (copied) {
      setCopied(false)
      return
    }

    navigator.clipboard.writeText(shortURL)
    setCopied(true)
  }

  return (
    <Box sx={{ gridArea: 'url' }} >
      <Paper sx={clipboardPaperStyles} elevation={12}>
        <Typography variant='span'>
            Here is your new link: { shortURL }
        </Typography>
        <IconButton aria-label="delete" color='primary' onClick={copyToClipboard}>
          {!copied && <ContentCopyIcon fontSize='small' />}
          {copied && <CheckIcon fontSize='small' />}
        </IconButton>
      </Paper>
    </Box>
  )
}

UrlClipboard.propTypes = {
  shortURL: PropTypes.string.isRequired
}
