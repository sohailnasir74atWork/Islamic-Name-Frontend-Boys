import React from 'react'

const NamesSaperator = () => {
    const sentence = "Yumna - Yumna means 'right hand' or 'blessed' and is a beautiful and meaningful name for baby girls. Zaina - Zaina means 'beautiful' or 'pretty' and is a lovely and elegant name for baby girls. Zoya - Zoya means 'life' or 'alive' and is a pretty and unique name for baby girls.";

    // Split the sentence into an array of name and meaning pairs
    const nameMeaningPairs = sentence.split(". ");
    
    // Create an array of objects containing the names and meanings
    const nameMeaningArray = nameMeaningPairs.map(pair => {
      // Extract the name and meaning from each pair
      const name = pair.split(" - ")[0];
      const meaning = pair.split(" - ")[1].replace(/'/g, ""); // Remove the single quotes from the meaning
    
      // Create an object with the name and meaning
      return { name, meaning };
    });
    
    console.log(nameMeaningArray);
    




  return (
    <div>NamesSaperator</div>
  )
}

export default NamesSaperator