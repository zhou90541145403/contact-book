<template>
  <div>
    <h2>Add Contact</h2>
    <form @submit.prevent="add">
      <input v-model="firstName" placeholder="First Name" required />
      <input v-model="lastName" placeholder="Last Name" required />
      <input v-model="email" placeholder="Email" required />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import { addContact } from '../utils/storage';

export default {
  data() {
    return { firstName: '', lastName: '', email: '' }
  },
  methods: {
    add() {
      const newContact = {
        id: Date.now().toString(),
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      };
      addContact(newContact);
      this.$router.push(`/contact/${newContact.id}`);
    }
  }
}
</script>
