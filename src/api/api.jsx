import axios from 'axios';

const fetchImagesFromApi = async (searchTerm, page) => {
    const key = '36804673-b7c86e83fae38f10ed9b56d3d';
    const url = `https://pixabay.com/api/?q=${encodeURIComponent(searchTerm)}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
      const {data} = await axios.get(url);
      return data; 
  };
  
  export default fetchImagesFromApi;