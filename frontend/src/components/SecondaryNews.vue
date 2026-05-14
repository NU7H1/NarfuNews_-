<template>
  <v-card elevation="0" class="secondary-news">
    <div class="placeholder-img secondary-img"></div>
    <v-card-text class="pa-3">
      <div class="text-caption text-grey mb-1">{{ news.date }}</div>
      <div class="text-body-2 font-weight-medium">{{ news.title }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SecondaryNews',
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
.secondary-img {
  aspect-ratio: 16 / 9;
}
.secondary-news :deep(.v-card__text) {
  padding: 12px;
}
</style>