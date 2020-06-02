<template>
  <div>
    <b-card
      no-body
      class="shadow-lg login-card"
      style="max-width: 500px;background-color: #EDF0F5;"
    >
      <b-row no-gutters>
        <b-col>
          <b-card-img src="img/loginform.jpg" class="rounded-0"></b-card-img>
        </b-col>
        <b-col>
          <br />
          <b-card-body style="text-align: left;" title="Login">
            <br />
            <label for>E-mail</label>
            <b-form-input placeholder="Enter your email" v-model="email" type="email"></b-form-input>
            <br />
            <label for>Password</label>
            <b-form-input placeholder="Enter your password" v-model="password" type="password"></b-form-input>
            <br />
            <b-button variant="outline-primary" @click="login()">Login</b-button>
            <br />
            <br />
            <router-link style="font-size: 13px; color: #727272;" to="/signup">
              <p>New user?.. create an account</p>
            </router-link>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Login',
  components: { Footer },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'setLoggedUser',
      'setLoginStatus'
    ]),
    login () {
      const loggedinUser = this.getUsers.filter(x => { return x.email === this.email })[0]
      if (loggedinUser === undefined || loggedinUser.password !== this.password) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email or Password Are Wrong'
        })
      } else {
        this.setLoggedUser(loggedinUser)
        this.setLoginStatus(true)
        this.$router.replace('/dashboard')
      }
    }
  },
  computed: {
    ...mapGetters([
      'getBoards',
      'getCurrentBoard',
      'getUsers',
      'getLoggedUser',
      'getLoginStatus'
    ])
  },
  beforeCreate () {
    document.body.className = 'login'
  }
}
</script>

<style scoped>
.login-card {
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
.card {
  border: none;
}
</style>
