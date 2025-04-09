import React, { useEffect, useState } from 'react';
import "../styles/TopNews.css";

const TopNews = ({ category = "general" }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY;

        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`

        );
        const data = await response.json();
        if (data.articles) {
          setNews(data.articles.slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    
    fetchNews();
  }, [category]); // triggers refetch when category changes
  const handleImgError = (e) => {
    e.target.src = "/logo.png"; // fallback image 
  };
  if (news.length === 0) return <p>Loading...</p>;

  return (
    <div className="top-news-container">
      <div className="featured-news">
        <span className="top-story-badge">TOP STORY</span>
        <a href={news[0]?.url} target="_blank" rel="noopener noreferrer">
          <img 
            src={news[0]?.urlToImage} 
            alt="Top Story" 
            className="featured-img" 
            onError={handleImgError} 
          />
          <div className="featured-overlay">
            <h2>{news[0]?.title}</h2>
            <p>{new Date(news[0]?.publishedAt).toLocaleDateString()}</p>
          </div>
        </a>
      </div>
  
      <div className="side-news">
        {news.slice(1).map((article, index) => (
          <a 
            href={article.url} 
            key={index} 
            className="side-news-item" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={article.urlToImage} 
              alt="News" 
              className="side-img" 
              onError={handleImgError} 
            />
            <div className="side-overlay">
              <span className="watch-badge">WATCH</span>
              <p>{article.title}</p>
              <p className="date">{new Date(article.publishedAt).toLocaleDateString()}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopNews;
