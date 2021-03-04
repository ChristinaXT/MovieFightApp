const fetchData = async () => {
   const response = await axios.get('http://www.omdbapi.com/', {
     params: {











       apikey: '75f0c400',
       i: 'tt0848228'
     }
   });

   console.log(response.data);
};

fetchData();
