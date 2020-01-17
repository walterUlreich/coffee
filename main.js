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
        <router-link to="/menu" class="nav__link">Menu</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/businesses" class="nav__link">Local Businesses</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/contact" class="nav__link">Contact Us</router-link>
      </li>
    </ul>
  `
})

Vue.component('hero-banner', {
  data() {
    return {

    }
  },
  template: `
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
  `
})

Vue.component('sidebar', {
  data() {
    return {

    }
  },
  template: `
    <div class="sidebar">
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
  `
})

const routes = [
  {
    path: '/',
    component: {
      template:  `
        <div class="home">
            <h2 class="title">A Little About Us...</h2>
            <p class="main__info">Alleycat opened in August of 2003 and has grown to be one of the most eclectic cafes in northern Colorado. The people and atmosphere are welcoming and inviting... it really has a one-of-a-kind feel! Here at Alleycat, we strive to offer delicious drinks and food (made fresh daily), a unique, creative  environment, and stellar customer service. We are always open and welcome you to join us any time, day or night. It's always a great time to come in!</p>
            <p class="main__info">The perfect place for a fresh cup of local coffee on your way to or from work or class, a tasty lunch, in-house baked goods or snacks, good conversation with friends and colleagues, all-night studying, free wi-fi, a game of chess or Go, playing a few songs on our in-house acoustic guitar, and so much more!</p>
            <p class="main__info">Check our <a href="#" class="link">facebook page</a> for special news and our upcoming <a href="#" class="link">shows and events</a>.</p>
            <p class="main__info">If you have any questions or comments, please <a href="#" class="link">contact us</a>.</p>
            <img src="http://www.alleycatcoffeehouse.com/wp-content/uploads/2010/06/catchristmas2015.jpg" class="main__img"/>
            <p class="main__info">Photo by: Patrick Messall</p>
            <p class="main__info">Happy Holidays!</p>
        </div>
      `
    }
  },
  {
    path: '/menu',
    component: {
      data() {
        return {
          coffeeItems: [
            {name: 'House Drip Coffee', price: '$2.50'},
            {name: 'Pour-Over Coffee', price: '$3.50'},
            {name: 'Shot in the Dark', price: '$3.25'},
            {name: 'Iced Toddy', price: '$3.50'},
            {name: 'Espresso', price: '$2.00'},
            {name: 'Americano', price: '$2.50'},
            {name: 'Macchiato', price: '$3.00'},
            {name: 'Latte', price: '$4.25'},
            {name: 'Cappucino', price: '$4.25'},
            {name: 'Flavored Latte', price: '$4.50'},
            {name: 'Mocha', price: '$4.50'},
          ],
          smoothieItems: [
            {name: 'Sunflower', price: '$5.50'},
            {name: 'Blue Caroline', price: '$5.50'},
            {name: 'Moons Over My Mango', price: '$5.50'},
            {name: 'Hangover Helper', price: '$5.50'},
            {name: 'Taste Sensation', price: '$5.50'},
            {name: 'Strawberry Sunrise', price: '$5.50'},
            {name: 'Mellow Yellow', price: '$5.50'},
            {name: 'Midsummer Night\'s Dream', price: '$5.50'},
            {name: 'Babadook', price: '$5.50'},
            {name: 'Gaia\'s Delight', price: '$5.50'},
            {name: 'Deva Sol', price: '$5.50'},
            {name: 'Chia Seeds', price: '$.50'},
            {name: 'Yogurt & Soy Milk', price: '$1.00'},
          ],
          shakeItems: [
            {name: 'Chai Shake', price: '$5.50'},
            {name: 'Fra-La-Latte', price: '$6.00'},
            {name: 'Milk Shake', price: '$5.50'},
          ],
          sandwichItems: [
            {name: 'Bruschetta', price: '$8.50'},
            {name: 'Wanderlust', price: '$8.50'},
            {name: 'Laurel Street Delight', price: '$8.50'},
            {name: 'The Maverick', price: '$8.50'},
            {name: 'The Hot Kettle', price: '$8.50'},
            {name: 'The Porch Swing', price: '$8.50'},
            {name: 'The Chaco', price: '$8.50'},
            {name: 'The Italian BLT', price: '$8.50'},
            {name: 'The Club Me', price: '$8.50'},
          ]
        }
      },
      template:  `
        <div class="menu">
          <div class="titleContainer">
            <h2 class="heading">Our Menu</h2>
          </div>
          <div class="menuSection">
            <h2 class="title">Coffee & Espresso</h2>
            <h3 class="subTitle">Fair Trade Coffee by Jack's Java in Fort Collins, CO</h3>
            <div class="menu__list" v-for="item in coffeeItems">
              <p class="menu__item">{{item.name}}<p>
              <p class="menu__item price">{{item.price}}<p>
            </div>
          </div>
          <div class="menuSection">
            <h2 class="title">Smoothies</h2>
            <h3 class="subTitle">All of our smoothies are made with 100% real fruit and no added sugars</h3>
            <div class="menu__list" v-for="item in smoothieItems">
              <p class="menu__item">{{item.name}}<p>
              <p class="menu__item price">{{item.price}}<p>
            </div>
          </div>
          <div class="menuSection">
            <h2 class="title">Shakes</h2>
            <div class="menu__list" v-for="item in shakeItems">
              <p class="menu__item">{{item.name}}<p>
              <p class="menu__item price">{{item.price}}<p>
            </div>
          </div>
          <div class="menuSection">
            <h2 class="title">Sanwiches</h2>
            <h3 class="subTitle">All of our lunch sandwiches are served on our in-house fresh-baked focaccia bread, and include your choice of chips or carrots and hummus. Gluten-free bread is also avaiable!</h3>
            <div class="menu__list" v-for="item in sandwichItems">
              <p class="menu__item">{{item.name}}<p>
              <p class="menu__item price">{{item.price}}<p>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    path: '/businesses',
    component: {
      data() {
        return {
          businesses: [
            {name: 'Jackie\'s Java', address: '309 S. Summit Drive #14; Fort Collins, CO 80524', phone: '970-980-6575'},
            {name: 'Savory Spice Shop', address: '123 N. College Avenue; Fort Collins, CO 80524', phone: '970-682-2971'},
            {name: 'Fort Collins Food Co-op', address: '250 E. Mountain Avenue; Fort Collins, CO 80524', phone: '970-484-7448'},
            {name: 'Roberto\'s Salsa & Sauces', address: '2121 S. College Avenue; Fort Collins, CO 80524', phone: '970-224-3006'},
            {name: 'New Earth Honey Co.', address: '7880 Poudre Canyon Road; Bellvue, CO 80512', phone: '515-321-8386'},
          ]
        }
      },
      template:  `
        <div class="businesses">
          <h2 class="title">Local Businesses</h2>
          <h3 class="subTitle">Alleycat is proud to support local businesses by purchasing a lof of our fair locally! Below is a list of the local vendors we personally work with to bring our community the best possible products!</h3>
          <div class="business" v-for="business in businesses">
            <p class="business__title">{{business.name}}</p>
            <p>{{business.address}}</p>
            <p>{{business.phone}}</p>
          </div>
          <div class="imgContainer" style="background-image: url('https://images.squarespace-cdn.com/content/v1/554e1c50e4b089d79afc0504/1478119405997-3UP9IPBTZJJT93WRHTN6/ke17ZwdGBToddI8pDm48kJkc5TYBVOqenShjakTfvG4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc_oVXQv7dS9uZnbVDtC8m86LPGA4_VSuhXsBGot-ztU0lk95qd_v6R1ZJT6d5KcCU/alley+cat+online.jpg');"></div>
        </div>
      `
    }
  },
  {
    path: '/contact',
    component: {
      data() {
        return {
         
        }
      },
      template:  `
        <div class="contact">
          <h2 class="title">Contact Us</h2>
          <h3 class="subTitle">Comments or questions are welcome! Give us a call at 970-495-0123, or email us using the form below!</h3>
          <div class="contactForm">
            <span class="required">* indicates required field</span>
            <label for="name" class="formLabel">Name: *</label>
            <input type="text" id="name" class="formControl"/>
            <label for="email" class="formLabel">Email: *</label>
            <input type="text" id="email" class="formControl"/>
            <label for="subject" class="formLabel">Subject: *</label>
            <input type="text" id="subject" class="formControl"/>
            <label for="message" class="formLabel">Message: *</label>
            <textarea rows="8" cols="50" class="formControl"></textarea>
          </div>
          <div class="imgContainer" style="background-image: url('https://s3-media3.fl.yelpcdn.com/bphoto/Cf_TTaNykGIV8-SU6oRmfg/o.jpg');"></div>
        </div>
      `
    }
  },
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
