import Article from '../components/Article.jsx'
import News from '../data/news.json';
// useParams allows us to access parameters passed in url
import { useParams } from 'react-router-dom'

function ArticlePage({getArticleById}) {
  let {articleID} = useParams()
  const article = getArticleById(articleID - 1)

  return (
    // <div>This is Article { articleID} Page</div>
    <div>
      <Article {...article}/>
    </div>
  )
}

export default ArticlePage;
