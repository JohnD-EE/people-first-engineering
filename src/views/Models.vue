<template>
  <section id="models">
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
        </v-col>
      </v-row>
      <v-row v-else>
        
        <v-col cols="12">
          <docsMainMenu :data="menuData" :type="type"></docsMainMenu>
          <foot/>
        </v-col>
        </v-row>
      
    </v-container>
    
  </section>
</template>

<script>
import docsMain from '../components/DocsMain.vue'
import docsMenu from '../components/DocsMenu.vue'
import docsMainMenu from '../components/DocsMainMenu.vue'
import foot from '../components/Footer.vue'
import keys from '../data/models/index.js'
import mri from '../data/models/mri.js'
import flow from '../data/models/flow.js'
import jugglingGlassOrRubberBalls from '../data/models/jugglingGlassOrRubberBalls.js'
import brooksLaw from '../data/models/brooksLaw.js'
import buildSystemsNotGoals from '../data/models/buildSystemsNotGoals.js'
import chestertonsFence from '../data/models/chestertonsFence.js'
import conwaysLaw from '../data/models/conwaysLaw.js'
import cynefinFramework from '../data/models/cynefinFramework.js'
import dramaTriangle from '../data/models/dramaTriangle.js'
import firstPrinciples from '../data/models/firstPrinciples.js'
import parentAdultChild from '../data/models/parentAdultChild.js'
import paretoPrinciple from '../data/models/paretoPrinciple.js'
import peterPrinciple from '../data/models/peterPrinciple.js'
import staceyMatrix from '../data/models/staceyMatrix.js'

export default {
  components: {
    docsMain,
    docsMenu,    
    docsMainMenu,
    foot
  },
  data: () => ({
    keys: keys,
    type: 'model',
    generalAlert: 'This website is still very young and the models here are a work in progress.',
    mri: mri,
    flow: flow,
    jugglingGlassOrRubberBalls: jugglingGlassOrRubberBalls,
    brooksLaw: brooksLaw,
    buildSystemsNotGoals: buildSystemsNotGoals,
    chestertonsFence: chestertonsFence,
    conwaysLaw: conwaysLaw,
    cynefinFramework: cynefinFramework,
    dramaTriangle:dramaTriangle,
    firstPrinciples: firstPrinciples,
    parentAdultChild: parentAdultChild,
    paretoPrinciple: paretoPrinciple,
    peterPrinciple: peterPrinciple,
    staceyMatrix: staceyMatrix
  }),
  computed: {
    selectedModelData () {
      const selectedModel = this.keys.data.filter(x => x.slug === this.selectedSlug)
       if (selectedModel.length) {
         return selectedModel[0]
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
      const keyName = this.selectedModelData.keyName || ''
      return this[keyName] || []
    }    
  },
  methods: {
    //
  }
}
</script>
