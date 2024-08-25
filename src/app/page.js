import Bluten from "@/components/Bluten";
import Breadcrums from "@/components/Breadcrums";
import CardSection from "@/components/CardSection";
import FilterSidebar from "@/components/FilterSidebar";
import Footer from "@/components/Footer";
import PageNo from "@/components/PageNo";


export default function Home() {
  return (
    <>
      <Breadcrums />
      <Bluten />
      <div className="flex flex-col md:flex-row container mx-auto px-4 py-8">
        <FilterSidebar />
        <CardSection />
      </div>
      <PageNo/>
      <Footer/>
    </>
  );
}
