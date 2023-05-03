import './index.css'
import home from './templates/home.html'
import about from './templates/about.html'

const urlPageTitle = 'Robert Squires'

document.addEventListener('click', (e) => {
  const { target } = e
  console.log(target)
  if (!target.matches('a.grid--card')) {
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
  let location = window.location.pathname
  if (location.length == 0) {
    location = '/'
  }

  document.getElementById('content').classList.remove('page')
  document.querySelector('html').style.overflow = 'scroll'
  document.querySelector('html').style.pointerEvents = 'all'

  if (location === '/') {
    document.querySelector('html').style.overflow = 'scroll'
    document.querySelector('.outer').style.pointerEvents = 'all'
    document.getElementById('content').classList.remove('page')
  } else {
    document.querySelector('html').style.overflow = 'hidden'
    document.querySelector('.outer').style.pointerEvents = 'none'
    document.getElementById('content').classList.add('page')
    document.addEventListener('click', (e) => {
      if (!e.target.matches('div#content')) {
        window.history.pushState({}, '', '/')
      }
    })
  }

  const local = localStorage.getItem('animation')
  if (location !== '/' || local === '') {
    document
      .querySelectorAll('[data-animated]')
      .forEach((e) => e.classList.remove('animated'))
    localStorage.setItem('animation', '')
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
