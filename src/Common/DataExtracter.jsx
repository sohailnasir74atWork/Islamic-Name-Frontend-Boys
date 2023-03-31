import React, { useState, useEffect } from 'react';

function ExtractData() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const allNames = [];

    // Loop through all pages and accumulate data in an array
    // for (let i = 1; i <= 428; i++) {
    //   const response = await fetch(`https://hamariweb.com/names/muslim/boy/page-${i}`);
    const response = await fetch(`https://www.urdupoint.com/names/boys-popular-islamic-names.html`);
      const html = await response.text();
  
      // Use Cheerio to extract data from the HTML
      const cheerio = require('cheerio');
      const $ = cheerio.load(html);
  
      // Loop through each name row and extract the name and meaning
      $('tr').each((i, el) => {
        const name = $(el).find('a').text();
        const englishMeaning = $(el).find('td:nth-child(2)').text();
        const urduName = $(el).find('div:nth-child(4)').text();
    
        // Do something with name, englishMeaning
        allNames.push({ name, englishMeaning, urduName });
      });
    

    // Set the state with the accumulated data
    setNames(allNames);
  }

  const filteredData = names.filter((obj) => obj.name !== '');

console.log(names)

  return (
    <div>
      <h1>Names:</h1>
      <ul>
        {names.map((name, i) => (
          <li key={i}>
            {/* {name.name} - {name.englishMeaning} - {name.urduMeaning} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExtractData;
