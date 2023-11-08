<template>
  <div>
    <h1>Quem sou eu</h1>

    My sense of humor is so good, even my code laughs at my jokes—mostly because it's trying to figure out what I just wrote.
    <br><br>
    I once tried to teach my computer how to dance. It didn't quite get the rhythm, but now it does a killer interpretative error message.
    <br><br>
    My life is like a software update—constantly evolving, sometimes annoying, but ultimately for the better.
    <br><br>
    I have a pet rock at home. It's the most stable relationship I've ever had.
    <br><br>
    I told my computer I needed a break, and now it won't stop suggesting vacation spots for my mouse pointer.
    <br><br>
    Why did the developer go broke? Because he used up all his cache!
    <br><br>
    My favorite dance move is the algorithm shuffle. It's not on TikTok yet; I'm working on making it go viral.
    <br><br>
    I asked my computer for a joke, and it responded with my social life. Ouch, even the circuits are roasting me.
    <br><br>
    If programming languages had a party, I'd be the guy in the corner trying to make small talk with JavaScript. It's complicated.
    <br><br>
    I love music so much that even my error messages are set to a catchy tune. It's like debugging with a soundtrack!

  </div>
</template>

<script>
export default {
  name: 'Home',
  template: '<div>SubPage path: {{msg}}</div>',
  data: function() {
    return {
      msg: this.$route.path
    }
  }
};
</script>

<style>
#home {
  font-weight: bold;
}

#main-menu-wrapper {
    display:flex;
    justify-content:center;
    align-items:center;
}

.main-menu {
    margin-top: 20px;
    text-align: left;
}

.main-menu li {
  list-style-type: circle;
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 20px;
  padding: 0;
}
</style>