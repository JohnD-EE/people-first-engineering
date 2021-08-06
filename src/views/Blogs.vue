<template>
  <section id="blogs">
    <v-container fluid class="pt-15 pb-15 mt-10">
      <v-row align="start" justify="center">
        <v-col cols="10">
          <v-row align="start" justify="center">
              <v-col cols="12" md="8">
                <h1>
                  Blogs:
                </h1>
                <p>Blogs will be used to provide greater depth into the protocols, principles, concepts, models and methodologies explored in People First Engineering.  Contributions from Sofware Engineers and other commentators will be encouraged.
                </p> 
              </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" align="center" justify="center">
              <quote
                quote="The upside of web-based journalism is that everybody gets a chance. The downside is that everybody gets a chance."
                attributionName="Aaron Sorkin"
                attributionDetails="American Playwright"
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

