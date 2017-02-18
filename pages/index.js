import Page from '../layouts/page'
import Heading from '../components/heading'

export default () => (
  <Page>
    <Heading>ntwcklng</Heading>
    <p class="social-links">
      <a href="https://github.com/ntwcklng">Github</a> - <a href="https://twitter.com/ntwcklng">@ntwcklng</a>
    </p>
    <style jsx>{`p { text-align: center }`}</style>
  </Page>
)