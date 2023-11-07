<template>
  <v-card class="mx-auto my-auto">
    <v-card-text>
      <p class="caption mb-4">{{title}}</p>
      <v-form>
        <v-text-field prepend-icon="mdi-account-circle" v-model="name" label="メールアドレス" />
        <v-text-field v-bind:type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" prepend-icon="mdi-lock" append-icon="mdi-eye-off" v-model="password" label="パスワード" />
        <v-card-actions>
          <v-btn class="mx-auto my-auto" color="blue-darken-3" variant="flat" @click="submit">ログイン</v-btn>
          <v-btn class="mx-auto my-auto" color="blue-darken-3" variant="outlined">クリア</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
 export default {
   name: "App",

   data: () => ({
    title: "メールアドレス、パスワードを入力してください。",
    showPassword: false,
    name:'',
    password:'',
    home: {
      icon: "mdi-home",
    },
   }),
   methods:{submit(){alert(this.name+","+this.password) } },
 };
</script>