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
