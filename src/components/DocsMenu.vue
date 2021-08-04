<template>
    <div>
        <v-row>
            <v-col cols="12">                
                <v-list dense shaped>
      <v-subheader>PROTOCOLS</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="secondary"
      >
        <v-list-item
          v-for="(item, i) in data"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title>{{item.ref}}: {{item.name}}</v-list-item-title>
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
      selectedItem: 0
  }),
    props: ['data'],
    watch: {
        selectedItem (value) {
            console.log('selected', value)
            const newRef = this.data[value].ref
            console.log('newRef ', newRef )
            this.$emit('protocolChange', newRef)
        }
    } 
}
</script>