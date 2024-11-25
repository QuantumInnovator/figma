import React from 'react';
import Image from 'next/image';

const Companies: React.FC = () => {
  return (
    <div className="mt-10 px-4 xs:mt-40">
      {/* Container for text and logos */}
      <div className="flex flex-col items-center space-y-6 md:flex-row md:items-center md:space-y-0 md:space-x-6">
        {/* Text Section */}
        <p className="font-bold text-center xs:mt-44 md:mt-0 text-base md:text-left md:text-lg md:flex md:items-center md:flex-shrink-0">
          Trusted by 2000+ companies <br className="md:hidden" /> worldwide.
        </p>

        {/* Logos Section with Slide Animation */}
        <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start gap-6 md:gap-8 animate-slide">
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            <Image src="/L1.png" alt="Company 1" layout="fill" objectFit="contain" />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            <Image src="/L2.png" alt="Company 2" layout="fill" objectFit="contain" />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            <Image src="/L3.png" alt="Company 3" layout="fill" objectFit="contain" />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            <Image src="/L4.png" alt="Company 4" layout="fill" objectFit="contain" />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            <Image src="/L5.png" alt="Company 5" layout="fill" objectFit="contain" />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            <Image src="/L6.png" alt="Company 6" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;

