import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem"; // Adjust the import path as necessary

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=869d75e3a17d4aea975c3ee6565a2193`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && articles.length === 0 && <p>No articles found.</p>}
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news, index) => (
          <NewsItem
            key={news.url || index} // Use news.url if available, otherwise fallback to index
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
