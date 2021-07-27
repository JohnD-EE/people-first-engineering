<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src=""
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-console-line</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">People First</v-list-item-title>
            <v-list-item-subtitle>ENGINEERING</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<v-sheet outlined flat light height="65px">
    <v-app-bar
      app
      flat
      hide-on-scroll
    >
      <v-app-bar-nav-icon>
        <v-icon large>mdi-console-line</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>
          <span>PEOPLE FIRST ENGINEERING</span>
          <v-chip
            class="ma-2 mb-8"
            x-small
            label
        >
      v0.0.1
    </v-chip></v-app-bar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn rounded text class="ma-1">
          <span ><router-link to="/" class="no-underline">Home</router-link></span>
        </v-btn>
        <v-btn rounded text class="ma-1">
          <span><router-link to="/about" class="no-underline">About</router-link></span>
        </v-btn>
        <v-btn rounded outlined text class="ma-1">
          <span><router-link to="/services" class="no-underline">Services</router-link></span>
        </v-btn>
      </div>
      
    </v-app-bar>
    </v-sheet>
    
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.v-btn {
    /*margin-left: 10px;*/
    
}

.no-underline {
    text-decoration: none !important;
}

</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "Contents", "#features"],
      ["mdi-email-outline", "Contact", "#contact"],
    ],
  }),
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
