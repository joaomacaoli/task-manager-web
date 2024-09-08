const env = process.env.NEXT_PUBLIC_API_PATH

export async function login(email: string, password: string) {
  try {
    const response = await fetch(`${env}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const result = await response.json();
    return result.accessToken;

  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
