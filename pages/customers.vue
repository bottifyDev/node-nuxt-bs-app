<template>
<b-container class="mt-3" fluid>
  <h1>{{ pageTitle }}</h1>
  <b-table striped hover small responsive="lg" :items="customers" :fields="fields"></b-table>
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
      fields: ['id', 'uid', 'name', 'balance', 'banned', 'balance'],
      pageTitle: 'customers page'
    }
  }
}
</script>

