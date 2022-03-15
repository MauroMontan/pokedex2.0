<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="legal"><h2>© Mauro Montaño, 2022</h2></div>

    <div class="networks">
      <i class="fa-brands fa-github"></i>
      <a href="https://github.com/MauroMontan">MauroMontan</a>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  font-size: 2rem;
}
.footer h2 {
  font-size: 1.4rem;
  color: #296052;
}

.footer .networks i {
  text-decoration: none;
  margin-left: 0.3rem;
  font-size: 1.4rem;
  color: #296052;
}
.footer .networks a {
  text-decoration: none;
  margin-left: 0.3rem;
  font-size: 1.4rem;
  color: #296052;
  font-weight: bold;
}

@media (max-width: 768px) {
  .footer h2 {
    font-size: 1rem;
    color: #296052;
  }
  .footer .networks a {
    margin-left: 0.3rem;
    font-size: 1rem;
    color: #296052;
  }
  .footer .networks i {
    font-size: 1.2rem;
  }
}
</style>
