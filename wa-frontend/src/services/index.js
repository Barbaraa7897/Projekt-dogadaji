import $router from '@/router';
import axios from 'axios';
let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
})
Service.interceptors.response.use(
    (response) => {
        console.log('Interceptor', response);
        return response;
    },
    (error) => {
        if(error.response.status == 401){
            console.log("status of?")
            
        }
        //console.error('Interceptor', error.response)
    }
);
let Dogadaji = {
    dodavanjeDogadaja(dogadaji){console.log("dodavanje")
        
        return Service.post('/dogadaji', dogadaji);
        
    },
    async slanje(){
        let response = await Service.get(`/dogadaji`);
        console.log(response);
        let data = response.data;
        
        data=data.map((doc)=>{
        return {

            id: doc._id,
            igra: doc.igra,
            vrijeme: doc.vrijeme,
            datum: doc.datum,
            grad: doc.grad,
        
        }    
        });
        console.log("Data: ",data);
        return data;
    }, 

     async detalji(igra){
    
        let response = await Service.get(`/dogadaji/${igra}`);
        console.log(response);
        let doc = response.data;
       
        return {
            
            id: doc._id,
            igra: doc.igra,
            vrijeme: doc.vrijeme,
            grad: doc.grad,
            datum: doc.datum,
            adresa: doc.adresa,
            dob: doc.dob,
            covid: doc.covid,
        }
       

    }, 
};

    export { Service, Dogadaji }