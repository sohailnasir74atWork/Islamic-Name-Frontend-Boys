import React, { useState, useEffect } from 'react';
import axios from 'axios';
const TranslateObject = ({ data }) => {
  const [urdu, setUrdu] = useState("");
  const [translatedData, setTranslatedData] = useState([]);

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const translateData = async () => {
      try {
        let i = 0;
        while (i < data.length) {
          const batch = data.slice(i, i + 1000);
          const translations = await Promise.all(
            batch.map(async (obj) => {
              const response = await axios.post(
                'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCpdG63RaI9kv-8eIdhKhUHW_f7zeXxzQE',
                {
                  q: obj.englishMeaning,
                  target: 'ur',
                }
              );
              const urduMeaning = response.data.data.translations[0].translatedText;
              return { ...obj, urduMeaning };
            })
          );
          setTranslatedData((prevData) => [...prevData, ...translations]);
          setLoading(false);
          i += 1000;
          await new Promise((resolve) => setTimeout(resolve, 1000)); // wait for 1 second before processing the next batch
        }
      } catch (error) {
        console.log(error);
        setTranslatedData([]);
      }
    };
    
    
        translateData();
      }, [data]);
      console.log(translatedData)
  return (
    <div>
      {loading && (<div class="d-flex justify-content-center tac" style={{minHeight:"50px"}}>
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>)}
      {!loading  && <div className='urdu-cont d-flex  tac' style={{minHeight:"50px", background:"var(--color-five)", color:"white"}}>{urdu}</div>}
    </div>
  );
};

export default TranslateObject;
