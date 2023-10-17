import { useEffect, useState } from "react";
import ServiceCard from "../../../Shared/ServiceCard/ServiceCard";


const JoinUS = () => {
    const [partners, setPartners] = useState([]);

    useEffect(()=>{
        fetch('https://job-task-server-xi.vercel.app/partners')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPartners(data);
        })
    },[])
    return (
        <div className="m-10">
            <h1 className="text-5xl font-bold text-center">Want to  <span className="text-blue-400">Join</span> Us?</h1>
            <p className="text-center mt-5 mb-10">To remain with us, it is essential that you diligently follow the steps provided</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    partners?.map(partner => <ServiceCard
                    key={partner._id}
                    partner={partner}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default JoinUS;