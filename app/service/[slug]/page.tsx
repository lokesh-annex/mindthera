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
        title="Meine Angebote"
        items={[{ label: "Home", href: "/" }, { label: "Meine Angebote" }]}
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
        <div className=" py-5 pb-0">
          <div className="card border-0  mb-0 ">
            <div className="row g-0 align-items-center">
              <div
                className="text-dark"
                style={{ fontSize: "1.15rem", lineHeight: 1.7 }}
              >
                {data.description}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
