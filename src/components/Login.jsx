import React from 'react';

const Login = () => {
  return (
    <div className="w-[1440px] h-[900px] relative overflow-hidden bg-white">
      <img src="/assets/Login.jpeg" className="w-[1440px] h-[900px] absolute left-0 top-0 object-cover" />
      <div className="w-[1440px] h-[900px] absolute left-0 top-0" style={{ background: "linear-gradient(46.33deg, rgba(33,33,33,0.84) 0%, rgba(66,66,66,0.24) 178.98%)" }} />
      <div className="w-[460px] h-[768px] absolute left-[728.5px] top-[132px] overflow-hidden">
        <div className="w-[460px] h-[768px]">
          <div className="w-[460px] h-[768px] absolute left-0 top-0 rounded-tl-3xl rounded-tr-3xl bg-neutral-50" />
        </div>
        <div className="flex flex-col justify-start items-start absolute left-10 top-[39.5px]">
          <p className="flex-grow-0 flex-shrink-0 w-[97px] text-[12.8px] text-left text-black">WELCOME BACK</p>
          <p className="flex-grow-0 flex-shrink-0 text-[25px] font-medium text-left text-black">Log In to your Account</p>
        </div>
        <div className="flex flex-col justify-start items-start absolute left-[39.5px] top-[123.5px] gap-4">
          <div className="flex-grow-0 flex-shrink-0 w-[380px] h-[143px]">
            <div className="w-[380px] h-[67px] relative">
              <div className="w-[380px] h-[67px] absolute left-0 top-[10.5px] rounded-lg border border-[#424242]" />
              <p className="w-[174px] absolute left-4 top-[25px] text-base text-left text-[#424242]">johnsondoe@nomail.com</p>
              <div className="w-[54px] h-[23px] absolute left-[11.17px] top-0 overflow-hidden">
                <div className="w-[54px] h-[23px] absolute left-0 top-0 bg-neutral-50" />
                <p className="w-11 absolute left-[5.55px] top-0 text-[12.8px] text-center text-[#424242]">Email</p>
              </div>
            </div>
            <div className="w-[380px] h-[67px] relative">
              <div className="w-[380px] h-[67px] absolute left-0 top-[86.5px] rounded-lg border border-[#bdbdbd]" />
              <svg
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 absolute left-[356px] top-[107px]"
                preserveAspectRatio="none"
              >
                <mask id="mask0_12_1317" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x={0} y={0} width={16} height={17}>
                  <rect y="0.5" width={16} height={16} fill="white" />
                </mask>
                <g mask="url(#mask0_12_1317)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 8.5C16 8.5 13 3 8 3C3 3 0 8.5 0 8.5C0 8.5 3 14 8 14C13 14 16 8.5 16 8.5ZM1.173 8.5C1.65652 9.23488 2.21265 9.91931 2.83301 10.543C4.12 11.832 5.88 13 8 13C10.12 13 11.879 11.832 13.168 10.543C13.7884 9.91931 14.3445 9.23487 14.828 8.5C14.3445 7.76513 13.7884 7.08069 13.168 6.457C11.879 5.168 10.12 4 8 4C5.88 4 4.12 5.168 2.83301 6.457C2.21265 7.08069 1.65652 7.76513 1.173 8.5Z" fill="#BDBDBD" />
                </g>
              </svg>
              <p className="w-[129px] absolute left-4 top-[101px] text-[12.8px] text-left text-[#424242]">Password</p>
              <div className="w-[54px] h-[23px] absolute left-[11.17px] top-[86.5px] overflow-hidden">
                <div className="w-[54px] h-[23px] absolute left-0 top-0 bg-neutral-50" />
                <p className="w-11 absolute left-[5.55px] top-0 text-[12.8px] text-center text-[#424242]">Password</p>
              </div>
            </div>
            <div className="w-[380px] h-[46px] relative">
              <div className="w-[380px] h-[46px] absolute left-0 top-[173px] bg-[#424242] rounded-lg" />
              <p className="w-[108px] text-[12.8px] text-white absolute left-4 top-[186px]">Forgot Password?</p>
            </div>
            <div className="w-[380px] h-[46px] relative">
              <button className="w-[380px] h-[46px] bg-[#00C1FC] rounded-lg text-white text-[14px] font-medium absolute left-0 top-[226px]">Log In</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start absolute left-[39.5px] bottom-10 gap-4">
          <p className="flex-grow-0 flex-shrink-0 text-[14px] font-medium text-black">Or</p>
          <div className="flex-grow-0 flex-shrink-0 w-[380px] h-[46px]">
            <button className="w-[188px] h-[46px] bg-[#3A5794] rounded-lg text-white text-[14px] font-medium absolute left-[95px] top-0">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
