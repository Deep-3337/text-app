import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        
    let { title, description,imageUrl,newsUrl, mode1} = this.props;
        return (
            <div className="my-3" >
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725184-stock-illustration-image-available-icon-flat-vector.jpg":imageUrl} className="card-img-top" alt="..." style={{height: "12rem"}}/>
                    <div className="card-body" style={{backgroundColor: mode1==='dark'?'black':'white',
            color: mode1==='dark'?'white':'black'}}>
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer"
                         className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
