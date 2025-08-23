"use client";
import Image from "next/image";

const ProductFeaturesSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[1400px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Secure & Compliant */}
        <div className="bg-gray-50 rounded-3xl p-8 min-h-[400px] relative overflow-hidden">
          {/* Background circle with image */}
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/assets/images/test.png"
                alt="Security Shield"
                width={280}
                height={280}
                className="object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
              Secure &<br />
              Compliant
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-[300px]">
              Bank-grade encryption and secure workflows to protect data and
              transactions
            </p>
          </div>
        </div>

        {/* Employer Dashboard */}
        <div className="bg-white rounded-3xl p-8 min-h-[400px] relative overflow-hidden border border-gray-100">
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
              Employer
              <br />
              Dashboard
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-[320px]">
              Live insights into workforce data, salary advance requests, and
              attendance trends in one unified view
            </p>

            {/* Dashboard mockup positioned at bottom */}
            <div className="flex-1 flex items-end justify-center">
              <div className="relative w-full max-w-[350px]">
                <Image
                  src="/assets/images/Frame 23434.png"
                  alt="Dashboard Interface"
                  width={350}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Check Other Features */}
        <div className="rounded-3xl min-h-[400px] flex flex-col justify-end items-start text-left p-8 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images/Frame186349.png"
              alt="Background Pattern"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 mb-10">
            <h4 className="text-white font-semibold text-3xl lg:text-4xl leading-tight mb-8">
              Check our other
              <br />
              product features
            </h4>
            <button className="px-8 py-4 bg-[#ffb74d] hover:bg-[#ffa726] text-black font-semibold rounded-full text-lg transition-all duration-300 flex items-center gap-2">
              View More
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeaturesSection;
