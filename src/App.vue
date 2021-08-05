<template>
  <v-app>
    <navigation />
    <router-view />
  </v-app>
</template>

<script>
import navigation from "./components/Navigation"

export default {
  name: "App",
  components: {
    navigation
  },
  data: () => ({
    //
  }),
};
</script>
