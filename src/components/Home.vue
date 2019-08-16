<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title text-center>{{titulo}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content text-center class="ion-padding">
      <h1>{{mensaje}}</h1>      
      <ion-item>
        <ion-label position="floating">Correo*</ion-label>
        <ion-input autofocus="true"  clear-input="true" type="email" id="cuenta" name="cuenta" required="true">{{cuenta}}</ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Contrase&ntilde;a*</ion-label>
        <ion-input clear-on-edit="true" type="password" id="password" name="password" required="true">{{pass}}</ion-input>
      </ion-item>
      <ion-button expand="block" color="primary" @click="loginBtn">Acceder</ion-button>
      <ion-button disabled=true expand="block" color="light" href='/login'>Desactivado</ion-button>
      <img alt="Vue logo" src="../assets/logo.png">
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){ return {
      titulo: 'SalesUp! Forms',
      mensaje: 'Bienvenido!',
      cuenta: '',
      pass: ''
    }    
  },
  created(){
    // eslint-disable-next-line
    console.log(this.cuenta, this.pass);
  },
  methods: {
    loginBtn () {
      var nptCuenta = '',
          nptPass = '';
          
      nptCuenta = document.getElementById('cuenta');
      nptPass = document.getElementById('password');

      // eslint-disable-next-line
      console.log({
        cuenta: nptCuenta.value,
        pass: nptPass.value
      });
    }
  }
};
</script>

