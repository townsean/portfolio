import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee, faGlobe,
  faExternalLinkAlt, faPhone, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faTwitter, faGithub } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(faCoffee, faGithubSquare, faTwitter,
  faGlobe, faGithub, faExternalLinkAlt, faPhone, faEnvelope);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueScrollTo);

new Vue({
  render: h => h(App),
}).$mount('#app');
