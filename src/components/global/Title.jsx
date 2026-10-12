

const Title = ({ subtext, mainText, breakedText, specialTextwithGradient, textColor="text-[#1e1e1e]" }) => {
  return (
    <>
      {subtext && (
        <p className="inline-flex font-secondary min-h-9 mb-7 items-center justify-center rounded-full border border-[#c5d51a] bg-[#f0f5fc] px-4 py-2 text-xs leading-none text-[#1e1e1e]">
          {subtext}
        </p>
      )}

      <p className={` font-primary mb-5 ${textColor}  leading-none  text-[48px] max-md:text-[30px]  font-bold  `}>
        {mainText}
        {breakedText && (
          <>
            {" "}
            <br /> {breakedText}
          </>
        )}{" "}
        <span className="bg-linear-to-r from-[#101e6d] to-[#c5d51a] bg-clip-text text-transparent">
          {specialTextwithGradient}
        </span>
      </p>
    </>
  );
};

export default Title;
