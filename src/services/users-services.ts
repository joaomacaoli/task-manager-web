const env = process.env.NEXT_PUBLIC_API_PATH;

export async function getAllUsers() {
  try {
    const response = await fetch(`${env}/users`, {
      next: {
        revalidate: 10
      }
    });
    const users = await response.json();
    return users
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(email: string, password: string) {
  try {
    const response = await fetch(`${env}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    // const result = await response.json();
    return true

  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
