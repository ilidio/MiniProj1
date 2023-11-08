<template>
  <div id="app" class="container">
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
  background-image: url("./assets/images/background.png");
  height: 100vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire */
  background-attachment: fixed;
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding-top: 60px;
}

header {
    flex-shrink: 0;
    height: 20vh;
    position: static;
    top: 0;
    opacity: 90%;
}


footer {
    flex-shrink: 0;
    width: 100%;
    height: 2.4rem;
    position: sticky;
    bottom: 0;
    padding-top: 7px;
    background-color: azure;
    height: 10vh;
    opacity: 93%;
}
</style>
