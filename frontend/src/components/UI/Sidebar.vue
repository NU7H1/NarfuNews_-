<template>
  <v-navigation-drawer
    :model-value="drawer"
    @update:model-value="$emit('update:drawer', $event)"
    app
    color="#f5f5f5"
    width="320"
  >
    <v-list nav dense>
      <v-list-item 
        to="/" 
        class="nav-item" 
        active-class="active-nav-item"
      >
        <template #prepend>
          <v-icon icon="home" size="22" class="nav-icon" /> 
        </template>
        <v-list-item-title>Последние новости</v-list-item-title>
      </v-list-item>

      <v-list-item 
        to="/popular" 
        class="nav-item" 
        active-class="active-nav-item" 
      >
        <template #prepend>
          <v-icon icon="fire" size="22" class="nav-icon" />   
        </template>
        <v-list-item-title>Самые просматриваемые</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  props: { drawer: Boolean },
  emits: ['update:drawer'],
}
</script>

<style scoped>
.nav-icon {
  color: #AAAFB9;
}

.nav-item {
  background-color: transparent !important;
  border-radius: 0 !important;
  margin: 0 !important;
}
.nav-item :deep(.v-list-item__overlay) {
  display: none !important;
}
.nav-item :deep(.v-list-item-title) {
  font-size: 1.1rem !important;
}
.nav-item:hover {
  background-color: #DDEAF8 !important;
  color: #1976D2 !important;
}
.nav-item:hover .nav-icon {
  color: #1976D2 !important;
}
.active-nav-item {
  background-color: #DDEAF8 !important;
  color: #1976D2 !important;
}
.active-nav-item .nav-icon {
  color: #1976D2 !important;
}
</style>