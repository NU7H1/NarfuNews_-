<template>
  <div>
    <h1 class="text-h4 font-weight-bold mb-6 mt-0 pt-0">Последние новости</h1>
    
    <v-row>
      <v-col
         v-for="(item, index) in newsList"
        :key="item.id"
        :cols="12"
        :sm="index === 0 ? 12 : 6"
        :md="index === 0 ? 12 : 3"
        :class="['pa-3', { 'px-0': index === 0 }]"
      >  
        <PrimaryNews v-if="index === 0" :news="item" />
        <SecondaryNews v-else :news="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PrimaryNews from '../components/PrimaryNews.vue'
import SecondaryNews from '../components/SecondaryNews.vue'
import newsData from '../../../NarfuNewsData.json'

export default {
  name: 'mainPage',
  components: { PrimaryNews, SecondaryNews },
  data() {
    return {
      newsList: newsData.newsList
    }
  }
}
</script>

<style scoped>
.v-row {
  margin-left: -12px;
  margin-right: -12px;
}
.v-col {
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>