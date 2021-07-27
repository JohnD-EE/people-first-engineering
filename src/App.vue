<template>
  <v-app>
    <navigation />
    <router-view />
    <foot />
  </v-app>
</template>

<script>
import navigation from "./components/Navigation"
import foot from "./components/Footer"

export default {
  name: "App",
  components: {
    navigation,
    foot
  },
  data: () => ({
    //
  }),
};
</script>
