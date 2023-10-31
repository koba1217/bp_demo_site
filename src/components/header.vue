<template>
  <div>
    <v-app-bar fixed color="grey lighten-5">
      <v-app-bar-nav-icon　@click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Header</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="(menuItem, index) in menuItems" :key=index>
            <v-list-icon>
              <v-icon>{{menuItem.icon}}</v-icon>
            </v-list-icon>
            <v-list-title>
              <a>{{menuItem.name}}</a>
            </v-list-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: "App",
    data: () => {
      drawer: false,
      menuItems: [
        {
          icon: "mdi-home",
          name: "home",
          link: "/",
        },
      ] 
    } 
  } 
</script>