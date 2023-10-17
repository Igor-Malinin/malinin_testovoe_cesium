<template>
  <nav class="sidebar">
    <img class="sidebar__image" src="@/assets/satellite.png">
    <div class="sidebar__links">
      <router-link class="sidebar__earth-link" to="/">
        <img class="sidebar__earth-img" src="@/assets/earth.png">
        <span>Визуализация</span>
      </router-link>
      <router-link class="sidebar__chart-link" to="/graph">
        <img class="sidebar__chart-img" src="@/assets/chart.png">
        <span>План-график</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheSidebar"
}
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid $grey;

  .sidebar__image {
    width: 100px;
    margin: 30px auto;
  }
}

.sidebar__links {
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-top: 2px solid $grey;

  a {
    font-weight: bold;
    padding: 20px 20px 20px 50px;
    transition: all 0.15s ease-in;

    &:hover {
      background-color: $hover;
      color: $accent;
    }
    &:active {
      background-color: $click;
    }
    &.router-link-exact-active {
      background-color: $active;
      color: $accent;
    }
  }

  .sidebar__earth-link {
    position: relative;
    .sidebar__earth-img {
      position: absolute;
      width: 30px;
      top: 15px;
      left: 10px;
    }
  }
  .sidebar__chart-link {
    position: relative;
    .sidebar__chart-img {
      position: absolute;
      width: 30px;
      top: 12px;
      left: 10px;
    }
  }
}
</style>