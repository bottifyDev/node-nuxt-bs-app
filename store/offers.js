export const actions = {

  async fetchOffers() {
    try {
      const offers = await this.$axios.$get('/offers')
      return offers
    } catch (e) {
      throw e
    }
  },

  async fetchOfferById({}, offerId) {
    return await this.$axios.$get('offers/${offerId}')
  }
}



