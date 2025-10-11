const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      <div className="custom_bg absolute inset-0 z-0" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AppWrapper;
