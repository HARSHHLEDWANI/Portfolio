const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-24 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;

