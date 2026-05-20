import type { Metadata } from "next";
import MockLayout from "@/components/layouts/layout";
import ContactUsPage from "@/components/modules/contact-us/ContactUsPage";

export const metadata: Metadata = {
  title: "VeeProperti - Contact Us",
};

export default function ContactUs() {
  return (
    <MockLayout>
      <ContactUsPage />
    </MockLayout>
  );
}
