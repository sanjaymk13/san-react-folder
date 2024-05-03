
import { Card } from "primereact/card"
import "./addstudent.css"

// import 'primeflex/primeflex.css'
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Calendar } from "primereact/calendar";
import React, { useRef } from 'react'
import { Message } from 'primereact/message';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";




function AddStudent() {


    const [formdata, setformdata] = useState({

        roll_number: '',
        name: '',

        date_of_birth: '',
        gender: '',

        class: '',
        section: '',
        blood_Group: '',

        father_name: '',
        mother_name: '',

        father_occupation: '',
        father_phone: '',
        address: '',


    })

    useEffect(() => {
        axios.get('http://localhost:3000/students')
            .then((res) => {
                let predata = (res.data)
                let prelastdata = predata[predata.length - 1]
                let lastId = prelastdata.roll_number

                let newId = String(parseInt(lastId) + 1).padStart(3, '0');

                setformdata({
                    ...formdata,
                    roll_number: newId
                })
            })

    }, [])


    const handler = (e) => {
        let copydata = { ...formdata };
        copydata[e.target.id] = e.target.value
        setformdata(copydata)
    }



    const emailIsValid = (email) => {
        const frmnt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return frmnt.test(email);
    };
    const [errbrdr, seterrbrdr] = useState({
        err1: false,
        err2: false,
        err3: false,
        err4: false,
        err5: false,
        err6: false,


    })
    const submitHandler = () => {

        const isError =
            formdata.name.trim().length === 0 ||
            formdata.date_of_birth.trim().length === 0 ||
            formdata.father_name.trim().length === 0 ||
            formdata.mother_name.trim().length === 0 ||
            !emailIsValid(formdata.email) ||
            // formdata.contact.mobile.trim().length === 0 ||
            formdata.address.trim().length === 0;

        if (isError) {
            // Set error states and show error message
            seterrbrdr({
                err1: formdata.name.trim().length === 0,
                err2: formdata.date_of_birth.trim().length === 0,
                err3: formdata.father_name.trim().length === 0,
                err4: formdata.mother_name.trim().length === 0,
                err5: !emailIsValid(formdata.email),
                // err6: formdata.contact.mobile.trim().length === 0,
                err7: formdata.address.trim().length === 0,
            });
            showToast('error', 'Please fill out all mandatory fields');
        } else {
            // All fields are filled, proceed with data submission
            axios.post('http://localhost:3000/students', formdata)
                .then((response) => {
                    showToast('success', 'Data submitted successfully');
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000);
                })
                .catch((error) => {
                    showToast('error', 'Error submitting data. Please try again later.');
                });
        }
    };





    const toast = useRef(null);
    const showToast = (severity, detail) => {
        toast.current.show({ severity, detail });
    };
    return <div className="whlo">
        <Toast ref={toast} />
        <Card title={`ROLL NUMBER: ${formdata.roll_number}`} className="formcrd">

            <div >

                <div className="llt">
                <div >
                    <label htmlFor="name" className="name">Name:</label>
                    <InputText id="name"
                        type="text"
                        onChange={handler} className="namein"
                        />
                    {errbrdr.err1 && <Message severity="error" text="please fill out this field" />}
                </div>

                <div >
                    <label htmlFor="date of birth" className="date" >Date Of Birth:</label>
                    <input id="date_of_birth"
                        type="date"
                        onChange={handler} className="datein"
                        />
                    {errbrdr.err2 && <Message severity="error" text="please fill out this field" />}
                </div>

                <div >
                    <label htmlFor="bloodGroup" className="blood">Blood Group</label>
                    <input id="blood_group"
                        type="text"
                        onChange={handler} className="bloodin"
                         />
                </div>
              
                <div >
                    <label htmlFor="class" className="class">class</label>
                    <input id="class"
                        name="class"
                        type="text"
                        onChange={handler} className="classin"
                        />

                </div>
                <div >
                    <label htmlFor="section" className="section">Section</label>
                    <select id="section" onChange={handler} className="sectionin" >
                        <option>select</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                </div>



                <div >
                    <label htmlFor="fatherName" className="fname">Father name</label>
                    <InputText id="father_name"
                        type="text"
                        onChange={handler} className="fin"
                         />
                    {errbrdr.err3 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div >
                    <label htmlFor="motherName" className="mname">Mother Name</label>
                    <InputText id="mother_name"
                        type="text"
                        onChange={handler} className="min"
                        />
                    {errbrdr.err4 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div>
                    <label htmlFor="father" className="fatherocc">Father occupation</label>
                    <input id="father_occupation" name="occupation" onChange={handler} type="text"  className="foin" />
                </div>
                <div >
                    <label htmlFor="father_phone" className="fphone" >Father Phone Number:</label>
                    <input id="father_phone"
                        type="number"
                        onChange={handler} className="fpin"
                        />
                    {errbrdr.err2 && <Message severity="error" text="please fill out this field" />}
                </div>

                <div>
                    <label htmlFor="email" className="email">Email Id</label>
                    <input id="email" name="contact" onChange={handler} type="text"  className="emailin" />
                    {errbrdr.err5 && <Message severity="error" text="please fill out this field" />}
                </div>

                <div >
                    <label htmlFor="address"  className="address">Address</label>
                    <textarea id="address" onChange={handler} type="text" rows="4"  className="addin"></textarea>
                    {errbrdr.err6 && <Message severity="error" text="please fill out this field" />}
                </div>
                </div>
                <div >
                    <a href="../Admin-panel"><Button label="GO BACK" severity="secondary" className='but1' icon="pi pi-arrow-circle-left" /></a>
                </div>
                <div >
                    <Button label="SUBMIT"
                        severity="success"
                        onClick={submitHandler}
                        className='but2' icon="pi pi-check-circle" />
                </div>
            </div>


        </Card>
    </div>


}
export default AddStudent
