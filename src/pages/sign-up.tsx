import { NextPage } from 'next'
import IntroLayout from 'components/IntroLayout'
import SignUpScreen from 'components/SignUpScreen'

const LoginPage: NextPage = () => {
  return (
    <IntroLayout>
      <SignUpScreen />
    </IntroLayout>
  )
}

export default LoginPage
