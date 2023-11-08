<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shaddow-header">
    <div class="container-fluid">
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a id="home" class="nav-link" aria-current="page" href="/">
              Quem sou eu
            </a>
          </li>
          <li class="nav-item">
            <a id="cv" class="nav-link" href="/Cv">
              O que faço
            </a>
          </li>
          <li class="nav-item">
            <a id="hobbies" class="nav-link" href="Hobbies">
              Hobbies
            </a>
          </li>
        </ul>
      </div>

      <!-- A minha foto -->
      <img src="../assets/images/photo.jpg"
          alt="Ilídio Martins" class="img-fluid rounded-circle photo">
    </div>
  </nav>
</template>

<style>
.shaddow-header {
  box-shadow: 0px 16px 22px -11px rgba(0, 0, 0, 0.10);
}

.photo {
  width: 40px;
  height: 40px;
  margin-left: auto;
}
</style>