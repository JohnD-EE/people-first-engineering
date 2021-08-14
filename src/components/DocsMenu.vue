<template>
    <div>
        <v-row align="start" justify="start">
            <v-col cols="12">
                <v-navigation-drawer fixed floating style="top: 65px">             
                <v-list dense shaped nav>
      <v-subheader  class="primary--text font-weight-bold">{{menuHeader}}</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="secondary"
         class="mb-15 pb-15"
      >
        <v-list-item
          v-for="(item, i) in data"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title>
                <span v-if="type === 'protocol'">{{item.ref}}: </span>{{item.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
 </v-navigation-drawer>  
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  data: () => ({
      selectedItem: 0
  }),
    props: ['data', 'type'],
    computed: {
        menuHeader () {
            return this.type.toUpperCase() + 'S'
        }
    },
    methods: {
        scrollToTop () {
            window.scrollTo(0, 0)
        }
    },
    watch: {
        selectedItem (value) {
            const newRef = this.data[value].ref
            this.scrollToTop()
            this.$emit('menuChange', newRef)
        }
    } 
}
</script>