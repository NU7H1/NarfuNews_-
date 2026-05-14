<template>
  <v-card class="mb-8 primary-news" elevation="0">
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="5">
        <div class="placeholder-img hero-img"></div>
      </v-col>
      <v-col cols="12" sm="6" md="7">
        <v-card-text class="pa-4 pa-sm-6">
          <div class="text-caption text-grey mb-2">{{ news.date }}</div>
          <div class="text-h5 text-sm-h4 font-weight-bold mb-3">{{ news.title }}</div>
          <div class="text-body-1 mb-4">{{ news.description }}</div>
          <v-btn color="#1976D2" variant="flat" size="large">Читать далее</v-btn>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'PrimaryNews',
  props: {
    news: { type: Object, required: true }
  }
}
</script>

<style scoped>
.placeholder-img {
  width: 100%;
  background-color: #bdbdbd;
}
.hero-img {
  aspect-ratio: 16 / 9;
}
.primary-news {
  background-color: #ffffff;
  width: 100%;
}
</style>