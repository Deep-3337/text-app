import React from 'react'

export default function Home(props) {
    document.title=`${props.title} | Home`
  return (
    <div className="container text-center" style={{color : props.mode==='dark'?'white':'black'}}>
        <table style={{height: "100px"}}>
            
            <tr><h2>This is Web-Tech Project(WTP) using React.JS library of JavaScript </h2></tr>
                <tr className="align-baseline"><h3>We build 2 application</h3></tr>
                <tr className="align-middle"><h4>1. Words related features(number of words, remove extra's spaces, copy words, transition to uppercase, transition to lowercase)</h4></tr>
                <tr className="align-middle"><h4>2. Shows News and to see more information click on the Read More button</h4></tr>
                {/* <tr>Made by Jagriti and Deep </tr> */}
        </table>
        
    </div>
  )
}
