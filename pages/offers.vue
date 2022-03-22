<template>
<b-container class="mt-3" fluid>
 <h1>{{ pageTitle }}</h1>
 <b-table
    :busy="isBusy"
    :items="offers"
    :fields="fields" small>
   <template #table-busy>
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>loading...</strong>
      </div>
   </template>
   <template #cell(index)="data">
      {{ data.index + 1 }}
   </template>
   <template #cell(url)="data">
      <code>{{ data.value }}</code>
   </template>
 </b-table>
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
      isBusy: false,
      loading: false,
      fields: [
        'index',
        'id',
        {key: 'title', label: 'Title'},
        {key: 'cta', label: 'Call to action'},
        {key: 'url', label: 'URL'}
      ],
      pageTitle: 'offers page'
    }
  }
}
</script>

