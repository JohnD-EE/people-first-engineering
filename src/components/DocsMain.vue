<template>
    <div>
        <v-row>
            <v-col cols="12">
                <div 
                    v-for="(item, i) in data"
                    :key="i">
                <h1>{{item.name}}</h1>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  data: () => ({
      //
  }),
    props: ['data'],
    mounted() {
        //console.log('DATA PROP', this.data)
  }
}
</script>
