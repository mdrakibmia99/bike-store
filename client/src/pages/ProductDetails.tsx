import bikeImge from '@/assets/images/home/bike-1.jpg'
import SelectImage from "@/components/Home/SelectImage";
const detailImage = [
  { id: 1, imageUrl: bikeImge, alt: "bike" },
  { id: 2, imageUrl: bikeImge, alt: "bike" },
  { id: 3, imageUrl: bikeImge, alt: "bike" },
  { id: 4, imageUrl: bikeImge, alt: "bike" },

];
const ProductDetails = () => {
  return (
    <div className='container mx-auto'>
      <SelectImage detailImage={detailImage} />
    </div>
  );
};

export default ProductDetails;
