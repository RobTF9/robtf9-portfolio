import './index.css'
import home from './templates/home.html'
import about from './templates/about.html'

const urlPageTitle = 'Robert Squires'

document.addEventListener('click', (e) => {
  const { target } = e
  if (!target.matches('nav a')) {
    return
  }
  e.preventDefault()
  urlRoute()
})

const urlRoutes = {
  '/': {
    template: home,
    title: 'Home | ' + urlPageTitle,
    description: 'This is the home page',
  },
  '/about': {
    template: about,
    title: 'About | ' + urlPageTitle,
    description: 'This is the about page',
  },
}

const urlRoute = (event) => {
  event = event || window.event
  event.preventDefault()
  window.history.pushState({}, '', event.target.href)
  urlLocationHandler()
}

const urlLocationHandler = async () => {
  if (location.length == 0) {
    location = '/'
  }

  const route = urlRoutes[location] || urlRoutes['404']
  const html = await fetch(route.template).then((response) => response.text())
  document.getElementById('content').innerHTML = html
  document.title = route.title
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', route.description)
}

window.onpopstate = urlLocationHandler
window.route = urlRoute
urlLocationHandler()
