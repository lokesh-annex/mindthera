import BlogList from "@/components/BlogList";
import Breadcrumbs from "@/components/Breadcrumbs";
export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
                title="Blog"
                items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
              />
    <section>
      <div className="container">
        <div className="row g-4 gy-5">
          <BlogList />
        
        </div>
      </div>
    </section>
    </>
  );
}