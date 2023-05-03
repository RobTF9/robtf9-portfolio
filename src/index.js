import './index.css'
import home from './templates/home.html'
import about from './templates/about.html'

const urlPageTitle = 'Robert Squires'

document.addEventListener('DOMContentLoaded', function () {
  var scrollpos = localStorage.getItem('scrollpos')
  if (scrollpos) window.scrollTo(0, scrollpos)
})

window.onbeforeunload = function () {
  localStorage.setItem('scrollpos', window.scrollY)
}

document.addEventListener('click', (e) => {
  const { target } = e

  console.log(target)
  if (!target.matches('a.grid--card') || !target.matches('a.page--back')) {
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

  const content = document.getElementById('content')
  const html = document.querySelector('html')
  const outer = document.querySelector('.outer')

  content.classList.remove('page')
  html.style.overflow = 'scroll'
  outer.style.pointerEvents = 'all'

  if (location === '/') {
    html.style.overflow = 'scroll'
    outer.style.pointerEvents = 'all'
    content.classList.remove('page')
  } else {
    html.style.overflow = 'hidden'
    outer.style.pointerEvents = 'none'
    content.classList.add('page')

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
  const template = await fetch(route.template).then((response) =>
    response.text()
  )
  content.innerHTML = template
  document.title = route.title
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', route.description)
}

window.onpopstate = urlLocationHandler
window.route = urlRoute
urlLocationHandler()
