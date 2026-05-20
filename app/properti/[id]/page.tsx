import type { Metadata } from "next";
import MockLayout from "@/components/layouts/layout";
import PropertyDetailPage from "@/components/modules/properties/PropertyDetailPage";
import { properties } from "@/data/properties";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((p) => p.id === parseInt(id, 10));
  return {
    title: property ? `VeeProperti - ${property.title}` : "VeeProperti - Property Detail",
  };
}

export default async function PropertyRoute({ params }: PageProps) {
  const { id } = await params;
  const propertyId = parseInt(id, 10);
  const property = properties.find((p) => p.id === propertyId);

  if (!property) {
    notFound();
    return null;
  }

  return (
    <MockLayout>
      <PropertyDetailPage property={property} />
    </MockLayout>
  );
}
