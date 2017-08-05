// Include the axios package for performing HTTP requests (promise based alternative to request)
import React from 'react';

// Geocoder API
var apiKey = "75fd902bfcca4a9d90c2f5188fb1d9b2";

// Helper functions for making API Calls
var helper = {

  // // This function serves our purpose of running the query to geolocate.
  // runQuery: function (topic, startYear, endYear) {

  //   console.log(topic, startYear, endYear);
  //   var topic = topic.trim();
  //   var startYear = startYear.trim() + "0101";
  //   var endYear = endYear.trim() + "1231";
  //   // Figure out the topic
  //   var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  //   // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + topic + "&pretty=1&key=" + apiKey;
  //   return axios.get(queryURL, {
  //     params: {
  //       'api-key': apiKey,
  //       'q': topic,
  //       'fq': "10",
  //       'begin_date': startYear,
  //       'end_date': endYear
  //     }
  //   }).then(function (response) {
  //     // If get get a result, return that result's formatted address property
  //     if (response.data.results[0]) {
  //       return response.data.results[0].formatted;
  //     }
  //     // If we don't get any results, return an empty string
  //     return "";
  //   });
  // },

  // This function hits our own server to retrieve the record of query results
  getHistory: function () {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function (topic) {
    return axios.post("/api", { topic: topic });
  }
};

// We export the API helper
module.exports = helper;
