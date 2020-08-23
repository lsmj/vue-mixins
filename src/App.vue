<template>
  <div id="app">
    App.vue: Locally imported mixin method: {{ mixinMethod1() }}
    <br />
    App.vue: Globally imported mixin method: {{ mixinMethod2() }}
    <br />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import shared from "./mixins/SharedMethods.js";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mixins: [shared],
};
</script>