const GITHUB_BASE_URL = 'https://api.github.com';

export async function getUserRepos(username) {
  const response = await fetch(`${GITHUB_BASE_URL}/users/${username}/repos?sort=updated_at&order=desc`);
  const data = await response.json()
  return data;
}
