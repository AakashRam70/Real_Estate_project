import React from 'react'
import { useForm } from "@mantine/form"
import { Select, TextInput } from '@mantine/core';
import useCountries from '../hooks/useCountries';


const AddLocation = ({ propertyDetails, setPropertyDetails }) => {

    const { getAll } = useCountries();
    const form = useForm({
        initialValues: {
            country: propertyDetails?.country,
            city: propertyDetails?.city,
            address: propertyDetails?.address,
        },
        validate: {
            country: (value) => validateString(value),
            city: (value) => validateString(value),
            address: (value) => validateString(value)
        }
    })

    const { city, country, address } = form.values;
    return (
        <form>
            {/* left  */}
            <div>
                {/* inputs  */}
                <div>
                    <Select
                        w={"100%"}
                        withAsterisk
                        label="Country"
                        clearable
                        searchable
                        data={getAll()}
                        {
                        ...form.getInputProps("country", { type: "input" })
                        }

                    />
                    <TextInput
                        w={"100%"}
                        withAsterisk
                        label="City"
                        {
                        ...form.getInputProps("city", { type: "input" })
                        }
                    />
                    <TextInput
                        w={"100%"}
                        withAsterisk
                        label="Address"
                        {
                        ...form.getInputProps("address", { type: "input" })
                        }
                    />
                </div>
            </div>
            {/* right  */}
        </form>
    )
}

export default AddLocation