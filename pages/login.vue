<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <a href>Have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-for="(item,key,index) in errors" :key="index">
              {{key}}:{{item[0]}}
            </li>
          </ul>

          <form @submit.prevent="onLogin">
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email" />
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
const Cookie = process.client ? require('js-cookie'):undefined
export default {
  middleware: 'notAuthenticated',
  name: "LoginPage",
  asyncData() {
    return {
      user:{
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
    async onLogin(){
      const user = this.user
      try {
        const { data } = await login({
          user
        })
        this.$store.commit('setUser',data.user)
        this.errors = {}
        Cookie.set('user',data.user)
        this.$router.replace('/') 
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