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
        <span class="fas fa-bars"></span>
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
      <img
          src="https://lh3.googleusercontent.com/-V7jCih42Izg/AAAAAAAAAAI/AAAAAAAAAAA/AML38-tcalWQmGK1jRtzSsd1YVgjquWUZA/photo.jpg?sz=46"
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