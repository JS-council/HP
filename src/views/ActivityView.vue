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
        活動<span class="font-weight-regular ml-4" style="color:#87C1DA">ACTIVITY</span>
      </v-card-title>
    </v-img>
  </v-card>
</v-col>
</v-row>
<v-container
  v-for="(y, i) in katudou"
  :key="i"
>
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
      <v-card-title>{{ y.year }}年度</v-card-title>

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
      class="mx-auto mt-n5 mb-3"
      tile
      elevation="0"
      v-for="(a, n) in y.activity"
      :key="n"
      height="50px"
    >
      <v-list-item @click="showPDF(a, y.year)">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            ・{{ a.month }}月度の活動
          </v-list-item-title>
        </v-list-item-content>

      </v-list-item>

    </v-card>
  </v-col>
  </v-row>
</v-container>
<v-row justify="space-around">
  <v-dialog
    v-model="pdfDialog"
  >
    <v-card>
      <v-toolbar
        :color="pdfColor ? pdfColor : 'blue'"
        dark
      >
        <p class="text-h5 mt-4 ml-3">{{ pdfYear }}年 {{ pdfMonth }}月</p>
        <v-spacer />
        <v-btn
          text
          @click="pdfDialog = false"
        >Close</v-btn>
      </v-toolbar>
      <v-card-text>
        <div class="d-flex align-center justify-center">
            <v-btn
                outlined
                @click="prevPage"
                :disabled="previewer.page_current <= 1"
            >
                戻る
            </v-btn>
            <div class="mx-6">
                {{ previewer.page_current }} / {{ previewer.page_end }}
            </div>
            <v-btn
                outlined
                @click="nextPage"
                :disabled="previewer.page_current === previewer.page_end"
            >
                次へ
            </v-btn>
        </div>
        <pdf
            :src="previewer.src"
            @num-pages="previewer.page_end = $event"
            :page="previewer.page_current"
        ></pdf>
      </v-card-text>
    </v-card>
  </v-dialog>
</v-row>
</v-container>
</template>

<script>
import pdf from 'vue-pdf'
import constants from '@/common/katudou'

export default {
  name: 'ActivityView',

  components: {
    pdf
  },
  data: () => ({
    katudou: constants.katudou,
    loading: false,
    selection: 1,
    pdfDialog: false,
    pdfYear: 0,
    pdfMonth: 0,
    file_preview: true,
    previewer: {
      src: 'activity/202204.pdf',
      type: null,
      page_current: 1,
      page_end: null
    },
    pdfColor: 'red'
  }),
  methods: {
    showPDF (data, year) {
      // console.log('hi')
      const filePath = `activity/${data.fileName}.pdf`
      this.previewer = {
        src: filePath,
        type: null,
        page_current: 1,
        page_end: null
      }
      console.log(filePath)
      this.pdfYear = year
      this.pdfMonth = data.month
      this.pdfDialog = true
      this.pdfColor = data.color
    },
    prevPage () {
      this.previewer.page_current -= 1
    },
    nextPage () {
      this.previewer.page_current += 1
    }
  }
}
</script>
