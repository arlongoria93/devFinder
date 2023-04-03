export async function load({ fetch }) {
  //fetch octo from github
  const octo = await fetch("https://api.github.com/users/octocat");
  const octoData = await octo.json();
  return {
    octoCat: octoData,
  };
}
