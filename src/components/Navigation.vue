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
          v-for="([icon, text, link, pageReload], i) in items"
          :key="i"
          link
          :href="link"
          @click="reload(pageReload)"
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
      color="#f5f5f5"
    >
      <v-app-bar-nav-icon>
          <router-link
          class="no-underline"
            to="/"
      >
        <v-icon class="secondary--text" large>mdi-console-line</v-icon>
        </router-link>
      </v-app-bar-nav-icon>
      <v-app-bar-title>
          <router-link
            class="no-underline"
            to="/"
      >
          <span>PEOPLE FIRST ENGINEERING</span>
          </router-link>
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
          <v-toolbar-items>
        <router-link to="/protocols" class="no-underline">
        <v-btn @click="reload(true)" rounded text class="ma-1">
          <span>Protocols</span>
        </v-btn>
        </router-link>
        <router-link to="/models" class="no-underline">
        <v-btn @click="reload(false)" rounded text class="ma-1">
          <span>Models</span>
        </v-btn>
        </router-link>
        <router-link to="/tools" class="no-underline">
        <v-btn rounded text class="ma-1">
          <span>Tools</span>
        </v-btn>
        </router-link>

        <v-divider vertical class="mx-2"></v-divider>

        <router-link to="/about" class="no-underline">
        <v-btn rounded text class="ma-1" >
          <span>About</span>
        </v-btn>
        </router-link>

    <v-menu
        offset-y
        open-on-hover
        close-delay="100">
      <template v-slot:activator="{ on, attrs }">
          <router-link to="/blogs" class="no-underline">
        <v-btn
          rounded
          text
          class="ma-1" 
          v-bind="attrs"
          v-on="on"
        >
          Thinking <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
        </router-link>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in dropdownItems"
          :key="index"
          :to="item.to"
            router
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

        <router-link v-show="showServices" to="/services" class="no-underline">
        <v-btn rounded outlined text class="ma-1">
          <span>Services</span>
        </v-btn>
        </router-link>
        </v-toolbar-items>
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
      showServices: false, //configuration to show services in navigation
      dropdownItems: [
        { title: 'Blogs', to: '/blogs' },
        { title: 'Podcasts', to: '/podcasts' }
      ],
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "/", false],
      ["mdi-clipboard-text-outline", "Protocols", "/protocols", true],
      ["mdi-toy-brick-outline", "Models", "/models", false],
      ["mdi-wrench-outline", "Tools", "/tools", false],
      ["mdi-information-outline", "About", "about", false],
      ["mdi-pen", "Blogs", "/blogs", false],
      ["mdi-podcast", "Podcasts", "/podcasts", false]
    ],
  }),
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850
    },
    reload(pageReload) {
        if (pageReload) {
            console.log('route', this.$router)
            //this.$router.go(this.$router.currentRoute)
        }
      }
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
