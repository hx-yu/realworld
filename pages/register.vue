<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href>Have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-for="(item,key,index) in errors" :key="index">
              {{key}}:{{item[0]}}
            </li>
          </ul>

          <form @submit.prevent="onRegister">
            <fieldset class="form-group">
              <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name" />
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email" />
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from '@/api/user.js'
export default {
  middleware: 'notAuthenticated',
  name: "RegisterPage",
  asyncData() {
    return {
      user:{
        username: '',
        email: '',
        password: ''
      },
      errors:{}
    }
  },
  data() {
    return {}
  },
  props: {},
  components: {},
  computed: {},
  methods: {
    async onRegister (){
      const user = this.user
      try {
        const { data } = await register({
          user
        })
        this.errors = {}
        this.$router.push('/')
      } catch (err) {
        this.errors = err.response.data.errors
      }
    }
  },
  watch: {},
  created() {},
  mounted() {}
};
</script>

<style lang="" scoped>
</style>