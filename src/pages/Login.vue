<template>
    <v-app>
      <v-card class="mx-auto">
        <v-card-title>
            <p>{{title}}</p>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field prepend-icon="mdi-account-circle" label="メールアドレス" />
                <v-text-field v-bind:type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" prepend-icon="mdi-lock" append-icon="mdi-eye-off" label="パスワード" />
                <v-card-actions>
                    <v-btn class="info" variant="outlined">ログイン</v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
      </v-card>
    </v-app>
</template>

 <script>
 export default {
   name: "App",
 
   data: () => ({
    title: "メールアドレス、パスワードを入力してください。",
    showPassword: false,
    home: {
      icon: "mdi-home",
    },
   }),
 };
 </script>