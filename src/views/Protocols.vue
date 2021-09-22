<template>
  <section id="protocols">
    <v-container fluid class="pb-15">
      <v-row v-if="selectedSlug" align="start" justify="start">
        <v-col cols="12" md="3">
          <docsMenu :data="menuData" :type="type"></docsMenu>
        </v-col>
        <v-col cols="12" md="6">
          <docsMain :data="mainData" :type="type" :generalAlert="generalAlert"></docsMain>
          <foot/>
        </v-col>
        <v-col cols="12" md="3">
          <docsSections :data="sectionsData"></docsSections>
        </v-col>
      </v-row>
      <v-row v-else>
        
        <v-col cols="12">
          <docsMainMenu :data="menuData" :type="type" :introParagraphs="introParagraphs"></docsMainMenu>
          <foot/>
        </v-col>
        </v-row>
      
    </v-container>
    
  </section>
</template>

<script>
import docsMain from '../components/DocsMain.vue'
import docsMenu from '../components/DocsMenu.vue'
import docsSections from '../components/DocsSections.vue'
import docsMainMenu from '../components/DocsMainMenu.vue'
import foot from '../components/Footer.vue'
import keys from '../data/protocols/index.js'
import autonomy from '../data/protocols/autonomy.js'
import change from '../data/protocols/change.js'
import conflict from '../data/protocols/conflict.js'
import connection from '../data/protocols/connection.js'
import control from '../data/protocols/control.js'
import decisions from '../data/protocols/decisions.js'
import diversity from '../data/protocols/diversity.js'
import flow from '../data/protocols/flow.js'
import growth from '../data/protocols/growth.js'
import operationalExcellence from '../data/protocols/operationalExcellence.js'
import intelligences from '../data/protocols/intelligences.js'
import leadership from '../data/protocols/leadership.js'
import learning from '../data/protocols/learning.js'
import mastery from '../data/protocols/mastery.js'
import narrative from '../data/protocols/narrative.js'
import power from '../data/protocols/power.js'
import psychologicalSafety from '../data/protocols/psychologicalSafety.js'
import quality from '../data/protocols/quality.js'
import senseMaking from '../data/protocols/senseMaking.js'
import systemsThinking from '../data/protocols/systemsThinking.js'
import trust from '../data/protocols/trust.js'
import wellbeing from '../data/protocols/wellbeing.js'


export default {
  components: {
    docsMain,
    docsMenu,
    docsSections,
    docsMainMenu,
    foot
  },
  data: () => ({
    keys: keys,
    type: 'protocol',
    generalAlert: 'The protocols here are currently in very early DRAFT status and will be subject to considerable revision until reviewed and approved.',
    introParagraphs: [
      'When applying these protocols to your Engineering eco-system and beyond, remember the intent is to encourage enlightened thinking rather than dogmatic prescription.  Apply pragmatism, common sense and moderation to the implementation of these protocols.  Rules have exceptions and these protocols have their limits.',
      'Remember this is People First thinking so the golden rule is to consider the human beings affected by all that we do.'
    ],
    autonomy: autonomy,
    change: change,
    intelligences: intelligences,
    conflict: conflict,
    connection: connection,
    control: control,
    decisions: decisions,
    diversity: diversity,
    flow: flow,
    growth: growth,
    operationalExcellence: operationalExcellence,
    leadership: leadership,
    learning: learning,
    mastery: mastery,
    narrative: narrative,
    power: power,
    psychologicalSafety: psychologicalSafety,
    quality: quality,
    senseMaking: senseMaking,
    systemsThinking: systemsThinking,
    trust: trust,
    wellbeing: wellbeing
  }),
  computed: {
    selectedProtocolData () {
      const selectedProtocol = this.keys.data.filter(x => x.slug === this.selectedSlug)
       if (selectedProtocol.length) {
         return selectedProtocol[0]
       }
      return []
    },
    selectedSlug () {
      return this.$route.params.slug || null
    },
    menuData () {
      return this.keys.data
    },
    mainData () {
      const keyName = this.selectedProtocolData.keyName || ''
      return this[keyName] || []
    },
    sectionsData () {
      let sectionHeadings = []
      const content = this.mainData.protocol
      const sections = content.sections
      
      if (content.intent.length) {
        sectionHeadings.push('Intent')
      }
      if (content.definitions.length) {
        sectionHeadings.push('Definitions')
      }
      if (content.overview.length) {
        sectionHeadings.push('Overview')
      }
      
      if (sections.length) {
        sections.forEach(res => {
          sectionHeadings.push(res.name)
        })
      }
      
      if (content.conclusions.length) {
        sectionHeadings.push('Conclusions')
      }
      if (content.appendix.length) {
        sectionHeadings.push('Appendix')
      }
      if (content.references.length) {
        sectionHeadings.push('References')
      }
      if (content.acknowledgements.length) {
        sectionHeadings.push('Acknowledgements')
      }

      return sectionHeadings
    }
  }
}
</script>
