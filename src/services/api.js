import axios from 'axios';

const fetchImages = async () => {
  const responce = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return responce.data;
};

export default fetchImages;
