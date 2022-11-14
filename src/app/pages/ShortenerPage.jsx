import { ShortenerForm, UrlsTop, ShortenerPageLayout } from '../'
import { PageContentLayout } from '../../ui'

export const ShortenerPage = () => {
  return (
    <PageContentLayout>
      <ShortenerPageLayout>
        <ShortenerForm />
        <UrlsTop/>
       </ShortenerPageLayout>
    </PageContentLayout>
  )
}
