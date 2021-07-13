<template>
  <div id="app">
    <button
      type="button"
      class="btn"
      @click="showModal"
    >
     Dodaj događaj
    </button>

    <Modal
      v-show="isModalVisible"
      @close="closeModal"
    />

    <div>
      <br> <br>
  <lista />
    </div>
  </div>
</template>

<script>
  import Modal from '@/components/Modal.vue'
  import lista from '@/components/lista.vue'

  export default {
    name: 'App',
    components: {
      Modal,
      lista
    },
    data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  };
</script>