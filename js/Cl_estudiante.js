export default class Cl_estudiante{
    constructor(n,nF){
        this.nom=n;
        this.notF=nF;
    }
    
    setNom(n){
        this.nom=n;
    }
    getNom(){
        return this.nom;
    }
    setNotF(nF){
        this.notaF=nF;
    }
    getNotF(){
        return this.notF;
    }
}