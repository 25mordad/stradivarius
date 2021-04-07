import React, {useState , useEffect } from 'react';
import {Exclusive} from '../api/index.js';

import '../app.css';
import '../index.css';

const Page = () => {

   const [material, setMaterial] = useState([
     { src: "" ,tag: "", des:""},
     { src: "" ,tag: "", des:""},
     { src: "" ,tag: "", des:""},
     { src: "" ,tag: "", des:""},
     { src: "" ,tag: "", des:""},
     ]);

   useEffect(() => {

     const getImg = async () => {
       const resp = await Exclusive("landscape");
       const product = resp.data.results;
       console.log(product ,"scarf");

       setMaterial([
         { src:  product[3].urls.raw+"fit=crop&w=1000&h=1000&q=80" ,tag:  product[8].tags[2].title ,  des:  product[3].description},
         { src:  product[5].urls.raw+"fit=crop&w=1000&h=1000&q=80" ,tag:  product[4].tags[2].title ,  des:  product[5].description},
         { src:  product[9].urls.raw+"fit=crop&w=1000&h=1000&q=80" ,tag:  product[8].tags[1].title ,  des:  product[0].description},
         { src:  product[6].urls.raw+"fit=crop&w=1000&h=1000&q=80" ,tag:  product[6].tags[2].title ,  des:  product[6].description},
         { src:  product[4].urls.raw+"fit=crop&w=1000&h=1000&q=80" ,tag:  product[4].tags[2].title ,  des:  product[4].description},
         ]);
     }

     getImg();

   }, []);


    return (
       <div>

      <div className="flex flex-wrap">
      <div className=" product lg-col-4 md-col-4 sm-col-4 xs-col-12  relative p1 ">
         <a href={material[0].src} target="blank" >
            <img loading="lazy" src={material[0].src} alt="" className="responsive"/>
            <div className="tag">
               <h3> {material[0].tag.toUpperCase()}</h3>
               <p>{material[0].des}</p>
            </div>
         </a>
      </div>

      <div className=" product lg-col-4 md-col-4 sm-col-4 xs-col-12  relative p1 ">
         <a href={material[1].src} target="blank" >
            <img loading="lazy" src={material[1].src} alt="" className="responsive"/>
            <div className="tag">
               <h3> {material[1].tag.toUpperCase()}</h3>
               <p>{material[1].des}</p>
            </div>
         </a>
      </div>

      <div className=" product lg-col-4 md-col-4 sm-col-4 xs-col-12  relative p1 ">
         <a href={material[2].src} target="blank" >
            <img loading="lazy" src={material[2].src} alt="" className="responsive"/>
            <div className="tag">
               <h3> {material[2].tag.toUpperCase()}</h3>
               <p>{material[2].des}</p>
            </div>
         </a>
      </div>
    </div>

    <div className="flex flex-wrap">
      <div className=" product lg-col-8 md-col-8 sm-col-8 xs-col-12  relative p1 ">
         <a href={material[3].src} target="blank" >
            <img loading="lazy" src={material[3].src} alt="" className="responsive"/>
            <div className="tag">
               <h3> {material[3].tag.toUpperCase()}</h3>
               <p>{material[3].des}</p>
            </div>
         </a>
      </div>

      <div className=" product lg-col-4 md-col-4 sm-col-4 xs-col-12  relative p1 ">
         <a href={material[4].src} target="blank" >
            <img loading="lazy" src={material[4].src} alt="" className="responsive"/>
            <div className="tag">
               <h3> {material[4].tag.toUpperCase()}</h3>
               <p>{material[4].des}</p>
            </div>
         </a>
      </div>
     </div>
    </div>
    );
  }

  export default Page;
