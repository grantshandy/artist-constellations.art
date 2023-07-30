export const getMe = async (token: string) => {
  let response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  let json = await response.json();

  if (json.error) {
    if (json.error.status == 401) {
			userAccount.logout();
    }

    throw json.error;
  }

  return json;
}
