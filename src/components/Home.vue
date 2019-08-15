<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title text-center>SalesUp! Forms</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content text-center class="ion-padding">
      <h1 >Bienvenido!</h1>
      
      <ion-item>
        <ion-label position="floating">Correo*</ion-label>
        <ion-input autofocus="true"  clear-input="true" type="email" name="account" required="true"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Contrase&ntilde;a*</ion-label>
        <ion-input clear-on-edit="true" type="password" name="password" required="true"></ion-input>
      </ion-item>
      <ion-button expand="block" color="primary" @click="loginFunc">Acceder</ion-button>
      <ion-button disabled=true expand="block" color="light" href='/login'>Desactivado</ion-button>
      <img alt="Vue logo" src="../assets/logo.png">
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    loginFunc () {
      //console.log('prueba');
    }
  }
};
</script>

