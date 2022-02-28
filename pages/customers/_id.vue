<template>
<div><h1>{{ customer.name }}</h1></div>
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

  }
}
</script>
