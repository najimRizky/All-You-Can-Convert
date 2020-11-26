<template>
  <div class="time">
    <v-container>
      <v-row>
        <v-col align="center">
          <h2><v-img src="@/assets/clock.png" transition="scale-transition" max-width="60"/>Time</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field placeholder="Input Here.." width="10px" type="number" clearable v-model="timeAwal"></v-text-field>
        </v-col>
        <v-col>
          <div id="hasil">{{convert() || '...'}}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select id="dari" :items="items1" label="From" solo v-model="dari"></v-select>
        </v-col>
        <v-col>
          <v-select id="ke" :items="items2" label="To" solo v-model="ke"></v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items1: ['Year', 'Month', 'Week', 'Days', 'Hour', 'Minute', 'Second'],
      items2: ['Year', 'Month', 'Week', 'Days', 'Hour', 'Minute', 'Second'],
      timeAwal: '',
      dari: '',
      ke: ''
    }),
    methods: {
      convert: function(){
        let temp;
        temp = parseInt(this.timeAwal);
        return temp;
      }
    }
  }
</script>

<style scoped>
  #hasil{
    margin-top: 24px;
    border-bottom: 1px solid rgb(46, 46, 46);
  }
</style>