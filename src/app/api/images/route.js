const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;

export async function GET() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${clientId}&count=2`
  );
  const images = await response.json();

  return new Response(JSON.stringify(images));
}
