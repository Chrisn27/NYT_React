// Include React
import React from 'react';
import helpers from '../utils/helpers';
import axios from "axios";

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function () {
    return { topic: "" };
  },

  // This function will respond to the user input
  handleInputChange(event) {
    console.log(event.target.value);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  },

  // When a user submits...
  handleSubmit: function (event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    const apiKey = "75fd902bfcca4a9d90c2f5188fb1d9b2";
    let topic = this.state.topic.trim();
    let startYear = this.state.startYear.trim() + "0101";
    let endYear = this.state.endYear.trim() + "1231";

    console.log(topic);

    // Figure out the topic
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + topic + "&begin_date=" + startYear + "&end_date=" + endYear;
    console.log(queryURL)
    axios.get(queryURL).then(resp => {
        this.props.updateMain(this.state.stopic, resp.data.response.docs);
        console.log(resp.data.response.docs);
      })
  
  },

  // componentDidUpdate: function () {

  //   // Run the query for the address
  //   helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear).then(function (data) {
  //     if (data !== this.state.results) {
  //       console.log("Address", data);
  //       this.setState({ results: data });

  //       // After we've received the result... then post the search Topic to our history.
  //       helpers.postHistory(this.state.topic).then(function () {
  //         console.log("Updated!");

  //         // After we've done the post... then get the updated history
  //         helpers.getHistory().then(function (response) {
  //           console.log("Current History", response.data);

  //           console.log("History", response.data);

  //           this.setState({ history: response.data });

  //         }.bind(this));
  //       }.bind(this));
  //     }
  //   }.bind(this));
  // },
  // Here we describe this component's render method
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.

                CHANGE THIS CODE LATER
              */}

              <label for="topic">Topic</label>
              <input
                name="topic"
                type="text"
                className="form-control text-center"
                onChange={this.handleInputChange}
                required
              />
              <label for="startYear">Start Year</label>
              <input
                name="startYear"
                type="text"
                className="form-control text-center"
                onChange={this.handleInputChange}
                placeholder="YYYY"
                required
              />
              <label for="endYear">End Year</label>
              <input
                name="endYear"
                value={this.props.endYear}
                type="text"
                className="form-control text-center"
                onChange={this.handleInputChange}
                placeholder="YYYY"
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files

module.exports = Form;
