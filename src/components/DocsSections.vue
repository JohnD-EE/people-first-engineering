<template>
    <div>
        <v-row align="start" justify="start">
            <v-col cols="12" >
                <v-navigation-drawer floating right fixed style="top: 65px;">
                <h5 class="secondary--text font-weight-bold mt-5 mb-5">SECTIONS</h5>
                    <div
                        class="pa-0 ma-0"
                        v-for="(item, i) in data"
                        :key="i"
                        >
                        <p class="mb-2 caption">
                            <a 
                            :href="'#' + item.replace(/ /g,'_').toLowerCase()"
                            class="text-decoration-none"
                            >{{item}}</a>
                        </p>
                    </div>
                </v-navigation-drawer>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  data: () => ({
      //
  }),
    props: ['data']
}
</script>