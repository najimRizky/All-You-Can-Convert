<template>
  <div class="home">
    <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
    <v-container gutter="40px">
      <v-row>
        <v-col cols="12" align="center">
          <v-img
          src="@/assets/science2.png"
          transition="scale-transition"
          contain
          max-width="200"
          />
        </v-col>
        <v-col cols="12" align="center">
          <h2>Welcome!</h2> 
          <p>
            <b>All You Can Convert</b> is an online conversion tool. It's very simple, easy, and fast.
          </p>
          <p>Choose what do you want to convert: </p>
        </v-col>
      </v-row>
      <v-row >
        <v-col  align="center">
          <v-btn elevation="6" width="300px" height="50px" to="/temperature" dark color="#b03749"> <v-img src="@/assets/suhu.png" max-width="30" /> Convert Temperature</v-btn>
        </v-col>
        <v-col  align="center">
          <v-btn elevation="6" width="300px" height="50px" to="/speed" dark color="#34ad2b"> <v-img src="@/assets/speedo.png" max-width="30" />Convert Speed</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col  align="center">
          <v-btn elevation="6" width="300px" height="50px" to="/weight" dark color="#3745b0"> <v-img src="@/assets/berat.png" max-width="30" />Convert Weight</v-btn>
        </v-col>
        <v-col  align="center">
          <v-btn elevation="6" width="300px" height="50px" to="/time" dark color="#bdad00"> <v-img src="@/assets/clock.png" max-width="30" />Convert Time</v-btn>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  /*components: {
    HelloWorld
  }*/
}
</script>

<style  scoped>
  .container{
    justify-content: center;
  }
</style>
