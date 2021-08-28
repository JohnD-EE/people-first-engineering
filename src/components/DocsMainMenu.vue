<template>
    <div>
        <v-row align="start" justify="center">
            <v-col cols="10" md="6">
                <span v-if="type === 'protocol'">
            <h1 class="mt-5 mb-0 pb-0 display-1 font-weight-bold">
          Protocols
          </h1>  
          <p class="mb-15">Standards, patterns and principles for human centric Software Engineering.
                </p>
                </span>
                <span v-if="type === 'model'">
            <h1 class="mt-5 mb-0 pb-0 display-1 font-weight-bold">
          Models
          </h1>  
          <p class="mb-15">Models and concepts to apply in People First Engineering environments.
                </p>
                </span>    
                <v-list shaped nav>
      
      <v-list-item-group
        v-model="selectedItem"
        color="secondary"
         class="mb-15 pb-15"
      >
        <v-list-item
          v-for="(item, i) in data"
          :key="i"
          :to="getRoute(item.slug)"
           router
        >
          <v-list-item-content>
            <v-list-item-title>
                <span v-if="type === 'protocol'">{{item.ref}}: </span>{{item.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  data: () => ({
      selectedItem: null
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
        },
        getRoute(slug) {
            return '/' + this.type + 's/' + slug
        }
    },
    watch: {
        selectedItem () {
            this.scrollToTop()
        }
    } 
}
</script>