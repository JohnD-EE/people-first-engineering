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
        <p>Designing optimal Software Engineering environments to feed the hungry human spirit inside every engineer.</p>
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
        text: "mdi-youtube",
        link: "https://www.youtube.com/channel/UCMgH5jPhg-2dreKZXieuV5w",
      },
      {
        text: "mdi-linkedin",
        link: "https://www.linkedin.com/company/people-first-engineering",
      },
      {
        text: "mdi-instagram",
        link: "https://www.instagram.com/peoplefirstengineering",
      },
      {
        text: "mdi-github",
        link: "https://github.com/organizations/people-first-engineering",
      },
    ],
  }),
};
</script>
