import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import PostModal from './PostModal';
import { toast } from 'react-toastify';

const CreatePost = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [checkboxFilter, setCheckboxFilter] = useState([]);


    const handleCheckbox = (e) => {
        const facility = e.target.value;

        if (e.target.checked) {
            setCheckboxFilter([...checkboxFilter, facility]);
        } else {
            setCheckboxFilter(checkboxFilter?.filter(category => category !== e.target.value));
        };
    };

    const postSubmit = e => {
        e.preventDefault();
        const customername = e.target.customername.value;
        const checkindate = e.target.checkindate.value;
        const checkoutdate = e.target.checkoutdate.value;
        const roomtype = e.target.roomtype.value;
        const numberofpersons = e.target.numberofpersons.value;
        const cfacility = checkboxFilter;

        const data = { customername, checkindate, checkoutdate, roomtype, numberofpersons, cfacility };

        console.log(data);

        fetch('http://localhost:5000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then((data) => {

                console.log('Success:', data);
                toast("Data add Successfully !");
                e.target.reset();

            })

    }

    return (
        <div>
            <div className='w-50 p-3 mx-auto'>
                <Form className='d-flex flex-column text-start justify-content-center m-4' onSubmit={postSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <label className='pb-2 px-1' htmlFor='name'>Customer Name</label>
                        <Form.Control
                            type="text"
                            name='customername'
                            id='customername'
                            placeholder="Enter Customers Name"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <label className='pb-2 px-1' htmlFor='ckindate'>Check in Date</label>
                        <Form.Control
                            type="date"
                            id='ckindate'
                            name='checkindate'
                            placeholder="Enter Check in Date"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <label className='pb-2 px-1' htmlFor='ckoutdate'>Check out Date</label>
                        <Form.Control
                            type="date"
                            id='ckoutdate'
                            name='checkoutdate'
                            placeholder="Enter Check out Date"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <label className='pb-2 px-1' htmlFor='roomtype'>Rome Type</label>
                        <select name='roomtype' class="form-select" aria-label="Default select example">
                            <option selected>Select Room Type</option>
                            <option value="single">Single</option>
                            <option value="double">Double</option>
                            <option value="triple">Triple</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <label className='pb-2 px-1' htmlFor='noperson'>Number of Persons</label>
                        <select name='numberofpersons' class="form-select" aria-label="Default select example">
                            <option selected>Select Number of Persons</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <label className='pb-2 px-1' htmlFor='cfacility'>Choose Facilities</label>
                        <div class="form-check">
                            <input onChange={handleCheckbox} class="form-check-input" type="checkbox" value="Spa" id="Spa" />
                            <label class="form-check-label" for="Spa">
                                Spa
                            </label>
                        </div>
                        <div class="form-check">
                            <input onChange={handleCheckbox} class="form-check-input" type="checkbox" value="Pool" id="Pool" />
                            <label class="form-check-label" for="Pool">
                                Pool
                            </label>
                        </div>
                        <div class="form-check">
                            <input onChange={handleCheckbox} class="form-check-input" type="checkbox" value="Buffet" id="Buffet" />
                            <label class="form-check-label" for="Buffet">
                                Buffet
                            </label>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Control
                            type="submit" value="Post"
                            className="btn bg-primary text-white"
                        />
                    </Form.Group>


                </Form>
            </div>
            {show && <PostModal show={show} setShow={setShow} />}
        </div>
    );
};

export default CreatePost;