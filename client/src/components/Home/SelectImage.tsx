import { useState } from "react";



const SelectImage = ({detailImage}) => {

    const [selectedImage, setSelectedImage] = useState('')
    const showPreview = (imageUrl) => {
        setSelectedImage(imageUrl);
    };
    return (
        <div className='sm:w-full lg:m-5/12 md:w-6/12 mr-3 ' >
            <div className='w-full '>
                <div className=" mt-4  border-black flex items-center justify-center rounded ">
                    <img src={selectedImage || detailImage[0].imageUrl} alt="Preview Image"
                        className="object-contain w-full md:w-10/12 lg:w-10/12 h-[300px] shadow-md" />
                </div>
                <div className="flex item-center">
                    <div style={{scrollbarWidth:"none"}} className="w-full h-full overflow-hidden flex justify-center  whitespace-nowrap">
                        {detailImage?.map((item, index) => (
                            <img
                                key={index}
                                src={item.imageUrl}
                                onClick={() => showPreview(item.imageUrl)}
                                className="m-2 shadow border-2 border-[black] hover:scale-105 ease-in-out duration-300  w-[65px] h-[65px] lg:w-[100px] lg:h-[100px] inline-block mx-3 mt-2" />
                        ))}
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default SelectImage