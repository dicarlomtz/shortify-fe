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

export const shortenUrl = async fullUrl => {
  try {
    const res = await instance.post('urls', { full_url: fullUrl })
    const { data } = res

    return {
      shortCode: data.short_code,
      errorMessage: null,
      errors: null
    }
  } catch (err) {
    const { response: res } = err
    const errorMessage = res ? null : err.message
    const errors = res ? res.data.errors : null

    return {
      shortCode: null,
      errorMessage,
      errors
    }
  }
}
