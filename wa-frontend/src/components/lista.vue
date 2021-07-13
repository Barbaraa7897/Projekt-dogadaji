<template>
    <div>    
  <div>
          <input v-model="obrisi" type="text">
          <button class="dugme" @click="brisanje()">Obriši igru</button>
   </div> <br> <br> 
 <div  class="b-game-card">
 
<table>
  <thead>

    <tr>
      <th scope="col">Ime igre</th>
      <th scope="col">Datum</th>
      <th scope="col">vrijeme</th>
      <th scope="col">Grad</th>
       <th scope="col"></th>
     


    </tr>
  </thead>
  <tbody>
    <tr v-for="(liste) in liste" :key="liste.igra">
     
      <td data-label="Ime-igre">{{liste.igra}} </td>
      <td data-label="Datum">{{liste.datum}}</td>
      <td data-label="vrijeme">{{liste.vrijeme}}</td>
      <td data-label="grad">{{liste.grad}}</td>
      <a @click="ruta(liste)"> <td data-label="saznaj-vise">Saznaj više</td></a >

    </tr>
  
  </tbody>
</table>
 </div>
    </div>
</template>

<script>
import {Dogadaji} from '@/services'
import {Service} from '@/services'

  export default {
    name: 'lista',
     props: ['info'],
    data() {
        return{
            liste: [],
            obrisi: "" ,
            igra: this.$route.params.igra,
            
 
  };
    },
    methods:{

      ruta(liste) {

        this.$router.push({ path:`/detaljno/${liste.igra}` })

      },
      
        brisanje() {
          Service.post("/dogadaji/delete/" + this.obrisi);
		},  
    },
    async created(){
        this.liste = await Dogadaji.slanje();
  
    }
};
    
</script>

<style >

body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
 	margin-top:30px;
    font-size: 2em;
	color:black;
	margin-bottom: 20px;
 
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}




.dugme {
color:black;
border: 0.5px black solid;
margin-left:5px;
background: rgb(233, 231, 231);
font-family: 'Times New Roman', Times, serif;
font-size:17px;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}



</style>