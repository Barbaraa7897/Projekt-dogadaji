
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
           Dodaj svoj događaj:
          </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <form class="form-group"> 
            <div class="container">
               <div class="form-group">
            <span class="tablica">Ime igre  </span>
           <input v-model="igra" type="text" class="form-control input-lg" name="igra" id="igra">
           </div>
  <br>
             <div class="form-group">
            <span class="tablica">Grad   </span>
           <input v-model="grad" type="text" class="form-control input-lg" name="grad" id="grad">
           </div>
  <br>
          <div class="form-group">
        <span class="tablica">Dob igrača: </span>
        <select v-model="dob">
            <option>do 12god.</option>
            <option>12god.-16god.</option>
            <option>16god.-18god.</option>
            <option>više od 18god.</option>
            <option>svi uzrasti</option>
        </select>
      </div>
  <br>
         <div class="form-group">
        <span class="tablica">Adresa  </span>
        <input v-model="adresa" type="text" class="form-control input-lg" name="adresa" id="adresa" >
      </div>
  <br>
            <div class="form-group">
        <span class="tablica">Vrijeme  </span>
        <input v-model="vrijeme" type="time" class="form-control input-lg" name="vrijeme" id="vrijeme" >
      </div>
  <br>
               <div class="form-group">
        <span class="tablica">Datum  </span>
        <input v-model="datum" type="date" class="form-control input-lg" name="trip-start" id="start" min="2021-07-15" max="2021-12-31" >
      </div>
  <br>
     

      <div class="from-group">
      <span class="tablica" style="color:red;"> Covid mjere:   </span>
      <label>Obavezna maska</label> 
      <input type="checkbox" v-model="covid" value="obavezna maska" /> 
      <label>Obavezan brzi test</label>
      <input type="checkbox" v-model="covid" value="obavezan brzi test" /> 
      <label>Obavezna potvrda o cijepljenju</label>
      <input type="checkbox" v-model="covid" value="obavezna potvrda o cijepljenju" />
      </div>

 </div>

    <div>
     <button type="submit" class="btn" @click.prevent="dodavanjeDogadaja()">Objavi</button>
    </div>
   </form>
  </slot>
 </section>
  </div>
   </div>
  </transition>
</template>

<script>
import {Dogadaji} from '@/services';
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },

        dodavanjeDogadaja(){
        let dogadaji = {
          
          igra: this.igra,
          grad: this.grad,
          vrijeme: this.vrijeme,
          dob: this.dob,
          adresa:this.adresa,
          datum:this.datum,
          covid: this.covid
        }
        Dogadaji.dodavanjeDogadaja(dogadaji);
      },
    },
    data() {

      return {
        igra:"",
        grad:"",
        dob:"",
        vrijeme:"",
        datum:"",
        adresa:"",
        covid:[],
      }

    }
  };
</script>


<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

  .btn {

    color:black;
    font-size:18px;
  }


  input[type=text], select {
  width: 300px;
  padding: 10px 12px;

  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


  input[type=date], select {
  width: 280px;
  padding: 10px 12px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


  input[type=time], select {
  width: 280px;
  padding: 10px 12px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

</style>