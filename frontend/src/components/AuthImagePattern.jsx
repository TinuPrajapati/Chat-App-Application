const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="flex-col items-center justify-center hidden w-1/2 p-5 lg:flex bg-base-200">
      <div className="grid w-[60%] h-[60%] grid-cols-3 gap-3 mb-8">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={` rounded-2xl bg-primary/10 ${i % 2 === 0 ? "animate-pulse" : ""
              }`}
          />
        ))}
      </div>
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>
      <p className="text-base-content/60">{subtitle}</p>
    </div>
  );
};

export default AuthImagePattern;
