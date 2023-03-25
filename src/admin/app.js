
//modificar dados do cliente
const client = {
  title: "Itapema",
  subtitle: "slogan da empresa",
    colorsDark: {
      primary100: '#d6e7ff',
      primary200: '#4798f5',
      primary500: '#3e1799',
      buttonPrimary500: '#481ab1',
      primary600: '#1d44c8',
      buttonPrimary600: '#4739fc',
      primary700: '#341c9d',
    }
}

const config = {
  locales: [
    'pt-BR',
  ],
  translations: {
    'pt-BR': {
      'app.components.LeftMenu.navbrand.title': client.title,
      'app.components.LeftMenu.navbrand.workplace': client.subtitle
    }
  },
  tutorials: false,
   notifications: { release: false },
  theme: {
    dark: {
      colors: client.colorsDark
    }
  }
}

const bootstrap = (app) => {
  console.log(app)
}

export default {
  config,
  bootstrap
}
