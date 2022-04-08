<template>
<b-container class="mt-3" fluid>
  <h1>{{ pageTitle }}</h1>
  <ul>
    <li v-for="customer of customers" :key="customer">
      <a href="#" @click.prevent="goTo(customer._id)">{{ customer.name }}</a>
    </li>
  </ul>
</b-container>
</template>

<script>
export default {
    name: 'CustomersPage',

    async fetch({store, error}) {
	try {
	  if (store.getters['customers/customers'].length === 0) {
	    await store.dispatch('customers/fetchCustomers')
	  }
	} catch(e) {
	    error(e)
	}
    },

    data() {
	return {
	    pageTitle: 'customers page'
	}
    },
  
    computed: {
	customers() {
	    return this.$store.getters['customers/customers']
	}
    },

    methods: {
	goTo(customer) {
     this.$router.push('/customers/' + customer)
   }
  }
}
</script>

