<template>
  <div id="app">
    [ <router-link to="/">Quem sou eu</router-link> ] 
    [ <router-link to="/Cv">O que faço</router-link> ]
    [ <router-link to="/Hobbies">Hobbies</router-link> ]
    <hr/>
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
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
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
