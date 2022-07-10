<template>
<v-container>
<v-row class="text-center" justify="center">
  <v-col
    cols="12"
    xs="11"
    sm="10"
    md="9"
    lg="8"
    xl="7"
  >
    <v-img
      :src="require('@/assets/title.png')"
      class="my-3"
      contain
    />
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
    <p class="text-h6 font-weight-bold mb-3">
      生徒会のホームページへようこそ！
    </p>
    <p class="text-subtitle-1 font-weight-bold mb-3 mt-6">
      スローガンが決定しました！
    </p>
    <p class="text-body-2">
      こんにちは。第22期生徒会本部です。令和4年度の生徒会スローガンは「Progress」(プログレス)になりました。Progressは英語、フランス語、ロシア語などで「進歩」を意味します。昨年のスローガンは結ぶ、繋ぐという意味のConnectでした。コロナウイルスによる制限が緩和されつつある今、昨年度までに引き継いだ「自修館」を大切にしつつ、新しいことに挑戦していきたいと思いスローガンに決めました。今まで以上に委員会や行事実行委員会、部活動などといった生徒たちとの繋がりを深め、みんなが笑顔になれる学校生活をおくれるような学校づくりをしていきたいと思っています。第22期生徒会は生徒や時代のニーズにあわせて自修館生徒会も進歩していきます。
    </p>
  </v-col>
</v-row>
<v-row class="text-center" justify="center"></v-row>
</v-container>
</template>

<script>
export default {
  name: 'HomeView',

  components: {
    //
  }
}
</script>
