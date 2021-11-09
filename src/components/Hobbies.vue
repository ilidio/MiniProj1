<template>
  <div id="app">
    I like to play football, chess, swimming and read books. I also like to travel to meet new people.
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