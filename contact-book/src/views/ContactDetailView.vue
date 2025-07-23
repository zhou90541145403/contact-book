<template>
  <div v-if="contact">
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p>Email: {{ contact.email }}</p>
    <router-link :to="`/edit/${contact.id}`" class="btn">Edit</router-link>
    <button @click="deleteContact" class="btn">Delete</button>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import { getContactById, deleteContact } from '../utils/storage';

export default {
  props: ['id'],
  data() {
    return { contact: null }
  },
  mounted() {
    this.contact = getContactById(this.id);
  },
  methods: {
    deleteContact() {
      deleteContact(this.id);
      this.$router.push('/');
    }
  }
}
</script>
