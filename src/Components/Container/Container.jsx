const Container = ({ className, children }) => {
  return (
    <div className={`${className} container mx-auto px-4 md:px-0`}>
      {children}
    </div>
  );
};

export default Container;
