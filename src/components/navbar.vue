<template>
  <nav class="navbar">
    <div class="container-fluid justify-content-center p-0">
      <ul class="navbar-nav flex-row gap-2 gap-md-4">
        <li class="nav-item">
          <router-link to="/" class="nav-link border-0 fw-medium">Giới thiệu</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/resume" class="nav-link border-0 fw-medium">Hồ sơ</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/portfolio" class="nav-link border-0 fw-medium">Dự án</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link border-0 fw-medium">Liên hệ</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  right: 0;
  background: #1e1e21; 
  border-bottom: 1px solid #383838;
  border-left: 1px solid #383838;
  border-top: none;
  border-right: none;
  border-radius: 0 20px 0 20px;
  padding: 10px 30px;
  width: auto;
  min-width: max-content;
  z-index: 10;
}

.navbar-nav {
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #d6d6d6;
  text-decoration: none;
  font-size: 15px;
  padding: 10px 0;
  transition: 0.3s;
}

.nav-link:hover {
  color: #fafafa;
}

.router-link-active,
.router-link-exact-active {
  color: #ffdb70 !important; 
  font-weight: 600;
}

@media (max-width: 991px) {
  .navbar {
    position: fixed !important;
    bottom: 0 !important;
    top: auto !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    min-width: 100% !important; 
    margin: 0 !important;
    border-radius: 20px 20px 0 0 !important;
    z-index: 9999 !important; 
    background: rgba(30, 30, 33, 0.95) !important;
    backdrop-filter: blur(10px) !important;
    padding: 15px 0 !important;
    box-shadow: 0 -5px 20px rgba(0,0,0,0.3);
  }

  .navbar-nav {
    width: 100% !important;
    display: flex !important;
    flex-direction: row !important; 
    justify-content: space-evenly !important;
    gap: 0 !important;
  }

  .nav-link {
    color: #d6d6d6;
    font-size: 13px !important; 
    font-weight: 500;
    padding: 10px !important;
    white-space: nowrap !important;
    display: block;
  }

  .navbar-nav .nav-item .router-link-active,
  .navbar-nav .nav-item .router-link-exact-active {
    color: #ffdb70 !important;
  }
}
</style>