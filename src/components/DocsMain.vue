<template>
    <div>
        <v-row align="start" justify="start">
            <v-col cols="12">
                <div 
                class=""
                    v-for="(item, i) in data"
                    :key="i">
                <h1 class="mt-5 mb-0 pb-0 display-1 font-weight-bold">{{item.ref}}: {{item.name}}</h1>
                <p class="caption mb-15">Status: 
                    <v-chip
                        class="font-weight-bold text-uppercase"
                        small
                        label
                    >{{item.status}}
                    </v-chip>
                </p>
                <div v-if="item.intent.length">
                <h3 id="intent">
                    Intent
                </h3>

                <div 
                v-for="(content, c) in item.intent"
                    :key="c" >
                    <p>{{content}}</p>
                </div>
                
                </div>
                <div v-if="item.definitions.length">
                <h3 id="definitions">
                    Definitions
                </h3>

                <div 
                v-for="(content, c) in item.definitions"
                    :key="c" >
                    <p>{{content}}</p>
                </div>

                </div>
                <div v-if="item.overview.length">
                <h3 id="overview">
                    Overview
                </h3>
                <div 
                v-for="(content, c) in item.overview"
                    :key="c" >
                    <p>{{content}}</p>
                </div>
                </div>
                <div 
                v-for="(section, s) in item.sections"
                    :key="s" >
                    <h4 :id="section.name.replace(/ /g,'_').toLowerCase()" class="pt-5">{{s + 1}}. {{section.name}}</h4>
                    <div 
                    v-for="(paragraph, p) in section.paragraphs"
                    :key="p">
                    <p>{{s + 1}}.{{p}} {{paragraph}}</p>
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
