import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2e13c633cb57424cae2716329e1c5bc5')
            .then(response => {
                setArticles(response.data.articles);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <>
                <div className="newsCollection" >

            {articles.map((article, index) => (
                <div className='news'>
                <React.Fragment key={index}>
                    <h1>{article.title}</h1>
                    <h5>{article.author}</h5>
                    <p>{article.description}</p>
                    <p><a className='a' href={article.url} target="_blank" rel="noopener noreferrer">CONTINUE READING</a>
                    </p>
                    <img className='imge' src={article.urlToImage} alt="Article" />
                    <p>Published at: {article.publishedAt}</p>
                    <p>Content: {article.content}</p>
                </React.Fragment>
                </div>
            ))}
                </div>

        </>
    );
};

export default News;