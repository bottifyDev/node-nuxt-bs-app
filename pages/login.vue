<template>
<div class="container">
<hr>
<form @submit.prevent="onSubmit">
   <div class="form-group">
      <input type="email" class="form-control" placeholder="name@example.com">
   </div>
  <div class="form-group">
      <input type="password" class="form-control" placeholder="Password">
  </div>

  <button class="btn btn-success" type="submit">Login</button>


</form>
</div>
</template>

<script>
export default {
  layout: 'empty',
  name: 'LoginPage',
  data() {
    return {
      pageTitle: 'login page'
    }
  }, 
  methods: {
    onSubmit() {
      this.$store.dispatch('login')
      this.$router.push('/')
    }
  }
}
</script>




