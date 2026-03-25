<template>
    <article class="resume active " data-page="resume">
        <header class="mb-4">
            <h2 class="h2 article-title position-relative pb-3 text-uppercase fw-bold">
                Hồ sơ năng lực
                <span class="title-underline"></span>
            </h2>
        </header>

        <section class="timeline mb-5">
            <div class="title-wrapper d-flex align-items-center mb-4">
                <div class="icon-box bg-secondary rounded-3 p-2 me-3 shadow-sm text-warning">
                    <i class="bi bi-book fs-4"></i>
                </div>
                <h3 class="h3 mb-0">Học vấn</h3>
            </div>

            <ol class="timeline-list list-unstyled ps-4 border-start border-secondary border-opacity-25">
                <li class="timeline-item position-relative mb-4">
                    <h4 class="h5 timeline-item-title text-white fw-bold">Trường Cao đẳng FPT Polytechnic</h4>
                    <span class="text-warning small fw-medium">09/2024 — Hiện tại</span>
                    <p class="timeline-text text-secondary mt-2 mb-0">
                        Chuyên ngành: Phát triển Phần mềm .
                    </p>
                    <p class="timeline-text text-secondary mt-1">
                        GPA: 3.6/4.0
                    </p>
                </li>
            </ol>
        </section>

        <section class="timeline mb-5">
            <div class="title-wrapper d-flex align-items-center mb-4">
                <div class="icon-box bg-secondary rounded-3 p-2 me-3 shadow-sm text-warning">
                    <i class="bi bi-briefcase fs-4"></i>
                </div>
                <h3 class="h3 mb-0">Kinh nghiệm & Dự án</h3>
            </div>

            <ol class="timeline-list list-unstyled ps-4 border-start border-secondary border-opacity-25">
                <li v-for="(exp, index) in experiences" :key="index" class="timeline-item position-relative mb-5">
                    <div class="timeline-dot"></div>
                    <h4 class="h5 timeline-item-title text-white fw-bold">{{ exp.title }}</h4>
                    <span class="text-warning small fw-medium">{{ exp.time }}</span>
                    <p class="timeline-text text-secondary mt-2" v-html="exp.description"></p>
                    <div class="skills-tags mt-2">
                        <span v-for="skill in exp.skills" :key="skill"
                            class="badge bg-secondary bg-opacity-25 text-warning me-2 small border border-secondary border-opacity-50">
                            {{ skill }}
                        </span>
                    </div>
                </li>
            </ol>
        </section>

        <section ref="sectionRef" class="skill transition-fade" :class="{ 'visible': isVisible }">
            <h3 class="h3 mb-4">Kỹ năng </h3>

            <div
                class="marquee-wrapper border border-secondary border-opacity-25 rounded-4 bg-secondary bg-opacity-10 py-4">
                <div class="marquee">
                    <div class="marquee-content">
                        <div v-for="item in skills" :key="item" class="skill-card">
                            <span v-html="item"></span>
                        </div>
                        <div v-for="item in skills" :key="item + '-clone'" class="skill-card">
                            <span v-html="item"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const experiences = ref([
{
    title: "Website Đặt Vé Xem Phim",
    time: "02/2026 - 03/2025",
    description: "• Thiết kế và phát triển hệ thống đặt vé xem phim hoàn chỉnh, tập trung vào xử lý logic nghiệp vụ Back-end.<br><br>• Xây dựng hệ thống RESTful API chuẩn hóa để kết nối mượt mà giữa Front-end và cơ sở dữ liệu.<br><br>• Triển khai các chức năng cốt lõi: quản lý phim, suất chiếu, ghế ngồi, đặt vé, khuyến mãi và thanh toán hóa đơn.<br><br>• Thiết kế cơ sở dữ liệu trên SQL Server, tối ưu hóa truy vấn và theo dõi trạng thái vé, lịch chiếu theo thời gian thực."
}
,
     {
        title: "Blog Web",
        time: "11/2025 - 1/2026",
        description: "• Xây dựng nền tảng mạng xã hội kết nối người dùng với các tính năng cốt lõi như đăng bài, bình luận và chia sẻ nội dung.<br><br>• Ứng dụng nền tảng Vue.js để phát triển giao diện ứng dụng trang đơn, mang lại trải nghiệm tương tác mượt mà và tốc độ phản hồi nhanh chóng.<br><br>• Thiết kế và tối ưu hóa cơ sở dữ liệu MySQL, xử lý các luồng dữ liệu phức tạp để tải bảng tin tức thời và quản lý hệ thống theo thời gian thực.",
    },
    {
        title: "Website Bán Giày",
        time: "08/2025 - 11/2025",
        description: "• Thiết kế và phát triển hệ thống quản lý bán giày hoàn chỉnh , tập trung vào xử lý logic nghiệp vụ Back-end .<br><br>• Xây dựng hệ thống RESTful API chuẩn hóa để kết nối mượt mà giữa Front-end và cơ sở dữ liệu.<br><br>• Triển khai các chức năng cốt lõi: Quản lý danh mục sản phẩm (CRUD), giỏ hàng, và quy trình thanh toán hóa đơn.<br><br>• Thiết kế cơ sở dữ liệu trên SQL Server, tối ưu hóa truy vấn và theo dõi trạng thái đơn hàng thời gian thực.",
    },

]);

