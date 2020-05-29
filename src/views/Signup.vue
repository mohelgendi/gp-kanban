<template>
  <div>
    <b-card no-body class="shadow-lg login-card" style="max-width: 500px;background-color: #EDF0F5;">
      <b-row no-gutters>
        <b-col>
          <b-card-img src="img/signinform.jpg" class="rounded-0"></b-card-img>
        </b-col>
        <b-col>
          <br>
          <b-card-body style="text-align: left;" title="Create an Account">
            <br>
            <label for="">E-mail</label>
            <b-form-input
              placeholder="Enter your email"
              type="email"
            ></b-form-input>
            <br>
            <label for="">Password</label>
            <b-form-input
              placeholder="Enter your password"
              type="password"
            ></b-form-input>
            <br>
            <label for="">Confirm Password</label>
            <b-form-input
              placeholder="Re-enter your password"
              type="password"
            ></b-form-input>
            <br>
            <b-button variant="outline-primary">Sign Up</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'Signup',
  components: { Footer },
  beforeCreate () {
    document.body.className = 'signup'
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
