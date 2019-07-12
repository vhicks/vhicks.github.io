<template>
  <navbar position="fixed" type="primary" menu-classes="ml-auto">
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/presentation">
        Parrocode
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item"><router-link to="/main" class="nav-link">
        <i class="now-ui-icons business_bulb-63"></i> Features</router-link>
      </li>
      <li class="nav-item" v-show="!currentUser"><router-link to="/login" class="nav-link">
        <i class="now-ui-icons users_circle-08"></i> Login</router-link>
      </li>
      <li class="nav-item" v-show="currentUser" @click="logout"><router-link to="/login" class="nav-link">
        <i class="now-ui-icons business_bulb-63"></i> Logout</router-link>
      </li>
    </template>
  </navbar>
</template>

<script>
import database from '@/services/database';
import { DropDown, NavbarToggleButton, Navbar, NavLink, FormGroupInput } from '@/components';
import { Popover } from 'element-ui';

export default {
  name: 'main-navbar',
  components: {
    DropDown,
    [FormGroupInput.name]: FormGroupInput,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    }
  },
  methods: {
    async logout() {
      await database.signOut()

      this.$router.push('/login')
    }
  }
};
</script>

<style scoped></style>
