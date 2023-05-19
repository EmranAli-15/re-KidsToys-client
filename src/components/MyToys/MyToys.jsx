import React, { useContext, useEffect, useState } from 'react';
import MyToysRow from './MyToysRow';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);
    const [toyData, setToyData] = useState({});
    const { _id, price, quantity, details } = toyData

    useEffect(() => {
        fetch(`http://localhost:5000/userToy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user, myToys]);

    const handleSingleId = (id) => {
        fetch(`http://localhost:5000/singleToy/${id}`)
            .then(res => res.json())
            .then(data => setToyData(data))
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        const from = event.target;

        const price = from.price.value;
        const quantity = from.quantity.value;
        const details = from.details.value;

        const updated = { price, quantity, details }
        console.log(updated);

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/updateToy/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updated)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount === 1) {
                            Swal.fire(
                                'Updated!',
                                'Your file has been updated.',
                                'success'
                            )
                        }
                    })

            }
        })


    }


    // const handleEdit = (event) => {
    //     event.preventDefault()
    //     const from = event.target;
    //     const price = from.price.value;
    //     const quantity = from.quantity.value;
    //     const details = from.details.value;
    //     const updated = { price, quantity, details }
    //     console.log(updated);
    // }

    return (
        <>
            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='md:w-1/4'>Photo</th>
                            <th className='md:w-1/4'>Name</th>
                            <th className='md:w-1/4'>Price</th>
                            <th className='md:w-1/4 text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toys => <MyToysRow handleSingleId={handleSingleId} key={toys._id} toys={toys}></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="input-group">
                                <span className='w-32'>Price</span>
                                <input type="text" name="price" defaultValue={price ? price : ''} className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control my-6">
                            <label className="input-group">
                                <span className='w-32'>Quantity</span>
                                <input type="text" name="quantity" defaultValue={quantity ? quantity : ''} className="input input-bordered" />
                            </label>
                        </div>
                        <textarea name="details" defaultValue={details ? details : ''} className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                        <div className='text-right'>
                            <input type="submit" value="Ok!" />
                        </div>
                    </form>
                </label>
            </label>
        </>
    );
};

export default MyToys;