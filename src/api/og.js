import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Default Title';
  const description = searchParams.get('desc') || 'Default Description';
  const image = searchParams.get('img') || 'https://site.com/default.jpg';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 60,
          fontWeight: 'bold',
          color: '#000',
        }}
      >
        <h1>{title}</h1>
        <p style={{ fontSize: 40 }}>{description}</p>
        <img src={image} width={200} height={200} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
