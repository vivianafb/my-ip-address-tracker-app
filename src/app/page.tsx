import { BannerHeader } from "@/components";
import { CardInformation } from "@/components";
import { Map } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </Head>
      <div className="flex flex-wrap w-full flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <BannerHeader></BannerHeader>
        <CardInformation></CardInformation>
        <Map></Map>
      </div>
    </>
  );
}
