import { AUTHORISE, DEAUTHORISE } from '../actions/authorisation'

export const authorise = () => {
  return {
    type: AUTHORISE
  }
}

export const deauthorise = () => {
  return {
    type: DEAUTHORISE
  }
}
