import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Carousel = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2e13c633cb57424cae2716329e1c5bc5')
            .then(response => {
                setArticles(response.data.articles);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);



  return (
    <>
    <h1 className='hnew'>TOP HEADLINES</h1>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" style={{margin:"auto", width:"80%", marginTop:"20px"}}>
  <div class="carousel-indicators">
    {articles.map((article, index) => (
      <button
        key={index}
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to={index}
        className={index === 0 ? 'active' : ''}
        aria-current={index === 0 ? 'true' : undefined}
        aria-label={`Slide ${index + 1}`}
      ></button>
    ))}
  </div>
  <div class="carousel-inner">
    {articles.map((article, index) => (
      <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
        <img src={article.urlToImage} className="d-block w-100" alt="jk" style={{height:"500px", width:"200px"}}/>
        <div className="carousel-caption">
          <h5 style={{backgroundColor:"white"}}>{article.title}</h5>
          <p style={{backgroundColor:"white"}}>{article.content}</p>
        </div>
      </div>
    ))}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{backgroundColor:"white"}}>
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style={{backgroundColor:"white"}}>
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </>
  )
}

export default Carousel