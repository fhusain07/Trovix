import { useParams } from "react-router-dom";
import { services } from "@/data/site";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import NotFound from "@/NotFound";
export default function ServiceDetail({
  serviceSlug,
}: {
  serviceSlug?: string;
}) {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === (serviceSlug ?? slug));
  return service ? <ServicePageTemplate service={service} /> : <NotFound />;
}
