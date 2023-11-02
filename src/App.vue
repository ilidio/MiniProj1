<template>
  <div id="app" class="body">
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


.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

header {
    flex-shrink: 0;
    height: 20vh;
    position: static;
    top: 0;
}

.body{
    flex-grow: 1;
    overflow: auto;
    min-height: 2em;
    height: 80vh;
    margin-top: 20vh;
}

footer{
    flex-shrink: 0;
    width: 100%;
    height: 2.4rem;
    position: sticky;
    bottom: 0;
    padding-top: 7px;
    background-color: azure;
    border-top: 1px black solid;
    height: 10vh;
}
</style>
