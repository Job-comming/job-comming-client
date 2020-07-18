import App, { AppContext } from 'next/app'
import { UAParser } from 'ua-parser-js'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import mediaQuery from 'css-mediaquery'
import { DefaultSeo } from 'next-seo'
import generateTheme from 'theme'
import { NextComponentType } from 'next'

interface JobCommingAppProps {
  Component: NextComponentType
  pageProps: any
  deviceType: string
}

class JobCommingApp extends App<JobCommingAppProps> {
  // public static async getInitialProps({ ctx, Component }: AppContext): Promise<any> {
  //   let pageProps: any = {}
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }

  //   return {
  //     pageProps,
  //   }
  // }

  public componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode?.removeChild(jssStyles)
    }
  }

  public render(): JSX.Element {
    const { Component, pageProps, deviceType } = this.props
    return (
      <>
        <DefaultSeo
          title="손을 잡으면 JOB이 와요 - 잡커밍"
          description="멘토 멘티 서비스"
          openGraph={{
            title: '손을 잡으면 JOB이 와요 - 잡커밍',
            description: '멘토 멘티 서비스',
            type: 'website',
          }}
        />
        <ThemeProvider
          theme={generateTheme({
            ssrMatchMedia: (query: string) => {
              return {
                matches: mediaQuery.match(query, {
                  width: deviceType === 'mobile' ? '0px' : '1280px',
                }),
              } as any
            },
          })}
        >
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}

JobCommingApp.getInitialProps = async (appContext) => {
  let appProps: any = {}
  if (App.getInitialProps) {
    appProps = await App.getInitialProps(appContext)
  }

  let deviceType = 'device'
  if (appContext.ctx.req) {
    const parser = new UAParser(appContext.ctx.req.headers['user-agent'])
    deviceType = parser.getDevice().type || 'desktop'
  }
  return { ...appProps, deviceType }
}

export default JobCommingApp
