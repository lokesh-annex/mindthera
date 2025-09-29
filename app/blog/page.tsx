import BlogList from "@/components/BlogList";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
                title="Blog"
                items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
              />
    <section>
      <span className="absolute top-20 start-0">
                                 <Image
                                   src="/images/bg-2-copyright.webp"
                                   width={303}
                                   height={550}
                                    className="blog-copyright"
                                   alt="Background Copyright"
                                   priority
                                 />
                                   </span>
      <div className="container">
        <div className="row g-4 gy-5">
          <BlogList />
        
        </div>
      </div>
    </section>
    </>
  );
}