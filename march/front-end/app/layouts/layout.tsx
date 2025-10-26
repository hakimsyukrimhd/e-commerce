import { Outlet } from "react-router";
import Navbar from "~/components/navbar";
import FooterBanner from "~/components/footer-banner";
import AdsBanner from "~/components/ads-banner";
import Footer from "~/components/footer";

export default function Layout() {
  return (
    <div className="bg-neutral-200">
      <Navbar />
      <div className="w-4/5 m-auto mt-5">
        <Outlet />
        <FooterBanner />
      </div>
      <AdsBanner />
      <Footer />
    </div>
  );
}
