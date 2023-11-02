<template>
  <div id="app">
            <h1>O que faço eu</h1>
I started my career in 2004 as an intern software developer, and I have 15+ years of web and
software development experience in areas like education, e-commerce and government. I
develop in an AGILE and Scrum environment, and I'm keen on engineering software and with all
development stages and its lifecycle. I have been working for various teams with different
projects, gaining experience with differenttechnologies.

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