<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/Montserrat-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'MontserratBold';
  src: url('./assets/fonts/Montserrat-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'MontserratMedium';
  src: url('./assets/fonts/Montserrat-Medium.ttf') format('truetype');
}

body {
  font-family: 'Montserrat';
  margin: 0;
  background-image: url("./assets/images/background.png");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

#app {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 20px 10%;
}

h1, h2 {
  font-family: 'MontserratBold';
  font-weight: normal;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 25px;
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
