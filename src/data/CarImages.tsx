import car from '@/assets/car.png'
import car1 from '@/assets/images/car1.png'
import car2 from '@/assets/images/car2.png'
import car3 from '@/assets/images/car3.png'
import car4 from '@/assets/images/car4.png'
import car5 from '@/assets/images/64027.jpg'
import car6 from '@/assets/images/10815918.png'
type CarImages = {
    url: string ,
    id : number
}

 const carImages : CarImages [] =  [
  {
    id: 1,
    url: car, 
  },
  {
    id: 2,
    url: car1, 
  },
  {
    id: 3,
      url: car6, 
 },
  {
    id: 4,
    url: car2, 
  },
  {
    id: 5,
    url: car5, 
  },
  {
    id: 6,
    url: car4, 
  },
  {
    id: 7,
     url:car3},
  
  {
    id: 8,
    url: car1, 
  },
];
export default carImages