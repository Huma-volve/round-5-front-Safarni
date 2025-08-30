type Brand = {
   
    brandName: string;
   img : string;
   rate: number;
   id : number;
};
const brand : Brand[] = [
    {
       brandName: "Mercedes" ,
      img : "/public/images/mer.png",
      rate : 32,
      id:1
    }
    ,{
 brandName: "Jeep" ,
      img : "/public/images/017dfa0b19fdebedb2b57dfab2c2f4edcbac3b60.png",
      rate : 44,
      id:2
    }
    ,{
 brandName: "BMW" ,
      img : "/public/images/01c4ea0c8ab5b6f1d382944d126e52419af782d2.png",
      rate : 32,
       id: 3
    }
    ,{
 brandName: "Renault" ,
      img : "/public/images/072a9af20ce24cdf619ccbc2b0f28219cb4662c0.png",
      rate : 59,
       id: 4
    }
    ,{
 brandName: "Porsche" ,
      img : "/public/images/3690d1f4743fc5281924e9c947051eb5b5b459be.png",
      rate : 42,
       id: 5
    }
    ,{
 brandName: "Geely" ,
      img : "/public/images/3d46ee6fba536d763bb8aa29aa3e140c69856cd4.png",
      rate : 12,
       id: 6
    }
    ,{
 brandName: "Subaru" ,
      img : "/public/images/f6e237503068e464ac4e8f9a485a195474135e1b.png",
      rate : 26,
      id : 7
    }
]
export default brand