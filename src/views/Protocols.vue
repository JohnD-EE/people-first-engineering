<template>
  <section id="protocols">
    <v-container fluid class="pb-15 ">
      <v-row align="center" justify="center">
        <v-col cols="12" md="2">
          <docsMenu :data="menuData"></docsMenu>
        </v-col>
        <v-col cols="12" md="8">
          <docsMain :data="mainData"></docsMain>
        </v-col>
        <v-col cols="12" md="2">
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
import keys from '../data/protocols/index.js'
import psychologicalSafety from '../data/protocols/psychologicalSafety.js'
import change from '../data/protocols/change.js'

export default {
  components: {
    docsMain,
    docsMenu,
    docsSections
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
      return ''
    },
    menuData () {
      return this.keys
    },
    mainData () {
      console.log('selectedProtocolData', this.selectedProtocolData.keyName)
      //return this.psychologicalSafety
      const keyName = this.selectedProtocolData.keyName || ''
      switch(keyName) {
        case 'psychologicalSafety':
          return this.psychologicalSafety
        case 'change':
          return this.change
        default:
          return ''
}
    },
    sectionsData () {
      return ''
    }
  }
}
</script>
