<template>
<v-container>
<v-row justify="center">
<v-col
  cols="12"
  xs="11"
  sm="10"
  md="9"
  lg="8"
  xl="7"
>
  <v-card
    class="mx-auto"
    tile
    elevation="0"
  >
    <v-img
      class="white--text align-center"
      :src="require('@/assets/banner.png')"
      height="50px"
    >
      <v-card-title
        class="font-weight-bold"
      >
        行事<span class="font-weight-regular ml-4" style="color:#87C1DA">EVENT</span>
      </v-card-title>
    </v-img>
  </v-card>
</v-col>
</v-row>
<v-row justify="center">
<v-col
  cols="12"
  xs="11"
  sm="10"
  md="9"
  lg="8"
  xl="7"
>

  <v-card
    class="mx-auto"
    tile
    elevation="0"
  >
    <v-card-title>行事紹介</v-card-title>

    <v-divider class="mt-n4 blue"></v-divider>

  </v-card>
</v-col>
</v-row>
<v-row justify="center">
<v-col
  cols="12"
  xs="11"
  sm="10"
  md="9"
  lg="8"
  xl="7"
>

  <v-card
    class="mx-auto"
    tile
    elevation="0"
    v-for="(y, i) in gyouji"
    :key="i"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h6 mt-2">
          {{ y.job }}
        </v-list-item-title>
        <v-list-item-content class="text-body-2 mt-n2">
          {{ y.comment }}
        </v-list-item-content>
      </v-list-item-content>

    </v-list-item>

  </v-card>
</v-col>
</v-row>
</v-container>
</template>

<script>
import constants from '@/common/gyouji'

export default {
  name: 'EventView',

  components: {
    //
  },
  data: () => ({
    gyouji: constants.gyouji,
    loading: false,
    selection: 1
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
