<template>

  <div id="app">
        I'm a funny guy, I love music and developing software.
  </div>
</template>

<script>
export default {
    name: 'SubPage',
    template: '<div>SubPage path: {{msg}}</div>',
    data: function() {
        return {
            msg: this.$route.path
        }
    }
};
</script>