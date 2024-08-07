import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import '../src/theme/style.css'
import '../src/theme/variables.css'

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

// Import Ionicons library
import { addIcons } from 'ionicons';
import { closeCircleOutline,call,addCircleOutline,addCircle,caretBackOutline,addOutline,
  caretForwardOutline,checkmarkOutline,createOutline,trash,trashBinOutline} from 'ionicons/icons';

addIcons({
  'close-circle-outline': closeCircleOutline,
  'call':call,
  'add-circle-outline':addCircleOutline,
  'add-circle':addCircle,
  'carat-back-outline':caretBackOutline,
  'add-outline':addOutline,
  'caret-forward-outline':caretForwardOutline,
  'checkmark-outline':checkmarkOutline,
  'create-outline' : createOutline,
  'trash':trash,
  'trash-bin-outline':trashBinOutline
});

/* Theme variables */
import './theme/variables.css';
import './theme/style.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
