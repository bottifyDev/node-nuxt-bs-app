<template>
<b-container class="mt-3" fluid>
  <h1>{{ pageTitle }}</h1>
  <ul>
    <li v-for="customer of customers" :key="customer">
      <a href="#" @click.prevent="goTo(customer.id)">{{ customer.name }}</a>
    </li>
  </ul>

</b-container>
</template>

<script>
export default {
  name: 'CustomersPage',
  async asyncData({store, error}) {

    try {
      const customers = await store.dispatch('customers/fetchCustomers')
      return { customers }

    } catch(e) {
      error(e)
    }

  },
  data() {
    return {
      loading: false,
      fields: ['id', 'telegram_id', 'name', 'balance', 'banned', 'balance'],
      pageTitle: 'customers page'
    }
  },
  methods: {
   goTo(customer) {
     this.$router.push('/customers/' + customer)
   }
  }
}
</script>

