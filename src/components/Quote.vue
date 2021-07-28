<template>
    <div class="pt-15 pb-15 align-left">
        <v-row align="left">
            <v-col cols="12" align="left">
                <span class="display-1 font-weight-bold secondary--text"><i class="fas fa-quote-left mb-5"></i></span>
        <v-sheet shaped class="text-left pa-3 body-1 font-weight-bold" color="secondary" dark>{{ quote }}</v-sheet>
            </v-col>
        </v-row>
        <v-row align="right" class="mt-0">
            <v-col cols="12" align="right">
        <v-sheet shaped width="50%" class="text-left pa-3 mt-5 body-2 font-weight-bold" color="primary" dark>{{ attributionName }}<span class="font-weight-regular" v-if="attributionDetails">, {{ attributionDetails }}</span>
        </v-sheet>
        <v-sheet width="50%" class="text-right">
        <span class="text-right display-1 font-weight-bold"><i class="fas fa-quote-right mt-5"></i></span>
            </v-sheet>
            </v-col>
            </v-row>
    </div>

</template>

<script>
export default {
  data: () => ({
      //
  }),
  props: {
    quote: String,
    attributionName: String,
    attributionDetails: String
  },
}
</script>