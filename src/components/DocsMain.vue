<template>
    <div>
        <v-row>
            <v-col cols="12">
                <div 
                class=""
                    v-for="(item, i) in data"
                    :key="i">
                <h1 class=""> {{item.name}}</h1>
                <div v-if="item.intent.length">
                <h3>
                    Intent
                </h3>

                <div 
                v-for="(content, c) in item.intent"
                    :key="c" >
                    <p>{{content}}</p>
                </div>
                
                </div>
                <div v-if="item.definitions.length">
                <h3>
                    Definitions
                </h3>

                <div 
                v-for="(content, c) in item.definitions"
                    :key="c" >
                    <p>{{content}}</p>
                </div>

                </div>
                <div v-if="item.overview.length">
                <h3>
                    Overview
                </h3>
                <div 
                v-for="(content, c) in item.overview"
                    :key="c" >
                    <p>{{content}}</p>
                </div>
                </div>
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
