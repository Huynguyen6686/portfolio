<template>
  <article class="portfolio active " data-page="portfolio">
    <header class="mb-4">
      <h2 class="h2 article-title position-relative pb-3 text-uppercase fw-bold">
        Sản phẩm dự án
        <span class="title-underline"></span>
      </h2>
    </header>

    <section class="projects">
      <ul class="nav nav-pills mb-4 gap-2">
        <li v-for="category in categories" :key="category" class="nav-item">
          <button 
            :class="['nav-link border-0 text-white transition-all', { 'active text-dark': selectedCategory === category }]"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </li>
      </ul>

      <div class="row g-4">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="index" 
          class="col-md-6 col-lg-4 project-item-wrapper"
        >
          <div class="project-card h-100 bg-secondary bg-opacity-10 rounded-4 overflow-hidden border border-secondary border-opacity-25 shadow-sm">
            <a :href="project.link" target="_blank" class="text-decoration-none">
              <figure class="project-img position-relative m-0 overflow-hidden">
                
                <img :src="project.image" :alt="project.title" class="img-fluid w-100 transition-all">
              </figure>

              <div class="p-3">
                <h3 class="h6 project-title text-white mb-1">{{ project.title }}</h3>
                <p class="project-category text-secondary small mb-0">{{ project.category }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue';
import blogAppImg from '../images/BlogApp.jpg';
import WebgBanGiayImg from '../images/WebBanGiay.jpg';
import WebgDatVeXemPhim from '../images/WebDatVeXemPhim.jpg';


const selectedCategory = ref('Tất cả');

const categories = ['Tất cả', 'Web Development', 'Nghiên cứu'];

const projects = ref([
  {
    title: "Website Bán Giày ",
    category: "Web Development",
    image: WebgBanGiayImg,
    link: "https://github.com/Huynguyen6686/Website_BanGiay"
  },
  {
    title: "BlogWebsite",
    category: "Web Development",
    image:  blogAppImg,
    link: "https://github.com/Huynguyen6686/BlogWebsite"
  },
   {
    title: "Website đặt vé xem phim",
    category: "Web Development",
    image:  WebgDatVeXemPhim,
    link: "https://github.com/Huynguyen6686/DuAnPhim"
  },

]);

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Tất cả') return projects.value;
  return projects.value.filter(p => p.category === selectedCategory.value);
});
</script>

<style scoped>
.title-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 5px;
  background: var(--bs-warning);
}


.project-card:hover {
  transform: translateY(-5px);
  border-color: var(--bs-warning) !important;
}

.project-img img {
  height: 180px;
  object-fit: cover;
}

.project-card:hover .project-img img {
  transform: scale(1.1);
  filter: grayscale(0.5);
}

.project-card:hover .project-item-icon-box {
  opacity: 1 !important;
  z-index: 1;
}

.project-item-icon-box {
  width: 45px;
  height: 45px;
  transition: 0.3s ease;
}

.transition-all {
  transition: all 0.3s ease;
}

.project-item-wrapper {
  animation: scaleUp 0.4s ease-out;
}

@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>