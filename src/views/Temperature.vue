<template>
  <div class="temperature">
    <v-container>
      <v-row>
        <v-col align="center">
          <h2><v-img src="@/assets/suhu.png" transition="scale-transition" max-width="60"/> Temperature</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field placeholder="Input Here.." width="10px" type="number" clearable v-model="suhuAwal"></v-text-field>
        </v-col>
        <v-col>
          <div id="hasil">{{convert() || '...'}}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select :items="items1" label="From" solo v-model="dari"></v-select>
        </v-col>
        <v-col>
          <v-select :items="items2" label="To" solo v-model="ke"></v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items1: ['Celcius', 'Fahreinheit', 'Reaumur', 'Kelvin'],
      items2: ['Celcius', 'Fahreinheit', 'Reaumur', 'Kelvin'],
      suhuAwal: '',
      dari: 'A',
      ke: 'B'
    }),
    methods: {
      convert: function(){
        let result;
        if(this.dari == this.ke){
          result = parseFloat(this.suhuAwal);
        }else if(this.dari == 'Celcius'){
          if(this.ke == 'Fahreinheit'){
            result = (parseFloat(this.suhuAwal) * 9 / 5) + 32;
          }else if(this.ke == 'Reaumur'){
            result = (parseFloat(this.suhuAwal) * 4 / 5);
          }else if(this.ke == 'Kelvin'){
            result = parseFloat(this.suhuAwal) + 273.15;
          }
        }else if(this.dari == 'Reaumur'){
          if(this.ke == 'Fahreinheit'){
            result = (parseFloat(this.suhuAwal) * 9 / 4) + 32;
          }else if(this.ke == 'Celcius'){
            result = (parseFloat(this.suhuAwal) * 5 / 4);
          }else if(this.ke == 'Kelvin'){
            result = (parseFloat(this.suhuAwal) * 5 / 4) + 273.15;
          }
        }else if(this.dari == 'Fahreinheit'){
          if(this.ke == 'Reaumur'){
            result = (parseFloat(this.suhuAwal) -32 ) * 4 / 9;
          }else if(this.ke == 'Celcius'){
            result = (parseFloat(this.suhuAwal) - 32 ) * 5 / 9 ;
          }else if(this.ke == 'Kelvin'){
            result = ((parseFloat(this.suhuAwal) - 32 ) * 5 / 9 )+ 273.15;
          }
        }else if(this.dari == 'Kelvin'){
          if(this.ke == 'Reaumur'){
            result = (parseFloat(this.suhuAwal) - 273.15  ) * 4 / 5;
          }else if(this.ke == 'Celcius'){
            result = (parseFloat(this.suhuAwal) - 273.15 )  ;
          }else if(this.ke == 'Fahreinheit'){
            result = ((parseFloat(this.suhuAwal) - - 273.15 ) * 9 / 5 ) + 32;
          }
        }
        return result;
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

