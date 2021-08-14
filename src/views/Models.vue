<template>
  <section id="models">
    <v-container fluid class="pb-15">
      <v-row align="start" justify="start">
        <v-col cols="12" md="3">
          <docsMenu :data="menuData" :type="type" @menuChange="onModelChange"></docsMenu>
        </v-col>
        <v-col cols="12" md="6">
          <docsMain :data="mainData" :type="type" :generalAlert="generalAlert"></docsMain>
          <foot/>
        </v-col>
        <v-col cols="12" md="3">
        </v-col>
      </v-row>
      
    </v-container>
    
  </section>
</template>

<script>
import docsMain from '../components/DocsMain.vue'
import docsMenu from '../components/DocsMenu.vue'
import foot from '../components/Footer.vue'
import keys from '../data/models/index.js'
import mri from '../data/models/mri.js'
import flow from '../data/models/flow.js'
import jugglingGlassOrRubberBalls from '../data/models/jugglingGlassOrRubberBalls.js'
jugglingGlassOrRubberBalls

export default {
  components: {
    docsMain,
    docsMenu,
    foot
  },
  data: () => ({
    keys: keys,
    selectedRef: 'mri',
    type: 'model',
    generalAlert: 'This website is still very young and the models here are a work in progress.',
    mri: mri,
    flow: flow,
    jugglingGlassOrRubberBalls: jugglingGlassOrRubberBalls
  }),
  computed: {
    selectedModelData () {
      const selectedModel = this.keys.data.filter(x => x.ref === this.selectedRef)
       if (selectedModel.length) {
         return selectedModel[0]
       }
      return []
    },
    menuData () {
      return this.keys.data
    },
    mainData () {
      const keyName = this.selectedModelData.keyName || ''
      return this[keyName] || []
    }    
  },
  methods: {
    onModelChange (newRef) {
      this.selectedRef = newRef
    }
  }
}
</script>
