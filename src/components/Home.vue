<template>
    <div id="main-menu-wrapper">
        <div>      
            <ul class="main-menu">
                <li><router-link to="/Me">Quem sou eu</router-link></li>
                <li><router-link to="/Cv">O que faço</router-link></li>
                <li><router-link to="/Hobbies">Hobbies</router-link></li>
            </ul>     
        </div>
    </div>
</template>


<style>
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