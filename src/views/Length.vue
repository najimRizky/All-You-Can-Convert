<template>
  <div class="length">
    <v-container>
      <v-row>
        <v-col align="center">
          <h2><v-img src="@/assets/speedo.png" transition="scale-transition" max-width="60"/> Length</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field placeholder="Input Here.." width="10px" type="number" clearable v-model="lenAwal"></v-text-field>
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
      items1: ['Kilometer', 'Meter', 'Mile', 'Cm', 'Inch', 'Feet'],
      items2: ['Kilometer', 'Meter', 'Mile', 'Cm', 'Inch', 'Feet'],
      lenAwal: '',
      dari: '',
      ke: ''
    }),
    methods: {
      convert: function(){
        let temp;
        temp = parseInt(this.lenAwal);
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