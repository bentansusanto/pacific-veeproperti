import type { Metadata } from "next";
import MockLayout from "@/components/layouts/layout";
import PropertiesPage from "@/components/modules/properties/PropertiesPage";

export const metadata: Metadata = {
  title: "VeeProperti - Properties",
};

export default function PropertiPage() {
  return (
    <MockLayout>
      <PropertiesPage />
    </MockLayout>
  );
}
