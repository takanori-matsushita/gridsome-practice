import DefaultLayout from '~/layouts/Default.vue'

// 次のライブラリをimport します。
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import 'prismjs/themes/prism-tomorrow.css'


export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.component('Layout', DefaultLayout)

  // 以下を追加

  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify({
    customVariables: ['~/assets/css/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.grey.darken4,
          accent: colors.shades.black,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  })
}