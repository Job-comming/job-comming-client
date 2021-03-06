import { NextPage } from 'next'
import IntroLayout from 'components/IntroLayout'
import LoginScreen from 'components/LoginScreen'

const LoginPage: NextPage = () => {
  return (
    <IntroLayout>
      <LoginScreen />
    </IntroLayout>
  )
}

export default LoginPage
