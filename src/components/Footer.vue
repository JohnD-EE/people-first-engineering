<template>
  <v-footer padless bottom class="mt-15 mb-15">
    <v-card flat tile class="text-center">
        <v-divider></v-divider>
      <v-card-text class="pt-15">
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 primary--text"
          :href="icon.link"
          target="_blank"
          icon
          large
        >
          <v-icon large>{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="primary--text">
        {{ new Date().getFullYear() }} — <strong>PEOPLE FIRST ENGINEERING</strong>
      </v-card-text>
      <v-card-text class=" pt-0">
        <p>Designing optimal Software Engineering environments which feed the hunger of the human spirit.</p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-twitter",
        link: "",
      },
      {
        text: "mdi-linkedin",
        link: "",
      },
      {
        text: "mdi-instagram",
        link: "",
      },
      {
        text: "mdi-github",
        link: "",
      },
    ],
  }),
};
</script>
