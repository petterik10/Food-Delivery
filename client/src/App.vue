<template>
  <div id="app" class="container">
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  provide() {
    return { myText: "Thats what we said" };
  },
  mounted() {
    this.$root.$on("OnCreate", msg => {
      console.log("OnCreate On", msg.name);
    });
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>