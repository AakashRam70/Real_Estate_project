import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../utils/api'
import { PuffLoader } from 'react-spinners'
import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from 'react-icons/md'
import { CgRuler } from 'react-icons/cg'
import HeartBtn from '../components/HeartBtn'

const Property = () => {

    const { pathname } = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id))
    // console.log(data);

    if (isLoading) {
        return (
            <div className='h-64 flexCenter'>
                <PuffLoader height='80' widht='80' radius={1} color='#555' aria-label='puff-loading' />
            </div>
        )
    }
    if (isError) {
        return (
            <div className='h-64 flexCenter'>
                Error while fetching data
            </div>
        )
    }
    return (
        <section className='max-padd-container my-[99px]'>
            <div className='pb-2 relative'>
                <img src={data?.image} alt={data?.title} className='rounded-xl' />
                {/* like button */}
                <div className='absolute top-4 right-6'>
                    <HeartBtn />
                </div>
            </div>
            <h5 className='bold-16 my-1 text-secondary'>{data?.city}</h5>
            <h4 className='medium-18 line-clamp-1'>{data?.title}</h4>
            {/* info */}
            <div className='flex gap-x-2 py-2'>
                <div className='flexCenter gap-x-2 border-slate-900/50 pr-4 font-[500'>
                    <MdOutlineBed />{data?.facilities.bedrooms}
                </div>

                <div className='flexCenter gap-x-2 border-slate-900/50 pr-4 font-[500'>
                    <MdOutlineBathtub />{data?.facilities.bathrooms}
                </div>

                <div className='flexCenter gap-x-2 border-slate-900/50 pr-4 font-[500'>
                    <MdOutlineGarage />{data?.facilities.parkings}
                </div>

                <div className='flexCenter gap-x-2 border-slate-900/50 pr-4 font-[500]'>
                    <CgRuler /> 400
                </div>
            </div>
            <p className='pt-2 mb-4 line-clamp-2'>{data?.description}</p>
            <div className='flexBetween'>
                <div className='bold-20'>
                    ${data?.price}.00
                </div>
                <button className='btn-secondary rounded-xl !py-[7px] !px-5 shadow-sm'>View Details</button>
            </div>
        </section>
    )
}

export default Property;