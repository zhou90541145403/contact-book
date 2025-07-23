<template>
  <div>
    <h1>Contact Book</h1>
    <input v-model="search" placeholder="Search contacts..." />
    <router-link to="/add" class="btn">Add Contact</router-link>

    <ul>
      <li v-for="contact in filteredContacts" :key="contact.id">
        <router-link :to="`/contact/${contact.id}`">
          {{ contact.lastName }}, {{ contact.firstName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getContacts } from '../utils/storage';

export default {
  data() {
    return { contacts: [], search: '' }
  },
  computed: {
    filteredContacts() {
      return this.contacts
        .filter(c => 
          c.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
          c.lastName.toLowerCase().includes(this.search.toLowerCase())
        )
        .sort((a,b) => a.lastName.localeCompare(b.lastName));
    }
  },
  mounted() {
    this.contacts = getContacts();
  }
}
</script>
