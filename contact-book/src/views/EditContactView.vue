<template>
  <div>
    <h2>Edit Contact</h2>
    <form @submit.prevent="update">
      <input v-model="firstName" required />
      <input v-model="lastName" required />
      <input v-model="email" required />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import { getContactById, updateContact } from '../utils/storage';

export default {
  props: ['id'],
  data() {
    return { firstName: '', lastName: '', email: '' }
  },
  mounted() {
    const contact = getContactById(this.id);
    if (contact) {
      this.firstName = contact.firstName;
      this.lastName = contact.lastName;
      this.email = contact.email;
    }
  },
  methods: {
    update() {
      updateContact({
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      });
      this.$router.push(`/contact/${this.id}`);
    }
  }
}
</script>
