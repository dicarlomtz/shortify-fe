import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useEffect, useState } from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/system/Box'

import { API_SHORT_CODE_URL } from '../../constants'
import { decodeHTMLEntity } from '../../helpers'
import { getTop } from '../../api'

import {
  titleStyles
} from '../'

export const UrlsTop = () => {
  const [urls, setUrls] = useState([{ id: '1', title: 'asdasd', short_code: '123' }, { id: '2', title: 'asdasd', short_code: '123' }])

  useEffect(() => {
    getTop().then(res => {
      setUrls(JSON.parse(res.urls))
    })
  }, [])

  return (
    <Box sx={{ p: 2 }}>
        <Typography variant="h1" align='center' sx={ titleStyles }>
              Top 100 Most Clicked Codes
        </Typography>
        {urls.map((url, index) => (
            <div key={url.id}>
                    <Typography variant='h6'>
                        {`# ${index + 1}. ${decodeHTMLEntity(url.title) || 'No Title Found'}`}
                    </Typography>
                    <Typography>
                        Clicks: {url.click_count}
                    </Typography>
                    <Typography >
                        Code: <Link href={API_SHORT_CODE_URL + url.short_code} target='_blank'> {url.short_code} </Link>
                    </Typography>
                <Divider />
            </div>
        ))}
    </Box>
  )
}
