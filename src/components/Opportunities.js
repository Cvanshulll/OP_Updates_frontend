import React, { useState, useEffect } from 'react'
import OpItems from './OpItems'
import axios from "axios";
import Spinner from './Spinner';


export default function Opportunities() {

    const [opportunities, setOpportunities] = useState([]);

    // use spinner
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        async function getAllOpportunity() {
            try {
                const opportunities = await axios.get("https://vanshul.pythonanywhere.com/")
                // console.log(opportunities.data)
                // reverse opportunities
                opportunities.data.reverse()
                setOpportunities(opportunities.data)
                setLoading(false)
            }
            catch (error) {
                console.log(error)
            }
        }
        getAllOpportunity()
    }, [])

    // function handleNextBtn() {
    //     console.log("Next button clicked")
    // }

    return (
        <div className="container my-4">
            <h1 className="text-center">Opportunities - Top Headlines</h1>
            {loading && <Spinner />}
            <div className="row">
                {opportunities.map((item) => {
                    return <div className="col-md-4 my-3" key={item.opportunity_id}>
                        <OpItems title={item.name} role={item.role.length > 36 ? item.role.slice(0, 35) : item.role} batch={item.batch} location={item.location !== "null" ? item.location : "Not Available"} stipend={item.stipend !== "null" ? item.stipend : "Not Available"} description={item.description !== "null" ? item.description.slice(0, 48) : ""} jobLink={item.job_link} />
                    </div>
                })}
            </div>
            {/* <div className="container d-flex justify-content-between">
                <button type="button" class="btn btn-dark">&larr; Previous</button>
                <button type="button" class="btn btn-dark" onClick={handleNextBtn}>Next &rarr;</button>
            </div> */}
        </div>
    )
}
