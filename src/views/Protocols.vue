<template>
  <section id="protocols">
    <v-container fluid class="pb-15">
      <v-row v-if="selectedRef" align="start" justify="start">
        <v-col cols="12" md="3">
          <docsMenu :data="menuData" :type="type" @menuChange="onProtocolChange"></docsMenu>
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
          <docsMainMenu :data="menuData" :type="type" @menuChange="onProtocolChange"></docsMainMenu>
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
import control from '../data/protocols/control.js'
import decisions from '../data/protocols/decisions.js'
import diversity from '../data/protocols/diversity.js'
import flow from '../data/protocols/flow.js'
import growth from '../data/protocols/growth.js'
import information from '../data/protocols/information.js'
import intelligences from '../data/protocols/intelligences.js'
import leadership from '../data/protocols/leadership.js'
import learning from '../data/protocols/learning.js'
import mastery from '../data/protocols/mastery.js'
import narrative from '../data/protocols/narrative.js'
import power from '../data/protocols/power.js'
import psychologicalSafety from '../data/protocols/psychologicalSafety.js'
import quality from '../data/protocols/quality.js'
import relatedness from '../data/protocols/relatedness.js'
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
    autonomy: autonomy,
    change: change,
    intelligences: intelligences,
    conflict: conflict,
    control: control,
    decisions: decisions,
    diversity: diversity,
    flow: flow,
    growth: growth,
    information: information,
    leadership: leadership,
    learning: learning,
    mastery: mastery,
    narrative: narrative,
    power: power,
    psychologicalSafety: psychologicalSafety,
    quality: quality,
    relatedness: relatedness,
    senseMaking: senseMaking,
    systemsThinking: systemsThinking,
    trust: trust,
    wellbeing: wellbeing
  }),
  computed: {
    selectedProtocolData () {
      const selectedProtocol = this.keys.data.filter(x => x.ref === this.selectedRef)
       if (selectedProtocol.length) {
         return selectedProtocol[0]
       }
      return []
    },
    selectedRef () {
      //console.log('$route', this.$route.params.ref)
      
      return this.$route.params.ref || null
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
  },
  methods: {
    onProtocolChange (newRef) {
      console.log('$route', this.$route.params.ref)
      //this.selectedRef = this.$route.params.ref || null
    }
  }
}
</script>
