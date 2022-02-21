<template>
<div>
  <li v-for="user in users" :key=user.id> {{user.name}} </li>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    users: [{'id': 1, 'name': 'ben'}, {'id': 2, 'name': 'bot'}]
  }),
  methods: {
    goTo(user) {
      this.$router.push('/users' + user)
    }
  }

}
</script>
