<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
    name: 'SubPage',
    template: '<div>SubPage path:</div>',
    data: function() {
        return {
            msg: this.$route.path
        }
    },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 20px 10%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #17171a;
}


#app {
  padding-bottom: 2.5rem;    /* Footer height */
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;            /* Footer height */
}

</style>
