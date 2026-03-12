<template>
  <article class="contact active" data-page="contact">
    <header class="mb-4">
      <h2 class="h2 article-title position-relative pb-3 text-uppercase fw-bold">
        Liên hệ
        <span class="title-underline"></span>
      </h2>
    </header>

    <section class="mapbox mb-5 overflow-hidden rounded-4 border border-secondary border-opacity-25 shadow-sm">
      <figure class="m-0" style="filter: invert(90%) hue-rotate(180deg);">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863855881404!2d105.7445984154023!3d21.03813279283544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1679000000000!5m2!1svi!2s"
          width="100%" 
          height="400" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </figure>
    </section>

    <section class="contact-form">
      <h3 class="h3 form-title mb-4">Gửi tin nhắn cho tôi</h3>

      <form @submit.prevent="handleSubmit" class="form">
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <input 
              v-model="formData.fullname"
              type="text" 
              class="form-control custom-input p-3" 
              placeholder="Họ và tên" 
              required
            >
          </div>

          <div class="col-md-6">
            <input 
              v-model="formData.email"
              type="email" 
              class="form-control custom-input p-3" 
              placeholder="Địa chỉ Email" 
              required
            >
          </div>
        </div>

        <div class="mb-4">
          <textarea 
            v-model="formData.message"
            class="form-control custom-input p-3" 
            placeholder="Nội dung tin nhắn..." 
            rows="5"
            required
          ></textarea>
        </div>

        <div class="d-flex justify-content-end">
          <button 
            class="btn-submit d-flex align-items-center justify-content-center gap-2 px-4 py-3 fw-medium rounded-3" 
            type="submit"
            :disabled="isSubmitting"
          >
            <i :class="['bi', isSubmitting ? 'bi-hourglass-split' : 'bi-send']"></i>
            <span>{{ isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn' }}</span>
          </button>
        </div>
      </form>
    </section>

    <div v-if="showSuccess" class="alert-success-custom mt-4 d-flex align-items-center p-3 rounded-3">
      <i class="bi bi-check-circle-fill me-2 fs-5"></i>
      <div>Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.</div>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue';

const isSubmitting = ref(false);
const showSuccess = ref(false);

const formData = ref({
  fullname: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  isSubmitting.value = true;
  
  setTimeout(() => {
    console.log('Dữ liệu gửi đi:', formData.value);
    isSubmitting.value = false;
    showSuccess.value = true;
    
    formData.value = { fullname: '', email: '', message: '' };
    
    setTimeout(() => { showSuccess.value = false; }, 5000);
  }, 1500);
};
</script>

<style scoped>
.title-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 5px;
  background: #ffdb70; 
  border-radius: 3px;
}

.custom-input {
  background: #1e1e21; 
  border: 1px solid #383838;
  color: #fafafa;
  font-size: 15px;
  border-radius: 12px;
  transition: border-color 0.3s ease;
}

.custom-input::placeholder {
  color: #a0a0a0;
  font-weight: 400;
}

.custom-input:focus {
  background: #1e1e21;
  border-color: #ffdb70; 
  box-shadow: none; 
  color: white;
}

.btn-submit {
  position: relative;
  background: linear-gradient(to bottom right, #3f3f40 0%, rgba(63, 63, 64, 0) 50%);
  color: #ffdb70;
  border: 1px solid #383838;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 1;
}

.btn-submit::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: #202022;
  border-radius: inherit;
  z-index: -1;
  transition: all 0.3s ease;
}

.btn-submit:hover {
  background: linear-gradient(to bottom right, #f4d068 0%, rgba(244, 208, 104, 0) 50%);
  border-color: transparent;
}

.btn-submit:hover::before {
  background: linear-gradient(135deg, rgba(244, 208, 104, 0.25) 0%, rgba(244, 208, 104, 0) 59.86%), #202022;
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* --- Tùy chỉnh Thông báo thành công --- */
.alert-success-custom {
  background: rgba(40, 167, 69, 0.1);
  border: 1px solid rgba(40, 167, 69, 0.3);
  color: #4dd969;
  animation: slideIn 0.5s ease forwards;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>