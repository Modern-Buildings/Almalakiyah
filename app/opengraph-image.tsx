import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const alt = 'Almalakiyah Investment | الملكية للاستثمار';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Almalakiyah Investment | الملكية للاستثمار';
  const description = searchParams.get('description');

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #DDC7B5, #F7F5F2)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: '#770705',
          textAlign: 'center',
          padding: '40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22h20L12 2z" fill="#770705"/>
          </svg>
          <span style={{ fontSize: '48px', fontWeight: 'bold', marginLeft: '20px' }}>
            الملكية للاستثمار
          </span>
        </div>
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#0F0F0F',
            maxWidth: '900px',
            lineHeight: 1.2,
            marginBottom: description ? '24px' : '0',
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            style={{
              fontSize: '32px',
              color: '#4A4A4A',
              maxWidth: '800px',
              lineHeight: 1.5,
            }}
          >
            {description}
          </p>
        )}
      </div>
    ),
    {
      ...size,
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=0, must-revalidate',
      },
    }
  );
}
