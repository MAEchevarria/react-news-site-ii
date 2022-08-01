import ArticleList from '../components/ArticleList.jsx'
import News from '../data/news.json';

function HomePage({articles}) {
  const handleTitleClick = (articleID) => console.log("TODO - use React Router\'s history.push() method to change the page to /article/${articleID}");

  return (
    <div>
      Homepage here
      <ArticleList 
        articles={articles}
        // articles={News}
        handleTitleClick={handleTitleClick} 
      />
    </div>
  );
}

export default HomePage;
