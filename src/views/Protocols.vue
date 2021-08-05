<template>
  <section id="protocols">
    <v-container fluid class="pb-15">
      <v-row align="start" justify="start">
        <v-col cols="12" md="3">
          <docsMenu :data="menuData" @protocolChange="onProtocolChange"></docsMenu>
        </v-col>
        <v-col cols="12" md="6">
          <docsMain :data="mainData"></docsMain>
          <foot/>
        </v-col>
        <v-col cols="12" md="3">
          <docsSections :data="sectionsData"></docsSections>
        </v-col>
      </v-row>
      
    </v-container>
    
  </section>
</template>

<script>
import docsMain from '../components/DocsMain.vue'
import docsMenu from '../components/DocsMenu.vue'
import docsSections from '../components/DocsSections.vue'
import foot from '../components/Footer.vue'
import keys from '../data/protocols/index.js'
import psychologicalSafety from '../data/protocols/psychologicalSafety.js'
import change from '../data/protocols/change.js'

export default {
  components: {
    docsMain,
    docsMenu,
    docsSections,
    foot
  },
  data: () => ({
    keys: keys,
    selectedRef: 'PFE-1',
    psychologicalSafety: psychologicalSafety,
    change: change
  }),
  computed: {
    selectedProtocolData () {
      const selectedProtocol = this.keys.data.filter(x => x.ref === this.selectedRef)
       if (selectedProtocol.length) {
         return selectedProtocol[0]
       }
      return []
    },
    menuData () {
      return this.keys.data
    },
    mainData () {
      const keyName = this.selectedProtocolData.keyName || ''
      let data = []
      switch(keyName) {
        case 'psychologicalSafety':
          data = this.psychologicalSafety
          break
        case 'change':
          data = this.change
          break
        default:
          data = []
      }
      return data
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
      if (content.resources.length) {
        sectionHeadings.push('Resources')
      }
      if (content.acknowledgements.length) {
        sectionHeadings.push('Acknowledgements')
      }

      return sectionHeadings
    }
  },
  methods: {
    onProtocolChange (newRef) {
      this.selectedRef = newRef
    }
  }
}
</script>
