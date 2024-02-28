import SideBar from "../1.navigation/side-bar";
import Nav from "../1.navigation/nav";

const Section = ({ children, className = "" }) => {
  return (
    <section
      className={`shared-section flex w-full h-[90vh] relative border-4 border-accent-800 ${className}`}
    >
      <Nav />
      <div className="flex-[.3] h-full flex justify-center">
        <SideBar />
      </div>
      <div className="flex-[11.7] flex h-full items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default Section;
