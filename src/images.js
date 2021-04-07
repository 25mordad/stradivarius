import React, { useRef , useState } from 'react';
import api from './api/index.js';


// const [img1, setimg1] = useState();
//
// const getImg = async () => {
//   const resp = await api();
//   console.log(resp.data.results[0].urls.raw,"ttt");
//   setimg1(resp.data.results[0].urls.raw+"fit=crop&w=200&h=700&q=80");
// }
// getImg();
//

const Iimages = () => {

  return (
    [
        {
         src: "img1",
         text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse'
        },
        {
         src: 'https://drive.google.com/uc?id=1rJFs-8So16UCiDag__hG4yyf_RnC08Fa',
         text: 'Consectetur adipisicing elit cillum dolore eu fugiat nulla'
        },
        {
         src: 'https://drive.google.com/uc?id=1HO2AGjd_1yyYI4pYTTBmGXBaWHoGSqCl',
         text: 'Asperiores ex animi explicabo cillum dolore eu fugiat nulla'
        }
    ]
  );

}

export default Iimages;

// //
// export default [
//     {
//      src: "img1",
//      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse'
//     },
//     {
//      src: 'https://drive.google.com/uc?id=1rJFs-8So16UCiDag__hG4yyf_RnC08Fa',
//      text: 'Consectetur adipisicing elit cillum dolore eu fugiat nulla'
//     },
//     {
//      src: 'https://drive.google.com/uc?id=1HO2AGjd_1yyYI4pYTTBmGXBaWHoGSqCl',
//      text: 'Asperiores ex animi explicabo cillum dolore eu fugiat nulla'
//     }
// ]
