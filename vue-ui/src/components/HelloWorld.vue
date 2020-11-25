<template>
  <div class="hello">
    <h1>Welcome</h1>
    <h3>User info</h3>
    <ul>
      <li>Name: {{ user_name }}</li>
    </ul>
    <ul>
      <li>Last Name: {{ last_name }}</li>
    </ul>
    <ul>
      <li>Roles: {{ roles }}</li>
    </ul>
    <button @click="logoutFn" v-if="authenticated">Log out</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  computed: {
    user_name: function (){
      return this.$store.state.user.name;
    },
    last_name: function (){
      return this.$store.state.user.lastName;
    },
    roles: function (){
      return this.$store.state.user.roles;
    },
    authenticated: function(){
      return this.$store.state.user.isAuthenticated;
    },
    
  },
  methods: {
    logoutFn: function (event){
      console.log('Logout', event);
      const keycloak = this.$store.state.kc;
      keycloak.logout();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
