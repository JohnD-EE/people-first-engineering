<template>
    <div>
        <v-row align="start" justify="start">
            <v-col cols="12">
                <div 
                class=""
                    v-for="(item, i) in data"
                    :key="i">
                <h1 class="mt-5 mb-0 pb-0 display-1 font-weight-bold">
                    <span v-if="type === 'protocol'">{{item.ref}}: </span>{{item.name}}</h1>
                <p class="caption mb-15">Status: 
                    <v-chip
                        class="font-weight-bold text-uppercase"
                        small
                        label
                    >{{item.status}}
                    </v-chip>
                </p>
                <v-alert v-if="generalAlert"
                    outlined
                    type="warning"
                    prominent
                    border="left"
                    >
                    {{generalAlert}}
                    </v-alert>
                <p class="mt-5 mb-15 caption">
                    These documents use the words "MUST", "MUST NOT", "SHOULD", "SHOULD NOT", 
                    and "MAY" as per the interpretation guidelines laid out in <a href="https://www.ietf.org/rfc/rfc2119.txt" target="blank">RFC-2119</a> in the 
                    Harvard University Network Working Group memo.
                    </p>
                <div v-if="checkProperty(item.intent)">
                <h3 id="intent">
                    Intent
                </h3>

                <div 
                v-for="(content, c) in item.intent"
                    :key="c" >
                    <p>{{content}}</p>
                </div>
                
                </div>
                <div v-if="checkProperty(item.definitions)">
                <h3 id="definitions">
                    Definitions
                </h3>

                <div 
                v-for="(content, c) in item.definitions"
                    :key="c" >
                    <p>{{content}}</p>
                </div>

                </div>
                <div v-if="checkProperty(item.overview)">
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
                    <h4 :id="section.name.replace(/ /g,'_').toLowerCase()" class="pt-5">
                        <span v-if="type === 'protocols'">{{s + 1}}. </span>{{section.name}}</h4>
                        <div 
                        v-for="(paragraph, p) in section.paragraphs"
                        :key="p">                       
                        <p v-if="typeof paragraph === 'string'"><span v-if="type === 'protocols'">{{s + 1}}.{{p}} </span>{{paragraph}}</p>
                        <span v-if="typeof paragraph === 'object'">
                            <span v-if="paragraph.type === 'list'">
                                <ul class="pt-3 pb-3">
                                    <li v-for="(item, i) in paragraph.items"
                                    :key="i"
                                    class="pb-3">
                                        {{item}}
                                        </li>
                                </ul>
                            </span>
                        </span>
                    </div>
                    
                    </div>

                    <div v-if="checkProperty(item.whenToUse)">
                        <h3 id="when_to_use">
                            When To Use
                        </h3>
                        <div 
                        v-for="(content, c) in item.whenToUse"
                            :key="c" >
                            <p>{{content}}</p>
                        </div>
                    </div>

                    <div v-if="checkProperty(item.conclusions)">
                        <h3 id="conclusions">
                            Conclusions
                        </h3>
                        <div 
                        v-for="(content, c) in item.conclusions"
                            :key="c" >
                            <p>{{content}}</p>
                        </div>
                    </div>

                    <div v-if="checkProperty(item.appendix)">
                        <h3 id="appendix">
                            Appendix
                        </h3>
                        <div 
                        v-for="(content, c) in item.appendix"
                            :key="c" >
                            <p>{{content}}</p>
                        </div>
                    </div>

                    <div v-if="checkProperty(item.references)">
                        <h3 id="references">
                            References
                        </h3>
                        <div 
                        v-for="(content, c) in item.references"
                            :key="c" >
                            <p>{{content}}</p>
                        </div>
                    </div>

                    <div v-if="checkProperty(item.acknowledgements)">
                        <h3 id="acknowledgements">
                            Acknowledgements
                        </h3>
                        <div 
                        v-for="(content, c) in item.acknowledgements"
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
    props: ['data', 'type', 'generalAlert'],
    methods: {
        checkProperty(property) {
            if (property) {
                if (property.length) {
                    return true
                }
            }
        }
    },
    mounted() {
        //console.log('DATA PROP', this.data)
  }
}
</script>
