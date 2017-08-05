// Include React
import React from 'react';

// Here we include all of the sub-components
import Form from "./children/Form";
import Results from "./children/Results";
import History from "./children/History";

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: [], resultsData: [] };
  }

  updateParent(titleData, nytResults) {
    this.setState({
      title: titleData,
      resultsData: nytResults
    });
  }
  setTerm(term) {
    this.setState({ searchTerm: term });
  }
  // Here we render the function
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">NYT Article Search</h2>
            <p className="text-center">
              <em>Enter a topic and timespan to search.</em>
            </p>
          </div>
          <div class="row">

            <Form updateMain={this.updateParent.bind(this)} />

          </div>
          <div class="row">

            <h2>{this.state.title}</h2>
            <Results resultsData={this.state.resultsData} />


          </div>
        </div>

        <div className="row">

          <History history={this.state.history} />

        </div>

      </div>
    );
  }
};
