import axios from 'axios';
import { BASE_URL, API_KEY } from './api';

const baseSearchParams = {
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export async function fetchPictures(inputValue = 'flower', page = 1) {
  try {
    const response = await axios.get(`${BASE_URL}/`, {
      params: {
        page: page,
        q: inputValue,
        key: API_KEY,
        ...baseSearchParams,
      },
    });

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
