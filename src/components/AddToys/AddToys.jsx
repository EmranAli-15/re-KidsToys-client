import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AddToys = () => {
    useTitle('Add Toys')
    const { user } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const from = event.target;

        const name = from.name.value;
        const photoURL = from.photoURL.value;
        const category = from.category.value;
        const price = parseInt(from.price.value);
        const quantity = parseInt(from.quantity.value);
        const rating = parseInt(from.rating.value);
        const seller = from.seller.value;
        const email = from.email.value;
        const details = from.details.value;

        const toyInfo = { name, photoURL, price, category, quantity, rating, seller, email, details };
        fetch('https://toy-server-omega.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Product Added!',
                        'Happy Store!',
                        'success'
                    )
                }
            })
    }
    return (
        <form onSubmit={handleSubmit} className='my-12 px-4'>
            <div className='md:flex space-y-4 md:space-y-0 gap-8'>
                <div className="form-control md:w-1/2">
                    <label className="input-group input-group-vertical">
                        <span>Toy Name</span>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="input-group input-group-vertical">
                        <span>Toy Photo</span>
                        <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                    </label>
                </div>
            </div>
            <div className='md:flex space-y-4 md:space-y-0 gap-8 my-4'>
                <div className="form-control md:w-1/2">
                    <label className="input-group input-group-vertical">
                        <span>Toy Price</span>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="input-group input-group-vertical">
                        <span>Toy Category</span>
                        <select name="category" className="select select-bordered w-full">
                            <option>Science Kits</option>
                            <option>Math Learning Toys</option>
                            <option>Engineering Tools</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className='md:flex space-y-4 md:space-y-0 gap-8'>
                <div className="form-control md:w-1/2">
                    <label className="input-group input-group-vertical">
                        <span>Toy Quantity</span>
                        <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" required />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="input-group input-group-vertical">
                        <span>Toy Rating</span>
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                    </label>
                </div>
            </div>
            <div className='md:flex space-y-4 md:space-y-0 gap-8 my-4'>
                <div className="form-control md:w-1/2">
                    <label className="input-group input-group-vertical">
                        <span>Seller Name</span>
                        <input type="text" name="seller" value={user ? user.displayName : ''} disabled className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="input-group input-group-vertical">
                        <span>Seller Email</span>
                        <input type="text" name="email" value={user ? user.email : ''} disabled className="input input-bordered" />
                    </label>
                </div>
            </div>
            <textarea placeholder="Details about this toy" name="details" className="textarea textarea-bordered textarea-lg w-full" required ></textarea>
            <button className="btn btn-block bg-blue-500 hover:bg-[#FF3811] border-0 my-8">SUBMIT</button>
        </form>
    );
};

export default AddToys;