<template>
  <div class="weight">
    <v-container>
      <v-row>
        <v-col align="center">
          <h2><v-img src="@/assets/berat.png" transition="scale-transition" max-width="60"/> Weight</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field placeholder="Input Here.." width="10px" type="number" clearable v-model="weiAwal"></v-text-field>
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
      items1: ['Tonne', 'Kilogram', 'Gram', 'Pound', 'Ounce'],
      items2: ['Tonne', 'Kilogram', 'Gram', 'Pound', 'Ounce'],
      weiAwal: '',
      dari: 'A',
      ke: 'B'
    }),
    methods: {
      convert: function(){
        let result;
        if(this.dari == this.ke) result = parseFloat(this.weiAwal);
        else if(this.dari == 'Tonne'){
          if(this.ke == 'Kilogram') result = parseFloat(this.weiAwal)*1000;
          if(this.ke == 'Gram') result = parseFloat(this.weiAwal)*1e+6;
          if(this.ke == 'Pound') result = parseFloat(this.weiAwal)*2204.62;
          if(this.ke == 'Ounce') result = parseFloat(this.weiAwal)*35274;
        }else if(this.dari == 'Kilogram'){
          if(this.ke == 'Tonne') result = parseFloat(this.weiAwal)/1000;
          if(this.ke == 'Gram') result = parseFloat(this.weiAwal)*1000;
          if(this.ke == 'Pound') result = parseFloat(this.weiAwal)*2.205;
          if(this.ke == 'Ounce') result = parseFloat(this.weiAwal)*35.274;
        }else if(this.dari == 'Gram'){
          if(this.ke == 'Tonne') result = parseFloat(this.weiAwal)/1e+6;
          if(this.ke == 'Kilogram') result = parseFloat(this.weiAwal)/1000;
          if(this.ke == 'Pound') result = parseFloat(this.weiAwal)/454;
          if(this.ke == 'Ounce') result = parseFloat(this.weiAwal)/28.35;
        }else if(this.dari == 'Pound'){
          if(this.ke == 'Tonne') result = parseFloat(this.weiAwal)/2205;
          if(this.ke == 'Kilogram') result = parseFloat(this.weiAwal)/2.205;
          if(this.ke == 'Gram') result = parseFloat(this.weiAwal)*454;
          if(this.ke == 'Ounce') result = parseFloat(this.weiAwal)*16;
        }else if(this.dari == 'Ounce'){
          if(this.ke == 'Tonne') result = parseFloat(this.weiAwal)/35274;
          if(this.ke == 'Kilogram') result = parseFloat(this.weiAwal)/35.274;
          if(this.ke == 'Pound') result = parseFloat(this.weiAwal)/16;
          if(this.ke == 'Gram') result = parseFloat(this.weiAwal)*28.35;
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