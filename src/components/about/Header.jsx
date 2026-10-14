import Title from "../global/Title";

const Header = () => {
  return (
    <div data-nav-theme="light" className="lg:px-17 px-5 min-h-screen  w-full">
      <div className="min-h-40 max-md:min-h-25" />
      <Title
        subtext={"Here’s Our Story"}
        mainText={"Unlock Your"}
        breakedText={"God-Given Potential"}
      />
      <p className="text-lg max-lg:text-md max-md:text-[14px]  font-secondary tracking-wide mb-10">
        The Elevation Church (TEC) was founded on the 10th of October 2010,
        under the leadership of Global Lead Pastors Godman and Bola Akinlabi, We
        are a global, pragmatic, forward-thinking teaching ministry focused on
        empowering her audiences/ community with biblical, practical, and
        principle-based tools to achieve significance.
      </p>
      <div
        className={`w-full rounded-2xl url font-secondary text-lg flex justify-end items-end text-white p-5   h-162.5 max-md:h-75 max-sm:h-62.5`}
      >
        <p>
          Today, as a global church with expressions in our home nation,
          Nigeria, and more springing up across the world, that commitment to
          making greatness common is as firm as always despite the multiple
          social contexts involved.
        </p>
      </div>
      <q className="text-5xl max-lg:text-3xl max-md:text-2xl max-ms:text-xl tracking-wider my-10 block font-main text-[#101e6d]">
        Most of humanity can relate with the desire for greatness. It drives
        most of our life decisions and commitments and defines us, however there
        is a higher dimension to the matter. We, as children of God, are called
        to a life of greatness activated by and intertwined impact- serving God
        and humanity.
      </q>
    </div>
  );
};

export default Header;
