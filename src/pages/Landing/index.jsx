import DefaultLayout from '../../components/Layouts/DefaultLayout'
import Jumbotron from '../../components/modules/Jumbotron'
import SectionDownload from '../../components/modules/SectionContents/SectionDownload'
import SectionEnjoy from '../../components/modules/SectionContents/SectionEnjoy'

export default function Landing() {
  return (
    <DefaultLayout>
      <Jumbotron/>
      <SectionEnjoy/>
      <SectionDownload/>
    </DefaultLayout>
  )
}
