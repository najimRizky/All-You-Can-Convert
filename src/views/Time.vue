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
      items1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
      items2: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
      timeAwal: '',
      dari: '',
      ke: ''
    }),
    methods: {
      convert: function(){
        let temp;
        if(this.dari == this.ke) temp = parseInt(this.timeAwal);
        else if(this.dari == 'Year'){
          if (this.ke == 'Month') temp = parseInt(this.timeAwal) * 12;
          else if (this.ke == 'Week') temp = parseInt(this.timeAwal) * 52.143;
          else if (this.ke == 'Day') temp = parseInt(this.timeAwal) * 365;
          else if (this.ke == 'Hour') temp = parseInt(this.timeAwal) * 8760;
          else if (this.ke == 'Minute') temp = parseInt(this.timeAwal) * 525600;
          else if (this.ke == 'Second') temp = parseInt(this.timeAwal) * 3.154e+7;
        }
        else if(this.dari == 'Month'){
          if (this.ke == 'Year') temp = parseInt(this.timeAwal) / 12;
          else if (this.ke == 'Week') temp = parseInt(this.timeAwal) * 4.345;
          else if (this.ke == 'Day') temp = parseInt(this.timeAwal) * 30.417;
          else if (this.ke == 'Hour') temp = parseInt(this.timeAwal) * 730;
          else if (this.ke == 'Minute') temp = parseInt(this.timeAwal) * 43800;
          else if (this.ke == 'Second') temp = parseInt(this.timeAwal) * 2.628e+6;
        }
        else if(this.dari == 'Week'){
          if (this.ke == 'Year') temp = parseInt(this.timeAwal) / 52.143;
          else if (this.ke == 'Month') temp = parseInt(this.timeAwal) / 4.345;
          else if (this.ke == 'Day') temp = parseInt(this.timeAwal) * 7;
          else if (this.ke == 'Hour') temp = parseInt(this.timeAwal) * 168;
          else if (this.ke == 'Minute') temp = parseInt(this.timeAwal) * 10080;
          else if (this.ke == 'Second') temp = parseInt(this.timeAwal) * 604800;
        }
        else if(this.dari == 'Day'){
          if (this.ke == 'Year') temp = parseInt(this.timeAwal) / 365;
          else if (this.ke == 'Month') temp = parseInt(this.timeAwal) / 30.417;
          else if (this.ke == 'Week') temp = parseInt(this.timeAwal) / 7;
          else if (this.ke == 'Hour') temp = parseInt(this.timeAwal) * 24;
          else if (this.ke == 'Minute') temp = parseInt(this.timeAwal) * 1440;
          else if (this.ke == 'Second') temp = parseInt(this.timeAwal) * 86400;
        }
        else if(this.dari == 'Hour'){
          if (this.ke == 'Year') temp = parseInt(this.timeAwal) / 8760;
          else if (this.ke == 'Month') temp = parseInt(this.timeAwal) / 730;
          else if (this.ke == 'Week') temp = parseInt(this.timeAwal) / 168;
          else if (this.ke == 'Day') temp = parseInt(this.timeAwal) / 24;
          else if (this.ke == 'Minute') temp = parseInt(this.timeAwal) * 60;
          else if (this.ke == 'Second') temp = parseInt(this.timeAwal) * 3600;
        }
        else if(this.dari == 'Minute'){
          if (this.ke == 'Year') temp = parseInt(this.timeAwal) / 525600;
          else if (this.ke == 'Month') temp = parseInt(this.timeAwal) / 43800;
          else if (this.ke == 'Week') temp = parseInt(this.timeAwal) / 10080;
          else if (this.ke == 'Day') temp = parseInt(this.timeAwal) / 1440;
          else if (this.ke == 'Hour') temp = parseInt(this.timeAwal) / 60;
          else if (this.ke == 'Second') temp = parseInt(this.timeAwal) * 60;
        }
        else if(this.dari == 'Second'){
          if (this.ke == 'Year') temp = parseInt(this.timeAwal) / 3.154e+7;
          else if (this.ke == 'Month') temp = parseInt(this.timeAwal) / 2.628e+6;
          else if (this.ke == 'Week') temp = parseInt(this.timeAwal) / 604800;
          else if (this.ke == 'Day') temp = parseInt(this.timeAwal) / 86400;
          else if (this.ke == 'Hour') temp = parseInt(this.timeAwal) / 3600;
          else if (this.ke == 'Minute') temp = parseInt(this.timeAwal) / 60;
        }
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