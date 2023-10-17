import { useEffect, useState } from "react";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";


const Recomanded = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("https://job-task-server-xi.vercel.app/recomanded")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
    return (
        <div className="m-20">
           <h1 className="text-3xl font-bold mb-5">Recommended for you</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products?.map(product => <ServiceCard
                    key={product._id}
                    partner={product}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Recomanded;