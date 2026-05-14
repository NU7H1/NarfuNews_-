<template>
  <v-app>
    <Navbar @toggle-sidebar="drawer = !drawer" />
    <Sidebar v-model:drawer="drawer" />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './src/components/UI/Navbar.vue'
import Sidebar from './src/components/UI/Sidebar.vue'

export default {
  name: 'App',
  components: { Navbar, Sidebar },
  data() {
    return { drawer: true }
  },
  mounted() {
    const saved = localStorage.getItem('sidebar_drawer')
    if (saved !== null) {
      this.drawer = saved === 'true'
    }
  },
  watch: {
    drawer(newVal) {
      localStorage.setItem('sidebar_drawer', newVal)
    },
  },
}

</script>