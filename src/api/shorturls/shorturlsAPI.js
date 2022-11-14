import { instance } from '../'

export const getTop = async () => {
  try {
    const res = await instance.get('urls')
    const { data } = res
    const { urls } = data

    return {
      urls,
      errorMessage: null
    }
  } catch (err) {
    const { response: res } = err
    const errorMessage = res ? null : err.message

    return {
      urls: [],
      errorMessage
    }
  }
}

export const getShortUrl = async shortCode => {
  try {
    const res = await instance.get(`urls/${shortCode}`)
    const { data } = res

    return {
      shortUrl: data,
      errorMessage: null,
      errors: null
    }
  } catch (err) {
    const { response: res } = err
    const errorMessage = res ? null : err.message
    const errors = res ? res.data.errors : null

    return {
      shortUrl: null,
      errorMessage,
      errors
    }
  }
}

export const shortenUrl = async fullUrl => {
  try {
    const res = await instance.post('urls', { full_url: fullUrl })
    const { data } = res

    return {
      shortUrl: data.short_url,
      errorMessage: null,
      errors: null
    }
  } catch (err) {
    const { response: res } = err
    const errorMessage = res ? null : err.message
    const errors = res ? res.data.errors : null

    return {
      shortUrl: null,
      errorMessage,
      errors
    }
  }
}
