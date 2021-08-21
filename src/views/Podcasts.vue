<template>
  <section id="podcasts">
    <v-container fluid class="pt-15 pb-15 mt-10">
      <v-row align="start" justify="center">
        <v-col cols="10">
          <v-row align="start" justify="center">
              <v-col cols="12" md="8">
                <h1>
                  Podcasts:
                </h1>
                <p>Podcasts will delve into many aspects of Software Engineering, typically taking the form of relaxed conversations with 'real' Engineers looking at how they navigate the non-technical side of work.
                </p>
                <h3>Advertising:</h3>
                <p>The podcasts will be free of annoying ads and promotions, with one exception. The only permitted advertising will be in the form of a story about what your organisation is doing to create a <span class="font-weight-bold secondary--text">People First</span> ecosystem.</p>
              </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" align="center" justify="center">
              <quote
                quote="Almost all of our sorrows spring out of our relations with other people."
                attributionName="Arthur Schopenhauer"
                attributionDetails="1788 - 1860"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <foot/>
    </v-container>
  </section>
</template>

<style scoped>
h3 {
  margin-top:45px
}
</style>

<script>
import foot from '../components/Footer.vue'
import quote from '../components/Quote.vue'

export default {
  components: {
    quote,
    foot
  },
  data: () => ({
    //
  })
}   
</script>

