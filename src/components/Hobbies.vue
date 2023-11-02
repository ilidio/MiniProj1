<template>
  <div id="app">    
      <h1>Hobbies</h1>
    I like to play football, chess, swimming and read books. I also like to travel to meet new people.

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