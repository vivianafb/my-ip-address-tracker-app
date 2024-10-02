import { BannerHeader } from "@/components";
import { CardInformation } from "@/components";
import { Map } from "@/components";
export default function Home() {
  return (
    <div className="flex flex-wrap w-full flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <BannerHeader></BannerHeader>
      <CardInformation></CardInformation> 
      <Map></Map>
    </div>
  );
}
