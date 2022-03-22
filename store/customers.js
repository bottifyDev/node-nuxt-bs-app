export const state = () => ({
    customers: []
})

export const actions = {
  async fetchCustomers() {
    try {
      const customers = await this.$axios.$get('/customers')
      return customers
    } catch (e) {
      throw e
    }
  },
  async fetchCustomerById({},customerId) {
    return await this.$axios.$get(`customers/${customerId}`)
  },
  async deleteCustomer({}, customerId) {
    return await this.$axios.$delete(`customers/${customerId}`)
  }
}



