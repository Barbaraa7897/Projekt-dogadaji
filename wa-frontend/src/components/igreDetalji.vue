<template>
  
  <div id="igreDetalji">
  <div class="card">

  <div class="photo">
    <img src="/assets/dogadaj.jpg"  style="height:300px;">
  </div>
  <div class="description">
    <h2 class="naslov">{{igreDetalji.igra}}</h2>
    <h4 class="grad">{{igreDetalji.grad}}</h4>
    <h1 class="datum">{{igreDetalji.datum}}</h1>
    <p class="ostalo">
     Dob igrača: {{igreDetalji.dob}} <br>
     Vrijeme: {{igreDetalji.vrijeme}}h <br>
     Adresa događaja: {{igreDetalji.adresa}} <br>
     Covid upozoronje:  {{igreDetalji.covid}} <br>
    </p>
  </div>
</div>

  </div>
</template>
<script>

export default {

  name: "igreDetalji",
  props: ['igreDetalji'],
  data(){
    return{
     
    }
  },
};
</script>
<style>
.naslov  {
  color:rgb(39, 56, 95);
  font-family: 'Times New Roman', Times, serif;
  font-size:50px;
  margin:auto;
}

.datum  {
  color:rgb(39, 56, 95);
  font-family: 'Times New Roman', Times, serif;
  font-size:30px;
  margin:auto;
}

.grad  {

  color:rgb(39, 56, 95);
  font-family: 'Times New Roman', Times, serif;
  font-size:40px;
  margin:auto;

}

.description
{
  border: 0.3px black solid;
  padding: 20px;
  margin-left:535px;
  margin-right: 535px;
}

.ostalo {
    color:rgb(39, 56, 95);
  font-family: 'Times New Roman', Times, serif;
  font-size:20px;
  margin:auto;
}
</style>
