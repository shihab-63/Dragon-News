import { FaBriefcase, FaGraduationCap, FaHandshake, FaGlobe } from 'react-icons/fa';

const Career = () => {
    // ডামি জব ডেটা
    const jobOpenings = [
        {
            id: 1,
            title: "Senior News Reporter",
            category: "Journalism",
            type: "Full-time",
            location: "Dhaka, Bangladesh",
            salary: "45k - 60k BDT"
        },
        {
            id: 2,
            title: "MERN Stack Developer",
            category: "Technology",
            type: "Remote",
            location: "Global",
            salary: "70k - 90k BDT"
        },
        {
            id: 3,
            title: "Social Media Manager",
            category: "Marketing",
            type: "Full-time",
            location: "Chittagong, Bangladesh",
            salary: "30k - 40k BDT"
        },
        {
            id: 4,
            title: "Video Editor",
            category: "Media",
            type: "Contract",
            location: "Dhaka, Bangladesh",
            salary: "Negotiable"
        }
    ];

    return (
        <div className="bg-white p-10 border border-gray-200 rounded-lg shadow-sm">
            
            {/* ১. হিরো সেকশন */}
            <div className="text-center mb-16 border-b pb-12">
                <h1 className="text-5xl font-extrabold text-[#403F3F] mb-6">Build Your Career with Us</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Join the Dragon News Network and be a part of the future of journalism. 
                    We are always looking for passionate storytellers, creative thinkers, 
                    and tech enthusiasts to join our global team.
                </p>
                <div className="mt-8">
                    <button className="bg-[#403F3F] text-white px-8 py-3 rounded-md font-semibold hover:bg-red-500 transition-colors duration-300">
                        View Open Positions
                    </button>
                </div>
            </div>

            {/* ২. কেন আমাদের সাথে কাজ করবেন? (Benefits) */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-[#403F3F] mb-10 text-center">Why Join Dragon News?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 bg-gray-50 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow">
                        <FaGlobe className="text-4xl text-red-500 mx-auto mb-4" />
                        <h4 className="font-bold text-lg mb-2">Global Impact</h4>
                        <p className="text-sm text-gray-600">Your stories will reach millions of readers across the globe.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow">
                        <FaGraduationCap className="text-4xl text-blue-500 mx-auto mb-4" />
                        <h4 className="font-bold text-lg mb-2">Continuous Learning</h4>
                        <p className="text-sm text-gray-600">We invest in your growth with workshops and training sessions.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow">
                        <FaHandshake className="text-4xl text-green-500 mx-auto mb-4" />
                        <h4 className="font-bold text-lg mb-2">Inclusive Culture</h4>
                        <p className="text-sm text-gray-600">A diverse workplace where every voice is heard and respected.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow">
                        <FaBriefcase className="text-4xl text-purple-500 mx-auto mb-4" />
                        <h4 className="font-bold text-lg mb-2">Work-Life Balance</h4>
                        <p className="text-sm text-gray-600">Flexible working hours and remote work options available.</p>
                    </div>
                </div>
            </div>

            {/* ৩. ওপেন পজিশন সেকশন (Current Openings) */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-[#403F3F] mb-10">Current Openings</h2>
                <div className="space-y-6">
                    {jobOpenings.map((job) => (
                        <div key={job.id} className="group border border-gray-200 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center hover:border-red-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-500 transition-colors">{job.title}</h3>
                                <div className="flex flex-wrap gap-4 mt-2 text-gray-500 text-sm">
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">{job.category}</span>
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">{job.type}</span>
                                    <span>{job.location}</span>
                                    <span className="font-semibold text-gray-700">{job.salary}</span>
                                </div>
                            </div>
                            <button className="mt-4 md:mt-0 bg-red-500 text-white px-6 py-2 rounded-md font-medium hover:bg-[#403F3F] transition-colors">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* ৪. আবেদন করার নিয়ম (Application Process) */}
            <div className="mb-20 p-8 bg-gray-900 rounded-lg text-white">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Hiring Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-500 mb-2">01</div>
                        <h4 className="text-xl font-semibold mb-2">Submit Application</h4>
                        <p className="text-gray-400 text-sm">Send your resume and portfolio via our online portal.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-500 mb-2">02</div>
                        <h4 className="text-xl font-semibold mb-2">Interviews</h4>
                        <p className="text-gray-400 text-sm">A deep dive into your skills and cultural fit with our team.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-500 mb-2">03</div>
                        <h4 className="text-xl font-semibold mb-2">Final Offer</h4>
                        <p className="text-gray-400 text-sm">Welcome to the family! Get ready to start your journey.</p>
                    </div>
                </div>
            </div>

            {/* ৫. সিটিএ / কন্টাক্ট সেকশন */}
            <div className="text-center p-10 border border-dashed border-gray-300 rounded-lg">
                <h3 className="text-2xl font-bold text-[#403F3F] mb-4">Don't see a matching role?</h3>
                <p className="text-gray-600 mb-6">
                    We are always looking for exceptional talent. If you have a unique skillset, 
                    send your resume to <span className="font-bold text-red-500">careers@dragonnews.com</span>
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Dragon News is an equal opportunity employer.</p>
            </div>
        </div>
    );
};

export default Career;