import axios from 'axios'

const updateOptions = () => {
  if (typeof window === 'undefined') return {}

  if (!window.localStorage.user) return {}

  if (Object.keys(window.localStorage.user).length === 0) return {}

  const user = JSON.parse(window.localStorage.user)

  if (user.token) {
    return {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    }
  }
}
export default async function (url: string) {
  console.log(url)
  const { data } = await axios.get(`${url}/feeds`, {
    params: {
      currentCursor: 0,
      pageSize: 10,
    },
    withCredentials: true,
  })
  console.log('data : ', data)
  return data
}
