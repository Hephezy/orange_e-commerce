"use client";

import { updateDescription } from '@/lib/action';
import { useState } from 'react';

interface Props {
    description: string;
    itemId: string;
}

const EditDescription = ({ description, itemId }: Props) => {

    const [newDescription, setNewDescription] = useState(description);

    const handleChange = (event: any) => {
        setNewDescription(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const res = await updateDescription({
            itemId: itemId,
            newDescription: newDescription,
        });

        if (res?.ok) {
            alert("Product description updated successfully");
        } else {
            alert("Failed to update product description");
        }

    };

    return (
        <div className='flex w-full'>
            <form className='flex w-full flex-col gap-6' onSubmit={handleSubmit}>
                <textarea
                    value={newDescription}
                    onChange={handleChange}
                    required
                    className='w-full h-[250px] border-primary-500 border px-5 py-2.5 mt-6'
                />
                <button type="submit" className='bg-black text-primary-500 p-2.5'>Update Description</button>
            </form>
        </div>
    );
};

export default EditDescription;