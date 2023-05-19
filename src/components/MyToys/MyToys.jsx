import React, { useContext, useEffect, useState } from 'react';
import MyToysRow from './MyToysRow';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);
    const [update, setUpdate] = useState({});
    const { _id, price, quantity, details } = update;


    useEffect(() => {
        fetch(`http://localhost:5000/userToy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user]);

    const handleEdit = (id) => {
        fetch(`http://localhost:5000/singleToy/${id}`)
            .then(res => res.json())
            .then(data => {
                setUpdate(data);
                console.log(data);
            })
    }

    const confirmEdit = (event) => {
        event.preventDefault()
        const from = event.target;

        const upPrice = from.price.value;
        const upQuantity = from.quantity.value;
        const upDetails = from.details.value;

        const updated = { upPrice, upQuantity, upDetails };

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
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
                            myToys.map(toys => <MyToysRow handleEdit={handleEdit} key={toys._id} toys={toys}></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <form onSubmit={confirmEdit} className="modal-box relative" htmlFor="">
                    <div className="form-control">
                        <label className="input-group">
                            <span className='w-32'>Price</span>
                            <input type="text" name="price" defaultValue={price} className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control my-2">
                        <label className="input-group">
                            <span className='w-32'>Quantity</span>
                            <input type="text" name="quantity" defaultValue={quantity} className="w-full input input-bordered" />
                        </label>
                    </div>
                    <textarea className="textarea w-full textarea-bordered" name="details" defaultValue={details}></textarea>
                    <div className="modal-action">
                        <label htmlFor="my-modal-4" className="btn btn-sm my-btn-right">
                            <input type="submit" value="ok" />
                        </label>
                    </div>

                </form>
            </label>
        </>
    );
};

export default MyToys;