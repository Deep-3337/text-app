import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles:[],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=4c019ff30c194b239d25ddde1c595644&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        });
    }

    handlePrevClick = async () => {
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4c019ff30c194b239d25ddde1c595644&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
        }
        else{
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4c019ff30c194b239d25ddde1c595644&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page : this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }


    render() {
        
    document.title=`${this.props.title} | News`
        return (
            <div className="container my-3" style={{color : this.props.mode==='dark'?'white':'black'}}>
                <h1 style={{textAlign: 'center'}}>Top Headlines</h1>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url} >
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl= {element.urlToImage} newsUrl={element.url} mode1={this.props.mode}/>
                    </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                </div>
            </div>
        )
    }
}

export default News