const skills = [
    '<i class="fa-brands fa-github"></i>',
    '<i class="fa-brands fa-js"></i>',
    '<i class="fa-brands fa-css3-alt"></i>',
    '<i class="fa-brands fa-html5"></i>',
    '<i class="fa-brands fa-vuejs"></i>',
    '<i class="fa-brands fa-java"></i>',
    '<i class="fa-brands fa-bootstrap"></i>',
    '<img src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000" class="spring-icon" />',
    '<img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue"/>'
];

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
    observer = new IntersectionObserver(([ entry ]) => {
        if (entry.isIntersecting) {
            isVisible.value = true;
            if (observer && sectionRef.value) {
                observer.unobserve(sectionRef.value);
            }
        }
    }, { threshold: 0.2 });

    if (sectionRef.value) {
        observer.observe(sectionRef.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<style scoped>
.title-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 5px;
    background: var(--bs-warning, #ffdb70);
    border-radius: 3px;
}

.timeline-list {
    position: relative;
}

.timeline-item::before {
    content: "";
    position: absolute;
    left: -25px;
    top: 5px;
    height: 16px;
    width: 16px;
    background: #1e1e20;
    border: 4px solid var(--bs-warning, #ffdb70);
    border-radius: 50%;
    box-shadow: 0 0 0 4px #2b2b2c;
}

/* --- CSS MỚI CHO MARQUEE SKILLS --- */
.transition-fade {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease-out;
}

.transition-fade.visible {
    opacity: 1;
    transform: translateY(0);
}

.marquee-wrapper {
    overflow: hidden;
    width: 100%;
}

.marquee {
    overflow: hidden;
    width: 100%;
    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

.marquee-content {
    display: inline-flex;
    width: max-content;
    animation: scroll 30s linear infinite;
}

@keyframes scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

.skill-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 24px;
    margin: 0 20px;
    background: #1e1e21;
    border: 1px solid #383838;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    color: #8c8c8c;
    transition: all 0.3s ease;
    cursor: default;
}

.skill-card:hover {
    color: var(--bs-warning, #ffdb70);
    transform: scale(1.1);
    border-color: var(--bs-warning, #ffdb70);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

:deep(i) {
    font-size: 45px;
}

:deep(img) {
    height: 45px;
    width: 45px;
    object-fit: contain;
    filter: grayscale(100%) opacity(0.5);
    transition: 0.3s;
}

.skill-card:hover :deep(img) {
    filter: grayscale(0%) opacity(1);
}
</style>