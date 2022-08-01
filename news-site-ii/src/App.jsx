import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// import './App.css'

import NavBar from './components/NavBar'
import ArticleGroup from './components/ArticleGroup'

import NewsData from './data/news.json'
import NavItemsData from './data/navItems.json'
import ArticleList from './components/ArticleList'

import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'

function App() {

  const[navItems, setNavItems] = useState(NavItemsData)
  const[articles, setArticles] = useState(NewsData.map(( article, index) => {
    return {
      id: index,
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      image: article.multimedia.length ? article.multimedia[0] : null,
      created_date: article.created_date
    }})
  )
  
  // function to search for article by id
  const getArticleById = (articleId) => {
    return articles[articleId]
  }
  
  return (
    <div className="App">
      <NavBar items={navItems} />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage articles={ articles }/>} />
          <Route path='/articles/:articleID' element={<ArticlePage getArticleById={getArticleById}/>} />
        </Routes>
      {/* <ArticleList articles={articles}/>       */}
      </Router>
    </div>
  )
}

export default App
