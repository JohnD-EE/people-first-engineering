import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#46185F",
                secondary: "#297CA0",
                accent: "#E9EA77"
            }
        }
    }
});
