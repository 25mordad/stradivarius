import React, { useRef , useState , useEffect } from 'react';
import useSlider from '../hooks/useSlider'
import {SlideDress } from '../api/index.js';

const Slider = () => {

  const [material, setMaterial] = useState([
    { src: "" ,text: ""},
    { src: "" ,text: ""},
    { src: "" ,text: ""}
    ]);

  useEffect(() => {

    const getImg = async () => {
      const resp = await SlideDress("landscape");
      const product = resp.data.results;
      console.log(resp.data.results,"man");

      setMaterial([
        { src:  product[0].urls.raw+"fit=crop&w=2000&h=1000&q=80" ,text:  product[0].alt_description},
        { src:  product[5].urls.raw+"fit=crop&w=2000&h=1000&q=80" ,text:  product[5].alt_description},
        { src:  product[4].urls.raw+"fit=crop&w=2000&h=1000&q=80" ,text:  product[4].alt_description},
        ]);
    }
    getImg();

  }, []);
  const images = [
      {
       src: material[0].src,
       text: material[0].text,
      },
      {
        src: material[1].src,
        text: material[1].text,
      },
      {
        src: material[2].src,
        text: material[2].text,
      }
  ];


  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images)


    return (
          <div className="slider" ref={slideImage}>

            <div className="slider--content">
              <button onClick={goToPreviousSlide} className="slider__btn-left">
                <i className="fas fa-angle-left"></i>
              </button>
             <div className="slider--feature">
                <h1 className="feature--title">NEW ARRIVAL</h1>
                <p ref={slideText} className="feature--text"></p>
                <button className="feature__btn">Discover More</button>
              </div>
              <button onClick={goToNextSlide} className="slider__btn-right">
                <i className="fas fa-angle-right"></i>
              </button>
            </div>
        </div>
    );
}

export default Slider;
