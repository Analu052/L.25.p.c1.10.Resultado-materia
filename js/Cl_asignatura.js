export default class Cl_asignatura {
    constructor(){
        this.contA=0;
        this.contR=0;
        this.contE=0;
        this.acumnF=0;
    }

    procesarEstudiante(est){
        this.contE++;
        this.acumnF+=est.notF;

        if(est.getNotF()>=48) {
            this.contA++;}
        if (est.getNotF()<48) {
            this.contR++;
        }
    }   


       cantA(){
           return this.contA;
       } 
       cantR(){
           return this.contR;
       }
    promS(){
        return this.acumnF/this.contE;
    }
}  