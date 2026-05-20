import type { Metadata } from "next";
import MockLayout from "@/components/layouts/layout";
import AboutUsPage from "@/components/modules/about/AboutUsPage";

export const metadata: Metadata = {
  title: "VeeProperti - About Us",
};

export default function AboutPage() {
  return (
    <MockLayout>
      <AboutUsPage />
    </MockLayout>
  );
}
