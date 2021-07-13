<template>
<div>

<div v-if="games">
    <igreDetalji :igreDetalji="games"/>
  </div>

  </div>

</template>


<script>
import {Dogadaji} from '@/services'
import igreDetalji from '@/components/igreDetalji.vue'
export default {
  components: { igreDetalji},
  name: "igre-detalji",
  props: ['igra'],
  data(){
    return{
      games:[],
    }
  },
 
  async created(){
    this.games = await Dogadaji.detalji(this.igra);
  }
};
</script>
