import { useEffect } from 'react'
import Router from 'next/router'

const IndexPage = () => {
  useEffect(() => {
    Router.push('/feed')
  }, [])

  return null
}

export default IndexPage
