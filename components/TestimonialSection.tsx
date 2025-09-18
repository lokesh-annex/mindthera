'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68bab47f8b6ef54bfa7a348d?depth=2&draft=false&trash=false`;

// Safe URL join (base + path)
const buildUrl = (base: string, path: string) => {
  if (!base) return path;
  return `${base.replace(/\/$/, '')}${path}`;
};

const TestimonialSection = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch');
        const json = await res.json();
        console.log('✅ API Response:', json);

        // 👉 pick image from mediaBlock
        const mediaBlock = json?.layout?.find(
          (block: any) => block.blockType === 'mediaBlock'
        );
        const media = mediaBlock?.locales?.[0]?.media;

        console.log('🖼 Picked Media:', media);

        setData({
          ...json,
          mediaImage: media || null,
        });
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const title = data?.title || '';
  const name = data?.label_text || '';
  const quote = data?.quote || '';

  // ✅ Use square size if available, else main url
  const media = data?.mediaImage;
  const imageUrl = media
    ? buildUrl(
        process.env.NEXT_PUBLIC_API_BASE_URL || '',
        media?.sizes?.square?.url || media?.url
      )
    : '';

  return (
    <section className="position-relative testimonial-section text-light">
      <div className="container">
        {loading && (
          <div className="py-5 text-center d-flex align-items-center justify-content-center">
            <div
              className="spinner-border spinner-border-sm text-light me-2"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="m-0">Lade Bewertungen...</p>
          </div>
        )}

        {error && !loading && (
          <p className="py-5 text-center text-danger m-0">Error: {error}</p>
        )}

        {!loading && !error && data && (
          <div className="row g-4 gx-5 relative z-index-1000 align-items-center">
            <div className="col-lg-2 offset-lg-1 col-sm-4 text-center">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  width={300}
                  height={300}
                  className="img-fluid circle object-cover"
                  alt={title || 'Testimonial'}
                />
              ) : (
                <Image
                  src="/images/team/placeholder.webp"
                  width={300}
                  height={300}
                  className="img-fluid circle object-cover"
                  alt="Placeholder"
                />
              )}

              {name && <h5 className="mt-3 mb-0">{name}</h5>}
              <p className="small mb-2">CEO</p>
            </div>

            <div className="col-lg-8 col-sm-8">
              <p className="mb20 fs-32 fw-600 lh-1-3" data-wow-delay=".2s">
                {title}
              </p>
              {quote && <p className="fs-18 fst-italic">“{quote}”</p>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
