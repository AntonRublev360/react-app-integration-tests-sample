import axios from 'axios';

const GITHUB_BASE_URL = 'https://api.github.com';
const axiosGithub = axios.create({
  baseURL: GITHUB_BASE_URL
});

export async function getUserRepos(username) {
  const response = await axiosGithub.get(`/users/${username}/repos?sort=updated_at&order=desc`);
  return response.data;
}
