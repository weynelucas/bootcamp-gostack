import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  auth: {
    username: process.env.REACT_APP_API_USER,
    password: process.env.REACT_APP_API_PASS,
  },
});

/**
 * Return a github search query string based on a
 * given object
 */
function _getQueryString(obj) {
  return Object.entries(obj)
    .reduce((args, [key, value]) => {
      if (Array.isArray(value) && value.length) {
        value.map(v => (args = [...args, `${key}:${v}`]));
      } else {
        args = [...args, `${key}:${value}`];
      }

      return args;
    }, [])
    .join('+');
}

export function searchRepoIssues(
  repoName,
  { page = 1, per_page = 5, state = 'open' } = {}
) {
  const qString = _getQueryString({
    repo: repoName,
    is: ['issue', state],
  });

  return api.get('/search/issues?q=' + qString, {
    params: {
      page,
      per_page,
    },
  });
}

export default api;
