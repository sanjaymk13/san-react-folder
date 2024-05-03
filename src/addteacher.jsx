
import { Card } from "primereact/card"

import "./addteacher.css"


import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar } from "primereact/calendar";


import React, { useRef } from 'react';

import { Message } from 'primereact/message';


import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";




function AddTeacher() {
    const [dates, setdates] = useState(null);

    const experHandle = (e) => {
        setdates(e.value);
        if (e.value && e.value.length === 2) {
            let startYear = e.value[0].getFullYear();
            let endYear = e.value[1].getFullYear();
            let years = endYear - startYear
            let startMonth = e.value[0].getMonth() + 1
            let endMonth = e.value[1].getMonth() + 1
            let months = endMonth - startMonth
            setformdata({
                ...formdata,
                experience: `${years} yrs and ${months} months`
            })
        }
    }

    const [errbrdr, seterrbrdr] = useState({
        err1: false,
        err2: false,
        err3: false,
        err4: false,
        err5: false,

    })

    const toast = useRef(null);
    const showToast = (severity, detail) => {
        toast.current.show({ severity, detail });
    };
    const emailIsValid = (email) => {
        const frmnt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return frmnt.test(email);
    };

    const submitHandler = () => {

        const isError =
            formdata.name.trim().length === 0 ||
            formdata.experience.trim().length === 0 ||
            formdata.qualification.trim().length === 0 ||
            !emailIsValid(formdata.email) ||
            formdata.contactNumber.phone_number.trim().length === 0;

        if (isError) {
            // Set error states and show error message
            seterrbrdr({
                err1: formdata.name.trim().length === 0,
                err2: formdata.experience.trim().length === 0,
                err3: formdata.qualification.trim().length === 0,
                err4: !emailIsValid(formdata.email),
                err5: formdata.phone_number.trim().length === 0,
            });
            showToast('error', 'Please fill out all mandatory fields');
        } else {
            // All fields are filled, proceed with data submission
            axios.post('http://localhost:3000/teachers', formdata)
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


    const [formdata, setformdata] = useState({
        employee_id: '',

        name: "",

        gender: "",
        qualification: "",
        address: "",
        date_of_birth: "",
        class:"",

        phone_number: "",
        core_Subject: " ",
        email: "",
        marital_Status: "",
        qualification: ""

    })
    useEffect(() => {
        axios.get('http://localhost:3000/teachers')
            .then((res) => {
                let predata = (res.data)
                let prelastdata = predata[predata.length - 1]
                let lastId = prelastdata.employee_id

                let newId = String(parseInt(lastId) + 1).padStart(3, '0');

                setformdata({
                    ...formdata,
                    employee_id: newId
                })
            })

    }, [])

    const handler = (e) => {
        let copydata = { ...formdata };
        copydata[e.target.id] = e.target.value
        setformdata(copydata)
    }
    const handler2 = (e) => {
        let copydata2 = { ...formdata[e.target.name] };
        copydata2[e.target.id] = e.target.value
        setformdata({
            ...formdata,
            [e.target.name]: copydata2
        });
    }


    return <div>
        <Toast ref={toast} />
        <Card title={`Employee Id: ${formdata.employee_id}`} className="formcrd">

            <div  className="whlo">
                <div className="pop">
                <div >
                    <label htmlFor="name" className="name1">name</label>
                    <InputText id="name"
                        type="text"
                        onChange={handler} className="name1in"
                        />
                    {errbrdr.err1 && <Message severity="error" text="please fill out this field" />}
                </div>

                <div>
                    <label htmlFor="qualification"  className="qua">Qualification</label>
                    <input id="qualification"
                        type="text"
                        onChange={handler} className="quain"
                        />
                    {errbrdr.err3 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div>
                    <label htmlFor="phone_number"  className="phn">phone number</label>
                    <input id="phone_number"
                        name="contactNumber"
                        type="number"
                        onChange={handler2} className="phnin"
                         />
                    {errbrdr.err5 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div >
                    <label htmlFor="dob" className="dob">Date Of Birth</label>
                    <input id="date_of_birth"
                        type="date"
                        onChange={handler} className="dobin"
                        />
                </div>
                <div >
                    <label htmlFor="class" className="class1">Class:</label>
                    <input id="class"
                        type="number"
                        onChange={handler} className="class1in"
                        />
                </div>
                <div >
                    <label htmlFor="gender" className="gen">Gender</label>
                    <select id="gender" onChange={handler} className="genin" >
                        <option>select</option>
                        <option>male</option>
                        <option>female</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="coreSubject" className="core">Core Subject</label>
                    <input id="core_subject"
                        type="text"
                        onChange={handler} className="corein"
                        />
                </div>


                <div >
                    <label htmlFor="address" className="add1">Address</label>
                    <textarea id="address" onChange={handler} type="text" rows="4"  className="add1in"></textarea>
                </div>
                <div >
                    <label htmlFor="emailId"  className="email1">Email Id</label>
                    <input id="email" onChange={handler} type="email" className="email1in"/>
                    {errbrdr.err4 && <Message severity="error" text="please fill out this field" />}
                </div>


                <div >
                    <label htmlFor="maritalStatus" className="mar">Marital Status</label>
                    <input id="marital_status" onChange={handler} type="text" className="marin" />
                </div>

                <div >
                    <label htmlFor="experience"  className="exp">Experience</label>
                    <Calendar value={dates}
                        onChange={experHandle}
                        id="experience"
                       
                        selectionMode="range" readOnlyInput hideOnRangeSelection className="exin" />
                    {errbrdr.err2 && <Message severity="error" text="please fill out this field" />}
                </div>


</div>

                <div className="md:col-6 text-center">
                    <a href="../Admin-panel"><Button label="GO BACK" severity="secondary"  icon="pi pi-arrow-circle-left" /></a>
                </div>
                <div className="md:col-6 text-center">
                    <Button label="SUBMIT"
                        severity="success"
                        onClick={submitHandler}
                        icon="pi pi-check-circle" />
                </div>


            </div>







        </Card>
    </div>



}
export default AddTeacher
