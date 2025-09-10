'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const API_URL = 'http://localhost:3001/api/pages/68bab47f8b6ef54bfa7a348d?depth=2&draft=false&trash=false';

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
        setData(json);
      
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const pickImage = (d: any) => {
    const candidate = d?.image || d?.image1 || d?.hero?.image || d?.media;
    if (!candidate?.url) return '';
    return candidate.url.startsWith('http') ? candidate.url : `http://localhost:3001${candidate.url}`;
  };


  const title = data?.title || '';
  const name = data?.label_text || '';
  const quote = data?.quote ||'';
  const imageUrl = data ? pickImage(data) : '';

  return (
    <section className="position-relative testimonial-section text-light">
      <div className="container">
        {loading && <p className="py-5 text-center m-0">Loading...</p>}
        {error && !loading && <p className="py-5 text-center text-danger m-0">Error: {error}</p>}
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
              {/* {role && <p className="small mb-2">{role}</p>} */}
            </div>
            <div className="col-lg-8 col-sm-8">
             
                <p className="mb20 fs-32 fw-600 lh-1-3" data-wow-delay=".2s">
                  {title}
                </p>
             
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
