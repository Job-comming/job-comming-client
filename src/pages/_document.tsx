import Document, { Html, Head, Main, NextScript } from 'next/document'
import useragent from 'useragent'
import { ServerStyleSheets } from '@material-ui/styles'

interface DocumentProps {
  useragent: any
}

export default class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: any): Promise<any> {
    // Add user-agent. Refer to: https://github.com/zeit/next.js/issues/1943
    const ua = useragent.parse(ctx.req.headers['user-agent']) // here

    // Render app and page and get the context of the page with collected side effects.
    const muiSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) =>
          muiSheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      useragent: ua,
      styles: (
        <>
          {initialProps.styles}
          {muiSheets.getStyleElement}
        </>
      ),
    }
  }

  render() {
    const { useragent } = this.props
    return (
      <Html>
        <Head>
          {useragent.family === 'IE' && ( // IE only, not Edge or others
            <>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.7.0/polyfill.min.js" />
              <script src="https://cdn.jsdelivr.net/npm/url-polyfill@1.1.7/url-polyfill.min.js" />
            </>
          )}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap&subset=korean"
            rel="stylesheet"
          />
          <link rel="icon" href="../static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
