<template>
<div><h1>{{ customer.name }}</h1>
<b-button @click.prevent="deleteCustomer(customer.id)">delete</b-button>
</div>
</template>

<script>
export default {
  validate({params}) {
    return true
  },
  async asyncData({params, error, store}) {
    try {
      const customer = await store.dispatch('customers/fetchCustomerById', params.id)
      return { customer }

    } catch(e) {
      error(e)
    }
  },
  methods: {
    async deleteCustomer(customer) {
      await this.$store.dispatch('customers/deleteCustomer', customer)
    }
  }
}
</script>
