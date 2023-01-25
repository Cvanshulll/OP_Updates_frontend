import React from 'react'

export default function OpItems(props) {


    // function if location is remote change color to green
    function locationColor() {
        if (props.location === "Remote") {
            return "red"
        }
        else {
            return "black"
        }
    }

    // function to change apply button text
    function applyBtnText() {
        if (props.jobLink === "null") {
            return "Not Available"
        }
        else {
            return "Apply"
        }
    }

    // let [applyBtn, setApplyBtn] = useState(" ")


    // const handleCheckbox = (event) => {
    //     if (event.target.checked) {
    //         setApplyBtn("Applied")
    //     }
    //     else {
    //         setApplyBtn("Apply")
    //     }
    // }


    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                {/* <img src="/" className="card-img-top" alt={imageUrl} /> */}
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <hr />
                    <p style={{ color: "blue" }}><i>{props.role}</i></p>
                    <p><strong>Batch</strong>: <i>{props.batch}</i></p>
                    <p><strong>Location</strong>: <span style={{ color: locationColor() }}>{props.location}</span></p>
                    <p><strong>Stipend</strong>: {props.stipend}</p>
                    <p className="card-text">Job Description: <span style={{ color: "gray" }}>{props.description}...</span></p>
                    <div className="input-group mb-3">
                        <a href={props.jobLink} rel="noreferrer" target="_blank" className="btn btn-sm btn-outline-dark">{applyBtnText()}</a>
                        {/* 
                        <div class="input-group-text mx-2">
                            <input class="form-check-input mt-0" type="checkbox" value="" onChange={handleCheckbox} />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
