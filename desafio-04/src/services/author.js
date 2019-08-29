import axios from 'axios';

const api = axios.create({
  baseURL: 'https://uinames.com/api/'
});

async function getRandomAuthor() {
  const response = await api.get(null, {
    params: {
      ext: true,
      region: 'Brazil'
    }
  })

  const { name, surname, photo: avatar } = response.data;

  return {
    name: `${name} ${surname}`,
    avatar,
  }
}

export { getRandomAuthor }