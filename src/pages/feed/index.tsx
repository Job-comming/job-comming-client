import { NextPage } from 'next'
import MainLayout from 'components/MainLayout'
import FeedList from 'components/FeedList'

const FeedPage: NextPage = () => {
  return (
    <MainLayout>
      <FeedList />
    </MainLayout>
  )
}

export default FeedPage
