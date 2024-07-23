import React from 'react'
import { useForm } from "@mantine/form"

const AddLocation = ({ propertyDetails, setPropertyDetails }) => {

    const form = useForm({
        initialValues: {
            country: propertyDetails?.country,
            city: propertyDetails?.city,
            address: propertyDetails?.address,
        },
        validate: {
            country: (value) => validateString(value)
        }
    })

    return (
        <form>
         // left
            <div>

            </div>
        // right
        </form>
    )
}

export default AddLocation