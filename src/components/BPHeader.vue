 <template>
   <v-app>
    <v-app-bar color="blue-darken-3">
      <template v-slot:title>
        <v-app-bar-title class="text-h4">{{ title }}</v-app-bar-title>
      </template>
    </v-app-bar>
   </v-app>
 </template>
 
 <script>
 export default {
   name: "App",
 
   data: () => ({
    title: "BLUE Plastics",
    home: {
      icon: "mdi-home",
    },
   }),
 };
 </script>
