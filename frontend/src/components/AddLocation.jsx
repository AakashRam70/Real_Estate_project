import React from 'react'
import { useForm } from "@mantine/form"
import { Button, Group, Select, TextInput } from '@mantine/core';
import useCountries from '../hooks/useCountries';
import Map from './Map';

const validateString = (value) => {
    return value ? null : 'This field is required';
}

const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep }) => {

    const { getAll } = useCountries();
    const form = useForm({
        initialValues: {
            country: propertyDetails?.country || '',
            city: propertyDetails?.city || '',
            address: propertyDetails?.address || '',
        },
        validate: {
            country: validateString,
            city: validateString,
            address: validateString
        }
    })

    const { country, city, address } = form.values;

    const handleSubmit = () => {
        const { hasErrors } = form.validate();
        if (!hasErrors) {
            setPropertyDetails((prev) => ({ ...prev, country, city, address }));
            nextStep(); // Proceed to the next step
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            {/* left */}
            <div className='flexCenter'>
                <div className='flexCenter flex-1'>
                    {/* inputs */}
                    <div>
                        <Select
                            w={"100%"}
                            withAsterisk
                            label="Country"
                            clearable
                            searchable
                            data={getAll()}
                            {...form.getInputProps("country")}
                        />
                        <TextInput
                            w={"100%"}
                            withAsterisk
                            label="City"
                            {...form.getInputProps("city")}
                        />
                        <TextInput
                            w={"100%"}
                            withAsterisk
                            label="Address"
                            {...form.getInputProps("address")}
                        />
                    </div>
                </div>
                {/* right */}
                <div className='flex-1'>
                    <Map address={address} city={city} country={country} />
                </div>
            </div>

            <Group justify="center" mt="xl">
                <Button type='submit'>Next step</Button>
            </Group>
        </form>
    )
}

export default AddLocation;
