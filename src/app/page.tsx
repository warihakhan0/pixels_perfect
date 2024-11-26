import Header from "./components/header";
import Image from "next/image";
import girl from "./girl.png";
import star from "./Star 10.png";
import brands from "./Brands.png";
import Card from "./components/Card"
import grey from "./grey.png"
import purple from "./purple.png"
import green from "./green.png"
import sale from "./Payday Sale.png"
import Flash from "./components/youngs-card"
import young1 from "./Rectangle 48.png"
import young2 from "./Rectangle 49.png"
import app from "./Frame 37.png"
import Button from "./components/Button";
import mobile from "./Group 74.png"
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <Header />
      {/* hero section */}
      <div id="main-hero-section" className="place-items-center">
        <div
          id="hero-section"
          className="mt-8 bg-[#F4F6F5] w-11/12 h-auto rounded-3xl"
        >
          <div
            id="content-hero"
            className="flex flex-col-reverse md:flex-row justify-between place-items-center"
          >
            {/* Main text of hero section */}
            <div>
              <div
                id="txt-hero"
                className="font-extrabold lg:text-4xl p-10 sm:text-xl"
              >
                <div
                  id="lets-bg"
                  className="bg-white rotate-2 p-2 sm:w-1/4 lg:w-2/4"
                >
                  <p>LET&apos;S</p>
                </div>
                <h1 className="p-2">EXPLORE</h1>
                <div
                  id="lets-bg"
                  className="bg-[#EBD96B] rotate-2 sm:w-2/4 lg:3/4"
                >
                  <p className="p-2">UNIQUE</p>
                </div>
                <h1 className="p-2">CLOTHES.</h1>
                <div className="font-medium text-lg">
                  <p className="mb-5">
                    Live for Influential and Innovative fashion!
                  </p>
                  <button
                    type="submit"
                    className="bg-black text-white p-2 rounded-md font-medium"
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
            {/* maintext div ends here */}
            <div className="relative">
              <div className="w-2/4 h-2/4 relative">
                <Image src={star} alt="star" />
                <Image
                  src={star}
                  alt="star"
                  className="top-4 left-40 absolute"
                />
                <Image
                  src={star}
                  alt="star"
                  className="top-60 left-68 absolute"
                />
                <Image
                  src={star}
                  alt="star"
                  className="top-36 right-68 absolute"
                />
              </div>
              <Image width={400} src={girl} alt="hero image" className="mt-6" />
            </div>
          </div>
        </div>
      </div>
      {/* Hero sections ends here */}
      {/* brands bar starts here */}
      <div id="brands" className=" bg-[#EBD96B] place-items-center p-2 mt-10">
        <Image src={brands} alt="brands" />
      </div>
      {/* brands bar ends here */}
      {/* New arrival starts */}
      {/* heading */}
      <div className="">
      <div className="relative">
        <h1 className="font-black text-[22.8px] my-5 mx-3 relative z-10">
          New Arrivals
        </h1>
        <div
          className="absolute bg-[#EBD96B] w-[100px] h-[10px] rounded-tl-lg rounded-br-lg top-5 left-20"
          style={{ transform: "rotate(-10deg)" }}
        ></div>
      </div>
        <div className="place-items-center md:flex-row md:justify-between m-10 flex-col flex">
        <Card
      imageSource={grey}
      product ="Hoodies & Sweatshirt"
      />
       <Card
      imageSource={purple}
      product ="Coat & Parkas"
      />
             <Card
      imageSource={green}
      product ="Tees & T-Shirt"
      />
      </div>
      </div>
      {/* New arrival ends */}
      {/* sale */}
      <Image src={sale} alt="sale" className="w-full" />
      {/* slae ends */}
      {/* youngs fav */}
      <div>
          <div className="relative">
        <h1 className="font-extrabold text-xl lg:text-3xl p-4 pt-10 relative z-10">
         Young&apos;s Favourite
        </h1>
        <div
          className="absolute bg-[#EBD96B] w-[100px] h-[10px] rounded-tl-lg rounded-br-lg top-16 left-44"
          style={{ transform: "rotate(-10deg)" }}
        ></div>
      </div>
        <div className="mx-20 flex flex-col md:flex-row md:justify-between">
          <Flash
          imageSource={young1}
          description="Trending on instagram"
          />
          <Flash
          imageSource={young2}
          description="All Under $40"
          />
        </div>
      </div>
      {/* ends here */}
      {/* mobile app */}
      <div className="flex flex-row justify-between p-10 m-10">
       <div className="w-2/4 flex flex-col justify-center">
       <h1 className="text-2xl md:text-4xl font-extrabold mb-4">DOWNLOAD APP & GET THE VOUCHER!</h1>
       <p className="font-thin mb-4 text-sm w-2/4">Get 30% off for first transaction using Rondovision mobile app for now.</p>
       <div>
        <Image src={app} width={300} alt="app" />
       </div>
       </div>
       <Image src={mobile} width={200} alt="mobile-app" />
      </div>
      {/* mobile ends */}
      <div className="bg-[#E5C643] text-white p-10 place-items-center">
        <div className="place-items-center">
          <h1 className="w-3/4 mb-2 font-bold text-3xl md:text-4xl text-center">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
          <p className="font-medium">Type your email down below and be young wild generation</p>
        </div>
        <div className="flex flex-row bg-white p-2 rounded-md mt-5">
          <input type="email" name="email" id="email" placeholder="Add your email here" className="p-2" />
         <Button
         button="SEND"
         />
        </div>
      </div>
      <Footer />
    </div>
    
  );
}
