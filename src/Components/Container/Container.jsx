const Container = ({ className, children }) => {
  return (
    <div className={`${className} w-11/12 mx-auto px-4 md:px-0`}>
      {children}
    </div>
  );
};

export default Container;
