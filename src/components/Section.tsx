interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    dark?: boolean;
  }
  
  const Section = ({ title, children, className = "", dark = false }: SectionProps) => {
    return (
      <section className={`py-20 ${dark ? "bg-brown-dark text-[#d4b4a4]" : "bg-cream"} ${className}`}>
        <div className="container mx-auto px-4">
          {dark ? <h2 className="text-4xl text-[#d4b4a4] md:text-5xl font-serif font-semibold mb-12 text-center">
            {title}
          </h2>:<h2 className="text-4xl md:text-5xl font-serif font-semibold mb-12 text-center">
            {title}
          </h2>}
          <div className="text-sm font-[500]">
            {children}
          </div>
          
        </div>
      </section>
    );
  };
  
  export default Section;