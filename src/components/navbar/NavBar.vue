<template>
  <nav
    class="navbar navbar-top sticky-top navbar-expand navbar-dark bg-white border-bottom"
  >
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <SearchBar> </SearchBar>
        <ul class="navbar-nav align-items-center ml-md-auto">
          <li class="nav-item d-xl-none">
            <div
              class="text-dark pr-3 sidenav-toggler sidenav-toggler"
              data-action="sidenav-pin"
              data-target="#sidenav-main"
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </div>
          </li>
          <li class="nav-item d-sm-none">
            <a
              class="nav-link"
              href="#!"
              data-action="search-show"
              data-target="#navbar-search-main"
            >
              <i class="text-dark fas fa-search"></i>
            </a>
          </li>
          <NavbarNotifications> </NavbarNotifications>
          <AppsAvailables> </AppsAvailables>
        </ul>
        <ul class="navbar-nav align-items-center ml-auto ml-md-0">
          <UserIconDropdown> </UserIconDropdown>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import NavbarNotifications from '@/components/navbar/NavbarNotifications.vue'
import AppsAvailables from '@/components/navbar/AppsAvailables.vue'
import UserIconDropdown from '@/components/navbar/UserIconDropdown.vue'
import SearchBar from '@/components/navbar/SearchBar.vue'

export default {
  name: 'NavBar',
  components: {
    NavbarNotifications,
    AppsAvailables,
    UserIconDropdown,
    SearchBar,
  },
  setup() {
    return {}
  },
}
</script>
