<template>
  <v-app>
    <v-app-bar
      app
      color="#37b088"
      dark
    >
      <div class="d-flex align-center" style="padding-top: 20px">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/science.png"
          transition="scale-transition"
          width="70"
        />
        
        <h2>All You Can Convert</h2>
      </div>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/temperature">Temperature</v-tab>
          <v-tab to="/length">Length</v-tab>
          <v-tab to="/weight">Weight</v-tab>
          <v-tab to="/time">Time</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
    <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {

  }
};
</script>
