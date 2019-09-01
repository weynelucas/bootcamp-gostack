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
      args.append(`${key}:${value}`);

      return args;
    }, [])
    .join('+');
}

export function searchRepoIssues(
  repoName,
  { page = 1, per_page = 5, state = 'open' }
) {
  return api.get('/search/issues', {
    params: {
      q: _getQueryString({ repo: repoName, is: 'issue', is: state }),
      page,
      per_page,
    },
  });
}

export default api;
