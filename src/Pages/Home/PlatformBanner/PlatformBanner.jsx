import img1 from '../../../assets/images/banner/ddc6489591efcc93d660e560912d5f71.png';
import img2 from '../../../assets/images/banner/ff74462a042dcc01ebb84e02a8f73d0f.png';
import { FcSearch } from "react-icons/fc";
import { GrConnect } from "react-icons/gr";
import { GiArchiveResearch } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi2";

const PlatformBanner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex flex-row-reverse lg:w-1/2 relative'>
                    <div className='sm:hidden lg:block'>
                        <p className='absolute top-0 left-28 lg:block bg-purple-300 py-1 px-2 rounded-3xl rounded-br-none'>Hey, check out loreumipsum services. </p>
                        <p className='absolute top-12 left-28 lg:block bg-purple-300 py-1 px-2 rounded-3xl rounded-br-none'>Hey, check out loreumipsum services. </p>
                        <p className='absolute top-24 left-28 lg:block bg-purple-300 py-1 px-2 rounded-3xl rounded-br-none'>Hey, check out loreumipsum services. </p>
                        <img src={img1} className="w-44 rounded-full mb-20 shadow-2xl bg-blue-200" />
                    </div>
                    <img src={img2} className="w-44 rounded-full mt-20 shadow-2xl bg-indigo-200" />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-4xl font-bold">All-in-One platform that Makes Easier</h1>
                    <p className="py-6">We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                        <div className='flex flex-row items-center gap-2'>
                            <FcSearch className='text-5xl' />
                            <p><span className='font-bold'>SEARCH</span> for vital company information </p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <GiArchiveResearch className='text-5xl text-blue-400'/>
                            <p><span className='font-bold'>RESEARCH</span> and generate reports that drive growth  </p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <GrConnect className='text-5xl'></GrConnect>
                            <p><span className='font-bold'>CONNECT</span> with the resources to meet your business needs </p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <HiAcademicCap className='text-5xl text-blue-400'/>
                            <p><span className='font-bold'>ACADEMY</span> to give you the skills for success in your career </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlatformBanner;