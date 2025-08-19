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
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="card border-0  mb-5 ">
            <div className="row g-0 align-items-center">
              {/* <div className="col-md-12 p-4">
                <Image
                  src={data.image}
                  width={400}
                  height={300}
                  alt={data.title}
                  className="rounded-4 shadow img-fluid mb-3"
                />
              </div> */}
              <div className="col-md-12 p-4">
                <h3 className="fw-bold text-primary mb-2" style={{ fontSize: "2.2rem" }}>{data.title}</h3>
                <h4 className="mb-3 text-danger" style={{ fontWeight: 600 }}>{data.subtitle}</h4>
                <hr className="my-3" />
                <div className="text-dark" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
                  {data.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

