<!-- Offers page -->

<b-container class="mt-3" fluid>
 <h1>{{ pageTitle }}</h1>
 <OffersList/>
 <b-table striped hover small responsive="lg" :items="offers" :fields="fields"></b-table>
</b-container>
</template>

<script>
export default {
  name: 'OffersPage',
  async asyncData({store, error}) {

    try {
      const offers = await store.dispatch('offers/fetchOffers')
      return { offers }

    } catch(e) {
      error(e)
    }

  },
  data() {
    return {
      loading: false,
      fields: ['id', 'title', 'cta', 'url'],
      pageTitle: 'offers page'
    }
  }
}
</script>

