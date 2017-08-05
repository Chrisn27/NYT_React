// Include React
import React from 'react';

export default class Results extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  render() {
    let headlines = "";
    if (this.props.resultsData) {
      headlines = this.props.resultsData.map((data, i) => {
        return (
          <div>
            {/* CHANGE TO ARTICLE RESULT  */}
            <li className="list-group-item" key={i}>
              <a href={data.web_url} target="_blank">{data.headline.main}</a>
            </li>
          </div>
        )
      })
    }
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Results</h3>
          </div>
          <div className="panel-body text-center">
            <h1>Articles</h1>
            <ul className="list-group">
              {
                headlines
              }
            </ul>
          </div>
        </div>

      </div>
    );
  }
}



