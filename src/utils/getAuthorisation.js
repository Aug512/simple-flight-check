export default function getAuthorisation() {
  const authorisation = sessionStorage.getItem('isAuthorised')
  if (!!authorisation) return true
  else return false
}
