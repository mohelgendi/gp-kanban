<template>
  <div>
    <div style="margin: 7%">
      <div class="home-content">
        <b-row>
          <b-col style="color: snow; text-align: left; vertical-align: middle;">
            <h1
              style="font-size: 2.5rem"
            >Kanban lets you work more collaboratively and get more done.</h1>
            <h4
              style="font-size: 2rem"
            >Kanban’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</h4>
            <br>
            <b-button pill variant="outline-info" style="width:45%;font-size:22px;">Start Now</b-button>
          </b-col>
          <b-col>
            <img src="img/team.png" />
          </b-col>
        </b-row>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer'
export default {
  name: 'Home',
  components: { Footer },
  beforeCreate () {
    document.body.className = 'home'
  }
}
</script>

<style scoped>
.btn-outline-info {
    color: #ffffff;
    border: #ffffff 2px solid;
}
.btn-outline-info:hover {
    color: #4964c5;
    background-color: #ffffff;
    border-color: #ffffff;
}
</style>
