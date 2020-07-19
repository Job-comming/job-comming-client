import { createMuiTheme } from '@material-ui/core/styles'
import createPalette from '@material-ui/core/styles/createPalette'
import { MuiMediaQueryList } from '@material-ui/core'
import createTypography from '@material-ui/core/styles/createTypography'

const palette = createPalette({
  background: {
    default: '#35383D',
  },
  primary: {
    main: '#4FCD99',
  },
  secondary: {
    main: 'rgba(0, 0, 0, .4)',
  },
})

const typography = createTypography(palette, {
  h1: {
    fontSize: '1.25rem', // 20px
    fontWeight: 'bold',
    lineHeight: '1.45em', // 29px
  },
  h2: {
    fontSize: '1rem', // 16px
    fontWeight: 'bold',
    lineHeight: '1.45em', // 23px
  },
  h3: {
    fontSize: '0.875rem', // 14px
    fontWeight: 'bold',
    lineHeight: '1.4291em', // 20px
  },
  h4: {
    fontSize: '0.75rem', // 12px
    fontWeight: 'bold',
    lineHeight: '1.75em', // 21px
  },
  fontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
})

interface GenerateThemeProps {
  ssrMatchMedia(query: string): MuiMediaQueryList
}

const generateTheme = ({ ssrMatchMedia }: GenerateThemeProps) =>
  createMuiTheme({
    props: {
      MuiUseMediaQuery: { ssrMatchMedia },
    },
    palette,
    typography,
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            lineHeight: 1.4,
            boxSizing: 'border-box',
          },
          'div, span, iframe, h1, h2, h3, h4, h5, h6, p, a, img, dl, dt, dd, ol, ul, li, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, footer, header ': {
            margin: 0,
            padding: 0,
            border: 0,
            fontSize: '100%',
            verticalAlign: 'baseline',
            boxSizing: 'border-box',
          },
          'ol, ul': {
            listStyle: 'none',
          },
          table: {
            borderCollapse: 'collapse',
            borderSpacing: 0,
          },
          a: {
            display: 'block',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'none',
            },
          },
          img: {
            maxWidth: '100%',
          },
        },
      },
      MuiCard: {
        root: {
          border: '1px solid #CED4DA',
          borderRadius: '4px',
        },
      },
      MuiCardActions: {
        root: {
          justifyContent: 'flex-end',
        },
      },
      MuiButton: {
        outlined: {
          boxShadow: 'none',
          fontWeight: 'bold',
        },
        outlinedPrimary: {
          color: palette.primary.main,
        },
        contained: {
          boxShadow: 'none',
          fontWeight: 'bold',
        },
        containedPrimary: {
          color: '#fff',
        },
        sizeSmall: {
          fontSize: '16px',
          lineHeight: '23px',
          padding: '8px 12px',
        },
        sizeLarge: {
          fontSize: '20px',
          lineHeight: '29px',
          padding: '9px 16px',
        },
      },
      MuiIconButton: {
        root: {
          padding: 0,
        },
      },
      MuiFormControlLabel: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
  })

export default generateTheme
