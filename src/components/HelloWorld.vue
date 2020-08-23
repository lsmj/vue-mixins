<template>
  <div>
    HelloWorld.vue: Locally imported mixin method: {{ mixinMethod1() }}
    <br />
    HelloWorld.vue: Globally imported mixin method: {{ mixinMethod2() }}
  </div>
</template>

<script>
import shared from "./../mixins/SharedMethods.js";

export default {
  name: "HelloWorld",
  mixins: [shared],
};
</script>
