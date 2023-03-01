"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Javier Ballester
      Date: 02/28/2023     

      Filename: project09-01b.js
*/

// 
let query = location.search.slice(1);

// replace
query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);


//
let cardFields = query.split(/&/g);


    for (let items of cardFields) {
        let nameValue = items.split(/=/);
        let name = nameValue[0];
        let value = nameValue[1];

        
        document.getElementById(name).textContent = value;
    }
   
