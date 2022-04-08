// State // 
export const state = () => ({
    customers: []
})

// Mutations
export const mutations = {
    setCustomers(state, customers) {
        state.customers = customers
    }
}

// Actions
export const actions = {
    async fetchCustomers({commit}) {
      try {
        const customers = await this.$axios.$get('/customers')
        commit('setCustomers', customers)
      } catch (e) {
        throw e
      }
    },
    
    async fetchCustomerById({},customerId) {
      return await this.$axios.$get(`/customers/${customerId}`)
    },
    async deleteCustomer({}, customerId) {
      return await this.$axios.$delete(`/customers/${customerId}`)
    }
}

// Getters 
export const getters = {
    customers: state => state.customers
}




