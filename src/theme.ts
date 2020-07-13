import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
  },
  palette: {
    background: {
      default: 'transparent',
    },
  },
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
  },
})

export default theme
