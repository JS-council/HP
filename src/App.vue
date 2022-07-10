<template>
<v-app>
<v-navigation-drawer
  app
  v-model="drawer"
  clipped
  temporary
>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title class="text-h6">
        Navigation
      </v-list-item-title>
      <v-list-item-subtitle>
        自修館生徒会
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>

  <v-divider></v-divider>

  <v-list
    dense
    nav
  >
    <v-list-item
      v-for="(p, i) in pageList"
      :key="i"
      link
      @click="changeComponent(p)"
    >
      <!-- <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon> -->

      <v-list-item-content>
        <v-list-item-title>{{ p }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-navigation-drawer>

  <v-app-bar
    app
    color="blue-grey lighten-5"
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="text-h5">
      自修館 | {{ (new Date().getFullYear()) - 2000 }}期生徒会
    </v-toolbar-title>
    <!-- <template v-slot:extension> -->
    <v-tabs>

      <v-tab
        v-for="(p, i) in pageList"
        :key="i"
        @click="changeComponent(p)"
      >
        {{ p }}
      </v-tab>
    </v-tabs>
    <!-- </template> -->
  </v-app-bar>

  <v-main>

    <!-- アプリケーションに適切なgutterを提供 -->
    <v-container fluid>

      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer
    padless
  >
    <v-card
      class="flex"
      flat
      tile
      color="blue-grey darken-4"
    >
      <!-- <v-card-title class="blue-grey lighten-4">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title> -->

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Jishukan Council</strong> — all right reserved
      </v-card-text>
    </v-card>
  </v-footer>
</v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    tab: null,
    pageList: [
      'HOME',
      '本部',
      '委員会',
      '行事',
      '活動'
    ],
    pathList: [
      '/',
      '/profile',
      '/committee',
      '/event',
      '/activity'
    ],
    icons: [
      'mdi-instagram'
    ]
  }),
  methods: {
    changeComponent (page) {
      // console.log(this.$router.currentRoute.path)
      const route = this.pathList[this.pageList.indexOf(page)]
      if (this.$router.currentRoute.path === route) { return }
      this.$router.push(route)
    }
  },
  watch: {
    length (val) {
      this.tab = val - 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/common/common.scss";
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.v-app-bar__nav-icon {
  @include display_tab {
    display: none !important;
  }
}
.v-tabs {
  display: none;
  @include display_pc {
    display: block !important;
  }
}
.v-app-bar-nav-icon {
  display: none;
}
</style>
