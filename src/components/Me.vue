<template>
  <div id="app">
        <h1>Quem sou eu</h1>
        I'm a funny guy, I love music and developing software.
        <br>
        <br>
        <br>
        [ <router-link to="/">back</router-link> ]
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