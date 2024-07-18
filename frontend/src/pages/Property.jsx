import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../utils/api'
import { PuffLoader } from 'react-spinners'
import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from 'react-icons/md'
import { CgRuler } from 'react-icons/cg'
import HeartBtn from '../components/HeartBtn'
import { FaLocationDot } from 'react-icons/fa6'
import Map from '../components/Map'
import useAuthCheck from '../hooks/useAuthCheck'
import { useAuth0 } from '@auth0/auth0-react'
import BookingModal from '../components/BookingModal'

const Property = () => {

    const { pathname } = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id))
    // console.log(data);

    const [modalOpened, setModalOpened] = useState(false)
    const { validateLogin } = useAuthCheck()
    const { user } = useAuth0()

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
                <img src={data?.image} alt={data?.title} className='rounded-xl max-h-[27rem] self-center w-full object-cover' />
                {/* like button */}
                <div className='absolute top-8 right-8'>
                    <HeartBtn />
                </div>
            </div>
            {/* container */}
            <div className='xl:flexBetween gap-8'>
                {/* left side */}
                <div className='flex-1'>
                    <h5 className='bold-16 my-1 text-secondary'>{data?.city}</h5>
                    <div className='flexBetween'>
                        <h4 className='medium-18 line-clamp-1'>{data?.title}</h4>
                        <div className='bold-20'>
                            ${data?.price}.00
                        </div>
                    </div>
                    {/* info */}
                    <div className='flex gap-x-4 py-2'>
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
                    <p className='pt-2 mb-4'>{data?.description}</p>
                    <div className='flexStart gap-x-2 my-5'>
                        <FaLocationDot />
                        <div>
                            {data?.address} {data?.city} {data?.country}
                        </div>
                    </div>
                    <div className='flexBetween'>
                        <button
                            onClick={() => {
                                validateLogin() && setModalOpened(true);
                            }} className='btn-secondary rounded-xl !py-[7px] !px-5 shadow-sm'>Book the Visit</button>

                        <BookingModal
                            opened={modalOpened}
                            setOpened={setModalOpened}
                            propertyId={id}
                            email={user?.email}
                        />
                    </div>
                </div>
                {/* right side */}
                <div className='flex-1'>
                    <Map address={data?.address} city={data?.city} country={data?.country} />
                </div>
            </div>
        </section>
    )
}

export default Property;