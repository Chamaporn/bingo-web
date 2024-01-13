/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import "../assets/fonts/style.css";
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#143F6B',
          secondary: '#5CBBF6',
          grey: '#616161',
        },
      },
    },
     typography: {
            fontFamily: 'Kanit Regular',
        },
  },
})
