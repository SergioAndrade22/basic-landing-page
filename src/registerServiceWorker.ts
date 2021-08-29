import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log()
    },
    registered () {
      console.log()
    },
    cached () {
      console.log()
    },
    updatefound () {
      console.log()
    },
    updated () {
      console.log()
    },
    offline () {
      console.log()
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
