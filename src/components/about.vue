<template>
  <article class="about active " data-page="about">
    <header class="mb-4">
      <h2 class="h2 article-title position-relative pb-3 text-uppercase fw-bold">
        Giới thiệu
        <span class="title-underline"></span>
      </h2>
    </header>

    <section class="about-text mb-5">
      <p class="text-secondary lh-lg">
        Tôi là một lập trình viên <strong class="text-warning">Back-End Development</strong>, hiện đang theo học tại 
        <strong class="text-white">FPT Polytechnic</strong>. Với nền tảng vững chắc về phát triển phần mềm, tôi có kinh nghiệm thực chiến trong việc xây dựng các ứng dụng Web và nền tảng mạng xã hội tương tác cao.
      </p>
    </section>

    <section class="competencies mb-5">
      <h3 class="h4 article-title mb-4">Năng lực cốt lõi</h3>
      <div class="row g-4">
        <div v-for="skill in coreSkills" :key="skill.title" class="col-md-6">
          <div class="skill-card p-3 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 h-100">
            <h4 class="h5 text-warning mb-2">{{ skill.title }}</h4>
            <p class="small text-secondary mb-0">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="projects">
      <h3 class="h4 article-title mb-4">Dự án & Đóng góp tiêu biểu</h3>
      <ul class="list-unstyled">
        <li v-for="project in keyProjects" :key="project.name" class="mb-4 position-relative ps-4 project-item">
          <h4 class="h5 text-white mb-1">{{ project.name }}</h4>
          <p class="text-secondary small mb-0">{{ project.description }}</p>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue';

const coreSkills = ref([
  { 
    title: "Phát triển Web", 
    description: "Thành thạo Framework Vue.js để xây dựng giao diện người dùng (Frontend) sinh động và hiệu quả." 
  },
  { 
    title: "Phát triển Backend", 
    description: "Có kinh nghiệm triển khai hệ thống với Java Spring Boot, xử lý logic nghiệp vụ và xây dựng RESTful APIs." 
  },
  { 
    title: "Quản trị cơ sở dữ liệu", 
    description: "Sử dụng thành thạo SQL Server và MySql để thiết kế và tối ưu hóa cấu trúc dữ liệu." 
  },
  { 
    title: "Công cụ & Quy trình", 
    description: "Sử dụng Git (GitHub) để quản lý mã nguồn và có tư duy tốt về cấu trúc dữ liệu, giải thuật." 
  }
]);

const keyProjects = ref([
 { 
    name: "Website đặt vé xem phim", 
    description: "Nền tảng đặt vé xem phim trực tuyến với chức năng chọn phim, suất chiếu, ghế ngồi, thanh toán và quản trị rạp." 
  },
     { 
    name: "Blog App", 
    description: "Xây dựng nền tảng tương tác trực tuyến sử dụng Vue.js và MySQL. Tối ưu hóa cấu trúc dữ liệu và API để xử lý mượt mà các tính năng cốt lõi như đăng bài, bình luận, thả tim, đảm bảo tốc độ phản hồi nhanh và tính ổn định của hệ thống." 
  },
  { 
    name: "Website Bán Giày ", 
    description: "Phát triển phần mềm bán hàng trực tuyến. Chịu trách nhiệm thiết kế cơ sở dữ liệu SQL Server, xây dựng RESTful APIs bằng Java Spring Boot để xử lý logic nghiệp vụ, quản lý giỏ hàng, hóa đơn và theo dõi tồn kho theo thời gian thực." 
  }

]);
</script>

<style scoped>
.article-title {
  color: var(--bs-white);
}

.title-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 5px;
  background: var(--bs-warning);
  border-radius: 3px;
}

.skill-card {
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
}

.project-item::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--bs-warning);
  font-size: 1.5rem;
  line-height: 1;
}


@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>