/* eslint-disable */
import banner1 from '../../assets/images/Picture.png';
import banner2 from '../../assets/images/Picture (1).png'
import banner3 from '../../assets/images/Picture (2).png';
import { useRef, useState } from "react";



const Header = () => {
    const [search, setSearch] = useState("");
    const SearchRef = useRef();

    const handleSearch = () => {
        setSearch(SearchRef.current.value)
    }

    return (
        <div className="bg-gradient-to-r from-purple-100 to-blue-200 ">
            <div className="hero min-h-screen">
                <div className="hero-content flex flex-col md:flex-row items-center justify-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Find  <span className="text-blue-600/100">Partners</span> (CAs) available online</h1>
                        <p className="py-6">CONNECT with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
                        <div className="join w-full">
                            <input ref={SearchRef} className="input input-bordered join-item" placeholder="Search by name" type="text" />
                            <button onClick={handleSearch} className="btn join-item  bg-blue-400 text-white">Search</button>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 lg:w-1/2">
                        <img src={banner1} alt="" className="w-20 lg:w-44 mt-8" />
                        <img src={banner2} alt="" className="w-20 lg:w-44 mb-6" />
                        <img src={banner3} alt="" className="w-20 lg:w-44 mt-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;