import React, { useState } from 'react'

const UploadImage = ({
    propertyDetails,
    setPropertyDetails,
    prevStep,
    nextStep }) => {

    const [imageURL, setImageURL] = useState(propertyDetails.image)

    return (
        <div>
            {
                !imageURL ? (
                    <div className='flexCenter flex-col w-3/4 h-[21rem] border-dashed border-2 cursor-pointer'>
                        <MdOutlineCloudUpload size={44} color='gray'/>


                ): ()
            }
        </div>
    )
}

export default UploadImage