<template>
  <section id="home">
    <v-container fluid class="pt-15 pb-15 mt-10">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" align="center" justify="center">
              <h1 class="font-weight-regular display-2 mb-3">
                Standards for a <span class="secondary--text font-weight-bold">People First</span> approach to Software Engineering
              </h1>
              <p class="display-1 ma-10">or</p>
              <h1 class="font-weight-bold display-1 mb-3">
                Engineering our work environments to put <span class="secondary--text font-weight-black">People First</span>
                </h1>
            </v-col>
          </v-row>

          <v-row align="center" justify="center" class="pt-15 pb-15">
            <v-col cols="12" md="8" align="center" justify="center">
              <h1 class="font-weight-regular pb-5">Human beings are complex creatures:</h1>
              <v-row align="stretch">
              <v-col
              cols="12"
              sm="6"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card pa-3"
                  dark
                  :color="feature.color"
                  :elevation="hover ? 10 : 4"
                >
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular mt-3 mb-3">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
              </v-row>
                <v-row align="center" justify="center" class="pt-15 pb-15">
                  <v-col cols="12" md="8" align="center" justify="center">
                    <v-img
                    src="@/assets/IceWaterSteam.jpg"
                    height="173"
                  ></v-img>
                <p class="mt-10">Just as water takes different forms according to context, so do humans. We are all 
                capable of the good, the bad, and the ugly.</p>
                <p>We can create the conditions for the best parts of ourselves to emerge, and the worst 
                  parts to be quietened.
                </p>
              </v-col>
            </v-row>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" class="pt-15 pb-15">
            <v-col cols="12" md="8" align="center" justify="center">
              <h1 class="font-weight-regular pb-5">Standards, protocols, patterns, models and tools:</h1>
              <p class="body-1 font-weight-regular">People First Engineering will provide resources to support Engineers in Software, QA, DevOps and other technical domains as well as managers and others in the wider ecosystem.</p>
              <p class="body-1 font-weight-regular">The Software Engineering industry recognises the value of standards based development, a cohesive way of doing things with code for simplicity, interoperability, and consistency. But it is people who build software and our human Operating Systems, APIs, Error Logging and UIs are far from standardised - and we wouldn't want them to be!</p>
              <p class="body-1 font-weight-regular">Through a suite of standards, patterns, principles, models, tools, and thought pieces, the aim of People First Engineering is to make more sense of the messy world of people, relationships, and organisations to create ecosystems where we can thrive.</p>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" align="center" justify="center">
              <quote
                quote="
The line separating good and evil passes not through states, nor between classes, nor between political parties either - but right through every human heart."
                attributionName="Aleksandr Solzhenitsyn"
                attributionDetails="The Gulag Archipelago"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style>
.card {
  transition: 0.5s ease-out;
}

.card .v-image {
  transition: 0.75s;
}

.zoom-efect {
  transform: scale(1.1);
}
</style>

<script>
import quote from '../components/Quote.vue'

export default {
  components: {
    quote
  },
  data: () => ({
    features: [
        {
          img: require("@/assets/logo.png"),
          title: "The Good",
          color: "secondary",
          text: "At times we can be brilliant. We are calm, kind, thoughtful, energetic, curious, assertive, inspirational, resilient, helpful, creative, attentitve, engaging, resourceful, conscientious, confident, dilligent, visionary, productive, skillful, and inventive.",
        },
        {
          img: require("@/assets/logo.png"),
          title: "The not so good",
          color: "primary",
          text: "We can also be angry, destructive, intolerent, beligerent, anxious, conceited, bored, manipulative, scared, stressed, judgemental, apathetic, lazy, disruptive, depressed, nasty, spiteful, cruel, lost, vindictive, hopeless, envious, and frustrated.",
        }
      ],
  }),
}
</script>
