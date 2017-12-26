<template>
  <div id="app">
    <transition name="router-fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import svgIcon from "./components/common/svg";

export default {
  name: "app",
  components: {
    svgIcon
  }
};
</script>

<style lang='scss'>
@import "./style/common";
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
