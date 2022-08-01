import ArticleGroup from "./ArticleGroup"
import ArticleTeaser from "./ArticleTeaser"

function ArticleList({ articles }) {

    const HandleTitleClick = (article_id) => {
        console.log(article_id)
    }

    return (
        <div>
            List begin
            {/* For each article in articles map with an ArticleTeaser Component and click handler function */}
            {articles.map((article) => (
                <ArticleTeaser key={article.id} {...article} clickFunction={HandleTitleClick}/>
            ))
            }
            List end
        </div>
    )
}
export default ArticleList