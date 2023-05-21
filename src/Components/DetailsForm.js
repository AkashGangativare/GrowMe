import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function DetailsForm() {
    const navigate = useNavigate();

    const [fullName, setfullName] = useState("")
    const [Email, setEmail] = useState("")
    const [mobileNo, setmobNo] = useState("")
    const [detailsList, setdetailsList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("ContactDetails")
        if (arr) {
            let obj = JSON.parse(arr)
            setdetailsList(obj)
        }
    }, [])

    const handleSave = () => {
        let detailsObj = {}
        if (fullName && Email && mobileNo) {
            detailsObj["Name"] = fullName;
            detailsObj["Email"] = Email;
            detailsObj["MobileNo"] = mobileNo;
            save(detailsObj);
            navigate('/dashboard')
        } else {
            alert("Please enter all fields !")
        }
    }

    const save = (detailsObj) => {
        let temptaskList = detailsList;
        temptaskList.push(detailsObj);
        localStorage.setItem("ContactDetails", JSON.stringify(temptaskList))
        setdetailsList(detailsList);

    }

    return (
        <div className="conatiner">

            <div className='Contact-details'>

                <form className='details'>
                    <h2>Contact Details</h2>
                    <div className="name">
                        <input type="text" onChange={(e) => { setfullName(e.target.value) }} value={fullName} className="input1" id="exampleInputEmail1" placeholder='Full Name' />
                    </div>
                    <div className="email">
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} value={Email} className="input2" id="exampleInputPassword1" placeholder='Enter Email' />
                    </div>
                    <div className="mobile">

                        <input type="text" onChange={(e) => { (setmobNo(e.target.value)) }} value={mobileNo} className="input3" id="exampleCheck1" placeholder='Enter Mobile No.' />
                    </div>
                    <Button variant="contained" sx={{ color: 'white', backgroundColor: 'black' }} onClick={handleSave}>Submit</Button>
                </form>

            </div>
        </div>
    )
}

export default DetailsForm
