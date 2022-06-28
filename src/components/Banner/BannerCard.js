import React from "react";

const BannerCard = ({ banner }) => {
  return (
    <section className="banner h-[500px] page-container mb-10">
      <div>
        <div className="w-full h-full rounded-lg relative">
          <img
            src={banner.banner_url}
            // src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/287593882_1526969601055681_7753755646664804548_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GHfXR-cIVPUAX-DB-bQ&_nc_ht=scontent-nrt1-1.xx&oh=00_AT-yHUE8_BTET4FEEuf5cB0m7Y_Oqbc6ChB2rAUwtndKkQ&oe=62AAAD7C"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-20 w-full text-white">
            {/* <h2 className="font-bold text-3xl mb-3">{banner.title}</h2> */}
            <h2 className="font-bold text-3xl mb-3">alolo</h2>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-bold">
              Mua Ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCard;
