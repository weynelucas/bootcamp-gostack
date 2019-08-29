import axios from 'axios';

const api = axios.create({
  baseURL: 'https://uinames.com/api/',
  params: {
    ext: true,
    region: 'Brazil',
  }
});

async function getRandomUser() {
  const { name, surname, photo: avatar } = (await api.get()).data;
  
  return {
    name: `${name} ${surname}`,
    avatar,
  }
}

export { getRandomUser };