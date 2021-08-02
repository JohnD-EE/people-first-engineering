<template>
  <section id="tools">
    <v-container fluid class="pt-15 pb-15 mt-10">
      <v-row align="start" justify="center">
        <v-col cols="10">
          <v-row align="start" justify="center">
              <v-col cols="12" md="8">
                <h1>
                  Services:
                </h1>
                <p>Creating a People First Engineering culture will require understanding and acceptance from the 
                    Engineering departmnet along with wider organisational support. Any change may involve fear and resistance 
                    from those affected, even when well intentioned and in good faith.
                </p>
                <p>The following services may be provided to design and implement a People First ecosystem:
                    </p>
                    <v-sheet outlined rounded class="ma-5 pa-10">
                <h3 class="mt-0">1. Interim Management</h3>
                <p>An Interim Management approach can be delivered by providing a 'Head of Software Engineering', 
                    function to see a department through a 6 to 12 months phase of change or growth. 
                    Implementing a People First culture to create a more thriving Engineering ecosystem.
                </p>
                <h3>2. Consultancy</h3>
                <p>A bespoke arrnagement according to the needs of the organisation and the needs of the 
                    existing Engineering team. Uncovering opportunities to implement a People First culture
                </p>
                <h3>3. Ad-hoc Engagements</h3>
                <p>A pick and mix approach, best applied as follow-ups to Interim Management or Consultancy to 
                    further embed People First principles, protocals, and processes.
                </p>
                </v-sheet>
                <h3>Project scoping, milestones and checkpoints:</h3>
                <p>Regardless of the service, iterative milestones and checkpoints will be agreed in advance, through an 
                    initial project scoping engagemeent, to set the expectations, objectives and timelines of the project. 
                </p>  
                <h3>Deliverables:</h3>
                <p>Devliverables will be customised to the project scope, comprised of the following:</p>
                
              </v-col>
          </v-row>

            <v-row align="center" justify="center" class="pb-15">
            <v-col cols="12" md="8" align="start" justify="center">
              
              <v-row align="stretch">
              <v-col
              cols="12"
              sm="6"
              class="text-left"
              v-for="(deliverable, i) in deliverables"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card pa-3"
                  outlined
                  
                  color="accent"
                  min-height="265px"
                  :elevation="hover ? 10 : 2"
                >
                
                  <h3 class="mt-0 secondary--text" >{{ deliverable.title }}:</h3>
                  <v-divider class="mt-3 mb-3 secondary"></v-divider>
                  <p 
                    class="body-2" 
                    v-for="(paragraph, p) in deliverable.paragraphs"
                    :key="p">
                        {{ paragraph }}
                  </p>
                </v-card>
              </v-hover>
            </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-col cols="12" md="8" align="center" justify="center">
              <quote
                quote="A human being is a part of the whole called by us universe, a part limited in time 
                and space. He experiences himself, his thoughts and feeling as something separated from 
                the rest, a kind of optical delusion of his consciousness. This delusion is a kind of prison for 
                us, restricting us to our personal desires and to affection for a few persons nearest to us. Our 
                task must be to free ourselves from this prison by widening our circle of compassion to embrace 
                all living creatures and the whole of nature in its beauty."
                attributionName="Albert Einstein"
                attributionDetails="in a letter to Robert S. Marcus, a grieving father."
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
h3 {
  margin-top:45px
}
</style>


<script>
import quote from '../components/Quote.vue'

export default {
  components: {
    quote
  },
  data: () => ({
    deliverables: [
        {
            title: 'Engineer Experience Audits',
            paragraphs: [
                'Structured one-to-one interviews in a safe and impartial setting to gain an in depth and earnerst perspective on the experience of Engineers and their interactions with colleages and their wider ecosystem.'
            ]
        },
        {
            title: 'Finding FLOW',
            paragraphs: [
                'Guiding Managers and Engineers through implementing the frequent monitoring and enchancement of Engineer FLOW.',
                'The quality of the Engineer experience is central to People First Engingeering, FLOW gives the data and guidance to improve the environmental FLOW triggers.'
            ]
        },
        {
            title: 'Enhancing Collective Intelligence',
            paragraphs: [
                'Implementing strategies and tools within teams to create better working relationships.'
            ]
        },
        {
            title: 'Career Progession and Professional Development',
            paragraphs: [
                'Implementing a clear structure and supporting resources for career progression',
                'Providing Professional Development Plans to inspire and guide personal growth.'
            ]
        },
        {
            title: 'Leadership',
            paragraphs: [
                'Encouraging emergent leadership from within Engineering teams, self-ownership and responsibility, autonomous decision making.',
                'Developing an empowering narrative from within.'
            ]
        },
        {
            title: 'Engineering Insights Groups',
            paragraphs: [
                'Hangouts for Engineers to share their experiences of optimising for a People First environment.',
                'Comparing practices, protocols, patterns, insights, learnings and experiences.'
            ]
        }
    ]
  })
}
</script>
