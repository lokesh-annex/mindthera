// Required for static export: output: export
import { serviceData } from "../serviceData";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import { notFound } from "next/navigation";


export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const data = serviceData[params.slug];
  if (!data) return notFound();

  return (
    <>
      <Breadcrumbs
        title="Service"
        items={[{ label: "Home", href: "/" }, { label: "Service" }]}
      />
      <section className="relative py-0">
      <span className="absolute top-20  end-0">
          <Image
            src="/images/shape-bg-f.png"
            width={350}
            height={525}
            alt="Background Copyright"
            priority
          />
            </span>
              {/* <div className="leaf-bg">
                    <Image
                      src="/images/misc/leaf-1.png"
                      width={100}
                      height={118}
                      className="absolute top-10 end-10  anim-up-down sm-hide"
                      alt=""
                    />
                  </div> */}
      <div className=" py-5 pb-0">
          <div className="card border-0  mb-0 ">
            <div className="row g-0 align-items-center">
                <h3 className="fw-bold text-primary mb-2" style={{ fontSize: "2.2rem" }}>{data.title}</h3>
                <h4 className="mb-3 text-danger" style={{ fontWeight: 600 }}>{data.subtitle}</h4>
                <div className="text-dark" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
                  {data.description}
                </div>
            </div>
        </div>
      </div>
      </section>
    </>
  );
}

