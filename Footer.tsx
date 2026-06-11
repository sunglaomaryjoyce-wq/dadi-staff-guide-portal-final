import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>{site.disclaimer}</p>
        <p>Built for Vercel / Next.js deployment. First version: static internal guide website.</p>
      </div>
    </footer>
  );
}
