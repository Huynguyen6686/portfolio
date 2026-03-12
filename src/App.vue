<script setup>
import Navbar from './components/navbar.vue';
import Sidebar from './components/sidebar.vue';
</script>

<template>
  <div class="container py-5">
    <div class="row g-4">
      
      <div class="col-lg-3 col-xl-4">
        <div class="sticky-top" style="top: 2rem; z-index: 10;">
          <Sidebar />
        </div>
      </div>

      <div class="col-lg-9 col-xl-8">
        <div class="main-content w-100 position-relative">
          
          <Navbar />
          
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
          
        </div>
      </div>
      
    </div>
  </div>
</template>

<style>
/* HIỆU ỨNG CHUYỂN TRANG */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

body {
  background-color: #121212;
  color: white;
}

article {
  background: var(--eerie-black-2); 
  border: 1px solid var(--jet);    
  border-radius: 20px;           
  padding: 30px;              
  box-shadow: var(--shadow-1);      
  z-index: 1;
  width: 100% !important;       
  min-height: 100%;               
}

@media (max-width: 991px) {
  article {
    padding: 15px; 
  }
  
  .main-content {
    padding-bottom: 90px !important; 
    overflow: visible !important; 
    transform: none !important;
  }
}
</style>