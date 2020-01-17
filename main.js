Vue.component('main-nav', {
  data() {
    return {

    }
  },
  template: `
    <ul class="nav">
      <li class="nav__item">
        <router-link to="/" class="nav__link">Home</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link">Menu</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link">Local Businesses</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link">Contact Us</router-link>
      </li>
    </ul>
  `
})

const routes = [
  {
    path: '/',
    component: {
      template:  `
        <div class="home">
          <div class="banner--hero">
            <div class="banner__content">
              <div class="container">
                <h2 class="banner__title">Local & Organic</h2>
                <p class="banner__info">Welcome to Alleycat Coffee House, locally owned and operated in beautiful Fort Collins, Colorado!</p>
                <p class="banner__info" style="font-style: italic;">Open 24 hours a day. Simply the best coffee and chai in Fort Collins.</p>
              </div>
            </div>
            <div class="banner__media" style="background-image: url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');"></div>
          </div>
          <div class="main">
            <div class="container">
              <div class="main__col left">
                <h2 class="title">A Little About Us...</h2>
                <p class="main__info">Alleycat opened in August of 2003 and has grown to be one of the most eclectic cafes in northern Colorado. The people and atmosphere are welcoming and inviting... it really has a one-of-a-kind feel! Here at Alleycat, we strive to offer delicious drinks and food (made fresh daily), a unique, creative  environment, and stellar customer service. We are always open and welcome you to join us any time, day or night. It's always a great time to come in!</p>
                <p class="main__info">The perfect place for a fresh cup of local coffee on your way to or from work or class, a tasty lunch, in-house baked goods or snacks, good conversation with friends and colleagues, all-night studying, free wi-fi, a game of chess or Go, playing a few songs on our in-house acoustic guitar, and so much more!</p>
                <p class="main__info">Check our <a href="#" class="link">facebook page</a> for special news and our upcoming <a href="#" class="link">shows and events</a>.</p>
                <p class="main__info">If you have any questions or comments, please <a href="#" class="link">contact us</a>.</p>
                <img src="http://www.alleycatcoffeehouse.com/wp-content/uploads/2010/06/catchristmas2015.jpg" class="main__img"/>
                <p class="main__info">Photo by: Patrick Messall</p>
                <p class="main__info">Happy Holidays!</p>
              </div>
              <div class="main__col right">
                <h3 class="col__title">Social</h3>
                <a href="#" class="social__link">
                  <svg class="icon icon-facebook2">
                    <use xlink:href="#icon-facebook2"></use>
                  </svg>
                </a>
                <a href="#" class="social__link">
                  <svg class="icon icon-instagram">
                    <use xlink:href="#icon-instagram"></use>
                  </svg>
                </a>
                <h3 class="col__title">Contact</h3>
                <p class="col__info">Phone: 970-495-0123<p>
                <p class="col__info">Address: 120 W. Laurel Avenue Fort Collins, CO 80524<p>
              </div>
            </div>
          </div>
        </div>
      `
    }
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

var app = new Vue({
  el: '#app',
  data: {
    
  },
  methods: {
   
  },
  computed: {
   
  },
  router
}).$mount('#app')
