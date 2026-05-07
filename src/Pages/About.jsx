import {
  FaEye,
  FaRocket,
  FaBuilding,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa"; // কিছু আইকন ব্যবহার করেছি, এগুলো 'npm i react-icons' দিয়ে ইন্সটল করা লাগবে

// যদি react-icons ইন্সটল করতে না চাও, তবে নিচের আইকনের বদলে টেক্সট বা SVG ব্যবহার করতে পারো।

const About = () => {
  return (
    <div className="bg-[#f3f3f3] min-h-screen">
      <div className="bg-white p-10 border border-gray-200 rounded-lg shadow-sm">
        {/* ১. মেইন হেডার এবং ইন্ট্রোডাকশন (Founding Story) */}
        <div className="text-center mb-16 border-b pb-12">
          <h1 className="text-5xl font-bold text-[#403F3F] mb-6">
            About Dragon News Network
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Establishing a standard for journalism since May 2026. We provide a
            transparent, unbiased, and fast perspective on the news that shapes
            the world, from global politics to local updates.
          </p>
          <img
            src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dragon News Headquarters"
            className="mt-12 rounded-lg shadow-md mx-auto w-full max-w-5xl h-80 object-cover"
          />
        </div>

        {/* ২. মিশন এবং ভিশন (Mission & Vision) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm flex items-start gap-6">
            <FaEye className="text-5xl text-red-500 mt-2 shrink-0" />
            <div>
              <h3 className="text-3xl font-bold text-[#403F3F] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To become the most trusted global source of information,
                pioneering a new era of journalism where truth, context, and
                clarity empower every citizen of the world to make informed
                decisions.
              </p>
            </div>
          </div>
          <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm flex items-start gap-6">
            <FaRocket className="text-5xl text-[#5ca0e9] mt-2 shrink-0" />{" "}
            {/* তোমার নীল কালার ব্যবহার করেছি */}
            <div>
              <h3 className="text-3xl font-bold text-[#403F3F] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To deliver rapid, rigorously fact-checked news that matters. We
                commit to holding power to account, giving a voice to the
                voiceless, and fostering constructive discourse on complex
                global issues.
              </p>
            </div>
          </div>
        </div>

        {/* ৩. কোর পিলারস (Core Pillars with icons) - অনেক ডিটেইলস */}
        <div className="mb-20 px-4">
          {/* হেডিং - সিম্পল ফেড-ইন ইফেক্ট */}
          <h2 className="text-4xl font-bold text-[#403F3F] mb-12 text-center">
            Our Core Pillars
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* পিলার ১ - Unwavering Integrity */}
            <div
              className="group border border-gray-100 p-8 rounded-lg bg-gray-50 text-center shadow-sm 
                                transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl hover:bg-white"
            >
              <div className="transition-transform duration-500 group-hover:scale-110">
                <FaShieldAlt className="text-6xl text-red-500 mx-auto mb-6" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-red-500">
                Unwavering Integrity
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Our first priority is the truth. We adhere to the strictest
                ethical codes of journalism, ensuring fact-checking remains.
              </p>
            </div>

            {/* পিলার ২ - Institutional Independence */}
            <div
              className="group border border-gray-100 p-8 rounded-lg bg-gray-50 text-center shadow-sm 
                                transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl hover:bg-white"
            >
              <div className="transition-transform duration-500 group-hover:scale-110">
                <FaBuilding className="text-6xl text-gray-800 mx-auto mb-6" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-blue-500">
                Institutional Independence
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Free from corporate influence or political bias, Dragon News
                remains an independent body, allowing us.
              </p>
            </div>

            {/* পিলার ৩ - Diverse Perspectives */}
            <div
              className="group border border-gray-100 p-8 rounded-lg bg-gray-50 text-center shadow-sm 
                                transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl hover:bg-white"
            >
              <div className="transition-transform duration-500 group-hover:scale-110">
                <FaUsers className="text-6xl text-[#5ca0e9] mx-auto mb-6" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-[#5ca0e9]">
                Diverse Perspectives
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We amplify diverse voices and viewpoints. Our team represents a
                wide range of backgrounds and expertise.
              </p>
            </div>
          </div>
        </div>

        {/* ৪. আমাদের টিমের বিবরণ - ডিটেইলড ডেসক্রিপশন (Short Team Intro with a profile grid) */}
        <div className="mb-20 border-t pt-16">
          <h2 className="text-4xl font-bold text-[#403F3F] mb-6 text-center">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Dragon News is led by an editorial team of veteran journalists and
            digital news pioneers dedicated to upholding our core values.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* লিডার ১ */}
            <div className="text-center border p-6 rounded-lg bg-white shadow-sm hover:border-[#5ca0e9] transition">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Editor"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-100"
              />
              <h5 className="text-xl font-semibold text-gray-800">
                Johnathan Doe
              </h5>
              <p className="text-gray-500 font-medium">Chief Editor</p>
              <p className="text-sm text-gray-600 mt-2">
                20 years experience in investigative journalism.
              </p>
            </div>
            {/* লিডার ২ */}
            <div className="text-center border p-6 rounded-lg bg-white shadow-sm hover:border-[#5ca0e9] transition">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Editor"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-100"
              />
              <h5 className="text-xl font-semibold text-gray-800">
                Sarah Jenkins
              </h5>
              <p className="text-gray-500 font-medium">
                International Correspondent
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Reports from frontline global conflict zones.
              </p>
            </div>
            {/* লিডার ৩ */}
            <div className="text-center border p-6 rounded-lg bg-white shadow-sm hover:border-[#5ca0e9] transition">
              <img
                src="https://randomuser.me/api/portraits/men/55.jpg"
                alt="Editor"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-100"
              />
              <h5 className="text-xl font-semibold text-gray-800">
                David Smith
              </h5>
              <p className="text-gray-500 font-medium">
                Tech & Innovation Lead
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Focuses on emerging technologies and digital shifts.
              </p>
            </div>
            {/* লিডার ৪ */}
            <div className="text-center border p-6 rounded-lg bg-white shadow-sm hover:border-[#5ca0e9] transition">
              <img
                src="https://randomuser.me/api/portraits/women/67.jpg"
                alt="Editor"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-100"
              />
              <h5 className="text-xl font-semibold text-gray-800">
                Linda Chen
              </h5>
              <p className="text-gray-500 font-medium">
                Head of Ethics & Standards
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Ensures every article meets our ethical guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* ৫. ইম্প্যাক্ট এবং রিচ (Impact and Reach with large numbers) */}
        <div className="mb-20 bg-gray-900 p-12 rounded-lg text-white grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-xl">
          <div>
            <p className="text-6xl font-bold text-[#5ca0e9]">5M+</p>
            <p className="text-lg font-semibold mt-2">Monthly Readers</p>
          </div>
          <div>
            <p className="text-6xl font-bold text-red-500">10K+</p>
            <p className="text-lg font-semibold mt-2">Published Articles</p>
          </div>
          <div>
            <p className="text-6xl font-bold text-[#5ca0e9]">100+</p>
            <p className="text-lg font-semibold mt-2">Correspondents</p>
          </div>
          <div>
            <p className="text-6xl font-bold text-red-500">50+</p>
            <p className="text-lg font-semibold mt-2">Global Awards</p>
          </div>
        </div>

        {/* ৬. এথিক্স এবং স্ট্যান্ডার্ডস (Ethics & Standards statement) - ডিটেইলড প্যারাগ্রাফ */}
        <div className="mb-20 border p-8 rounded-lg bg-white shadow-sm">
          <h3 className="text-3xl font-bold text-[#403F3F] mb-6">
            Commitment to Ethics & Reporting Standards
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Dragon News holds itself to the highest journalistic standards. We
            ensure fact-checking, transparency, and accuracy are paramount to
            our reporting. Our team is trained to verify every source and
            perspective, particularly in breaking news situations. We have a
            clear policy on updates, corrections, and retractions to maintain
            the integrity of our platform and keep our audience informed with
            the absolute truth.
          </p>
        </div>

        {/* ৭. কন্টাক্ট এবং সিটিএ (Detailed Contact Info and CTA) - ডিজাইন বড় করা হয়েছে */}
        <div className="mt-16 p-10 bg-gray-50 rounded-lg border border-dashed border-gray-300 text-center shadow-inner">
          <h3 className="text-2xl font-bold text-[#403F3F] mb-6">
            How to Reach Our Editorial Office
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-lg text-gray-600 font-medium">
            <div>
              <p className="text-red-500 font-bold">Email Us</p>
              <p>editor@dragonnews.com</p>
            </div>
            <div>
              <p className="text-red-500 font-bold">Call Our Office</p>
              <p>+880 1234 567890</p>
            </div>
            <div>
              <p className="text-red-500 font-bold">Main Headquarters</p>
              <p>Dhaka Global News Tower, Bangladesh</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-8 leading-relaxed">
            *For tips on stories, please email us with 'STORY TIP' in the
            subject line. We accept secure anonymous submissions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
