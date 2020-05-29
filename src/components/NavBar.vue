<template>
  <div>
    <b-navbar class="top-navbar shadow" type="light" toggleable="lg" variant="info">
      <b-navbar-brand to="/">
        <img id="navbar-logo" to="/" src="img/icons/m.png" width="50" height="auto" />
      </b-navbar-brand>
      <b-navbar-brand to="/">
        <b>Kanban</b>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/login">Start Now</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item to="/dashboard">Dashboard</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.top-navbar {
  background-color:#0000000c !important;
}

.navbar-light .navbar-brand:hover,
.navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.664);
}
.navbar-light .navbar-brand {
  color: rgba(24, 24, 24, 0.733);
}
.navbar-brand {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  margin-right: 0.5rem !important;
}
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: rgba(24, 24, 24, 0.733);
  font-weight: 500;
}
</style>
