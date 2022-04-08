<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="primary"
    fixed="top" sticky>
  <b-container fluid>
  <b-navbar-brand to="/">{{ $config.appNAME }} </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <b-icon icon="text-left"></b-icon>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/offers">offers</b-nav-item>
        <b-nav-item to="/customers">customers</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/login">login</b-nav-item>
        <b-nav-item-dropdown right v-if="isAuth">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click.prevent="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-container>
  </b-navbar>

</template>


<script>
export default {
  name: 'Header',
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
