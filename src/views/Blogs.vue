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
                <p>Subscribe at <a href="https://peoplefirstengineering.substack.com/">Substack</a></p>
              </v-col>
          </v-row>

        <v-row align="center" justify="center" class="pb-15">
            <v-col cols="12" md="8" align="start" justify="center">
              
              <v-row align="stretch">
              <v-col
              cols="12"
              sm="12"
              class="text-left"
              v-for="(item, i) in itemsReversed"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card pa-3"
                  outlined
                  :elevation="hover ? 2 : 0"
                >
                <v-card-text class="text-h5 secondary--text pb-0">{{ item.title }}</v-card-text>
                <v-card-text class="pb-0">{{ item.subtitle }}</v-card-text>
                <v-card-text>
                    <p class="caption mb-0 font-weight-bold">By {{ item.author.toUpperCase() }}</p>
                  <p class="caption mb-0">{{ item.date | moment("MMMM Do YYYY") }}</p>
                </v-card-text>
                  
                  <v-card-actions>
      <v-btn
        color="secondary lighten-2"
        text
        :href="item.url" target="_blank"
      >
        Read More
      </v-btn>
    </v-card-actions>
                </v-card>
              </v-hover>
            </v-col>
              </v-row>
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
    items: [
        //{ title: '', subtitle: '', author: '', date: '', url: '', img: '' },
        { title: 'Protocols, models, and tools for a People First approach to Software Engineering.', subtitle: 'Re-engineering our work environments to put People First', author: 'John Durrant', date: '2021-08-17', url: 'https://peoplefirstengineering.substack.com/p/coming-soon', img: 'https://cdn.substack.com/image/fetch/w_336,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9b001393-00a9-4014-bcf5-cc72e4f2a51d_360x360.png' },
        { title: 'The Bus Factor.', subtitle: 'How many of your Engineers could you risk being run over by a bus?', author: 'John Durrant', date: '2021-08-23', url: 'https://peoplefirstengineering.substack.com/p/bus-factor', img: 'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F700450c7-da7e-43fc-943f-34109eeaea56_1024x768.jpeg' },
        { title: 'Code Purification Rituals', subtitle: 'How would the quality of life of Software Engineers improve by periodically taking time to cleanse and detox our coding environments?', author: 'John Durrant', date: '2021-09-13', url: 'https://peoplefirstengineering.substack.com/p/code-purification-rituals', img: 'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b746a6e-1166-4428-9f52-df7c142d2121_3648x2736.jpeg' },
        { title: 'Psychological Safety', subtitle: 'Tough conversations without emotional damage', author: 'John Durrant', date: '2021-09-15', url: 'https://peoplefirstengineering.substack.com/p/psychological-safety', img: 'https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F6d702171-a4d4-4473-a89d-ba51d2584cfa_750x315.jpeg' }
    ]
  }),
  computed: {
      itemsReversed() {
          let reversed = []
          for (let i = this.items.length - 1; i >= 0; i--) {
              reversed.push(this.items[i])
              }
          return reversed
      }
  }
}
</script>

