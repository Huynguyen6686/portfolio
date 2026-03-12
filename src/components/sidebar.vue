<template>
  <aside class="sidebar" data-sidebar>
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img :src="profile.avatar" :alt="profile.name">
      </figure>

      <div class="info-content">
        <h1 class="name" :title="profile.name">{{ profile.name }}</h1>
        <p class="title">{{ profile.title }}</p>
      </div>
      
      </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li v-for="(contact, index) in contacts" :key="index" class="contact-item">
          <div class="icon-box">
            <i :class="['bi', contact.icon]"></i>
          </div>

          <div class="contact-info">
            <p class="contact-title">{{ contact.label }}</p>
            
            <a v-if="contact.type === 'link'" :href="contact.href" class="contact-link text-break">
              {{ contact.value }}
            </a>
            <time v-else-if="contact.type === 'time'" :datetime="contact.datetime">
              {{ contact.value }}
            </time>
            <address v-else-if="contact.type === 'address'">
              {{ contact.value }}
            </address>
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list list-unstyled justify-content-center">
        <li v-for="social in socials" :key="social.name" class="social-item">
          <a :href="social.url" target="_blank" class="social-link">
            <i :class="['bi', social.icon]"></i>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import myAvatar from '../images/NguyenQuocHuy.jpg';

const profile = ref({
  name: "Nguyễn Quốc Huy",
  title: "Back-end Developer",
  avatar: myAvatar 
});

const contacts = ref([
  { label: "Email", value: "nguyenquochuy8606@gmail.com", href: "mailto:nguyenquochuy8606@gmail.com", icon: "bi-envelope", type: "link" },
  { label: "Phone", value: "0965852782", href: "tel:0965852782", icon: "bi-phone", type: "link" },
  { label: "Ngày sinh", value: "08-06-2006", datetime: "2006-06-08", icon: "bi-calendar3", type: "time" },
  { label: "Địa chỉ", value: "Nam Từ Liêm, Hà Nội", icon: "bi-geo-alt", type: "address" }
]);

const socials = ref([
  { name: "Github", url: "https://github.com/Huynguyen6686", icon: "bi-github" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/nguy%E1%BB%85n-qu%E1%BB%91c-huy-b979533b6/", icon: "bi-linkedin" }
]);
</script>

<style scoped>
/* --- PHẦN CẤU TRÚC CHÍNH --- */
.sidebar {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
  box-shadow: var(--shadow-1);
  z-index: 1;
  margin-bottom: 15px;
  max-height: max-content; 
  overflow: visible;
  transition: var(--transition-2);
}

.sidebar-info {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
}

.avatar-box {
  background: var(--bg-gradient-onyx);
  border-radius: 30px;
  position: relative;
  border: 1px solid var(--jet); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  overflow: hidden; 
  flex-shrink: 0;
}

.avatar-box img {
  display: block;
  width: 80px; 
  height: auto;
  transition: transform 0.3s ease;
}

.info-content .name {
  color: var(--white-2);
  font-size: var(--fs-3);
  font-weight: var(--fw-500);
  margin-bottom: 10px;
}

.info-content .title {
  color: var(--white-1);
  background: var(--onyx);
  font-size: var(--fs-8);
  padding: 3px 12px;
  border-radius: 8px;
  width: max-content;
}

.sidebar-info_more {
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
}

.separator {
  width: 100%;
  height: 1px;
  background: var(--jet);
  margin: 16px 0;
}

.contacts-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon-box {
  color: var(--orange-yellow-crayola);
  background: var(--border-gradient-onyx);
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 16px;
}

.contact-title {
  color: var(--light-gray-70);
  font-size: var(--fs-8);
  text-transform: uppercase;
  margin-bottom: 2px;
}

.contact-info :is(.contact-link, time, address) {
  color: var(--white-2);
  font-size: var(--fs-7);
  text-decoration: none;
}

.social-list {
  display: flex;
  justify-content: flex-start;
  gap: 15px;
}

.social-link {
  color: var(--light-gray-70);
  font-size: 20px;
  transition: 0.3s;
}

.social-link:hover { color: var(--orange-yellow-crayola); }

@media (max-width: 991px) {
  .sidebar {
    padding: 30px 15px;
    max-height: max-content !important;
  }

  .sidebar-info {
    flex-direction: column;
    text-align: center;
  }

  .avatar-box {
    width: 150px !important;
    height: 150px !important;
    border-radius: 30px; 
    margin-bottom: 15px;
  }

  .avatar-box img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }

  .info-content .title {
    margin: 0 auto;
  }
}

@media (min-width: 1250px) {
  .sidebar {
    position: sticky;
    top: 60px;
    padding-top: 60px;
  }
  .sidebar-info { flex-direction: column; }
  .avatar-box img { width: 150px; }
  .info-content .name { text-align: center; white-space: nowrap; }
  .info-content .title { margin: auto; }
  .social-list { justify-content: center; }
}
</style>