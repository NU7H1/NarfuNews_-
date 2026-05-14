<template>
  <v-app-bar color="#01579B" dark flat elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="$emit('toggle-sidebar')" />
    </template>

    <v-app-bar-title class="d-flex align-center">
      <v-icon icon="megaphone" size="24" color="white" class="mr-2" />
      Новости
    </v-app-bar-title>

    <v-spacer />

    <v-text-field
      density="compact"
      variant="outlined"
      placeholder="Поиск документа"
      hide-details
      single-line
      class="mx-4 custom-search"
      style="max-width: 300px;"
    >
      <template #prepend-inner>
        <v-icon icon="search" size="20" color="white" />
      </template>
    </v-text-field>

    <div v-if="isLoggedIn">
      <v-menu>
        <template #activator="{ props }">
          <v-btn v-bind="props" variant="text" color="white">
            {{ userName }}
            <v-icon icon="arrowDown" size="20" class="ml-1" />
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <template #prepend>
              <v-icon icon="settings" size="20" color="#AAAFB9" />
            </template>
            <v-list-item-title>Профиль</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <template #prepend>
              <v-icon icon="exit" size="20" color="#AAAFB9" />
            </template>
            <v-list-item-title>Выйти</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-btn v-else color="white" variant="text" @click="openLoginDialog">
      Войти
    </v-btn>

    <LoginDialog ref="loginDialog" @login-success="onLoginSuccess" />
  </v-app-bar>
</template>

<script>
import LoginDialog from './LoginDialog.vue';

export default {
  name: 'Navbar',
  components: { LoginDialog },
  inject: ['userService'],
  emits: ['toggle-sidebar'],
  data() {
    return {
      isLoggedIn: false,
      userName: '',
    };
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    openLoginDialog() {
      this.$refs.loginDialog.open();
    },
    onLoginSuccess() {
      this.isLoggedIn = true;
      this.userName = sessionStorage.getItem('userName') || 'Пользователь';
    },
    logout() {
      sessionStorage.removeItem('userRecordId');
      sessionStorage.removeItem('userName');
      this.isLoggedIn = false;
      this.userName = '';
    },

    async checkAuth() {
      const recordId = sessionStorage.getItem('userRecordId');
      if (recordId) {
        const storedName = sessionStorage.getItem('userName');
        if (storedName) {
          this.isLoggedIn = true;
          this.userName = storedName;
        } else {
          try {
            const userData = await this.userService.getCurrentUser(recordId);
            const fields = userData.fields;
            const fullName = `${fields.Surname || ''} ${fields.Name || ''} ${fields.Patronymic || ''}`.trim();
            sessionStorage.setItem('userName', fullName);
            this.userName = fullName;
            this.isLoggedIn = true;
          } catch (err) {
            sessionStorage.removeItem('userRecordId');
            console.error(err);
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.custom-search :deep(.v-field) {
  background-color: #1976D2 !important;
  border: 1px solid white !important;
  border-radius: 4px;
}
.custom-search :deep(.v-field__input) {
  color: white !important;
}
.custom-search :deep(.v-field__input::placeholder) {
  color: rgba(255,255,255,0.7) !important;
}
.custom-search :deep(.v-icon) {
  color: white !important;
}
</style>