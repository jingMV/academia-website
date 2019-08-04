<template>
  <v-app>

    <v-card flat color="transparent">
   <v-app-bar flat fixed color="transparent" hide-on-scroll>
        <v-app-bar-nav-icon large color="black" @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title style="margin-left: -20px" class="logo"><h2>AC</h2></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-list v-for="item in items" :key="item.Id" class="hidden-sm-and-down" color="transparent">
        <v-btn color="transparent" depressed link><a style="color: black" :href="item.link">{{item.Title}}</a></v-btn>
        </v-list>
    </v-app-bar>
    </v-card>
    <!--DRAWER-->
    <v-navigation-drawer v-model="drawer" fixed temporary class="hidden-md-and-up">

      <v-list-item>
        <v-list-item-content>
        <v-list-item-title>
          <h1>Academia</h1>
        </v-list-item-title>
        <v-list-item-subtitle>
          <small>Find your home in Asia</small>
        </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="item in items" :key="item.Id" link>
        <v-list-item-content>{{item.Title}}</v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    drawer: false,
    items: [
      {Title: 'Home', link: '/'},
      {Title: 'About', link: '#about'},
      {Title: 'Location', link: '#location'},
      {Title: 'Contact', link: '#contact'},
    ]
  }),
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans';
  scroll-behavior: smooth;
}
.logo {
  font-family: 'montserrat'
}
a {
  text-decoration: none;
}
</style>
