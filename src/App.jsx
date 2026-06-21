import { useState } from "react";
import Hero from "./components/Hero";
import SideNav from "./components/SideNav";
import SectionModal from "./components/SectionModal";

// Work sections
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";

// About & Contact
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  const [active, setActive] = useState(null); // null | "about" | "skills" | "languages" | "projects" | "certifications" | "contact"

  const open = (id) => setActive(id);
  const close = () => setActive(null);

  const getTitle = () => {
    switch (active) {
      case "about": return "About Me";
      case "skills": return "Skills & Technologies";
      case "projects": return "Projects";
      case "certifications": return "Certificates & Achievements";
      case "contact": return "Contact";
      default: return "";
    }
  };

  const renderContent = () => {
    switch (active) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "certifications":
        return (
          <>
            <Certifications />
            <Achievements />
          </>
        );
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-base min-h-screen">
      {/* Home — Hero only */}
      <Hero onOpenWork={() => open("projects")} />

      {/* Floating side navigation — always visible for easy section switching */}
      <SideNav onOpen={open} active={active} />

      {/* Single Dynamic modal view for seamless section transitions */}
      <SectionModal
        open={active !== null}
        activeSection={active}
        onChangeSection={setActive}
        onClose={close}
        title={getTitle()}
      >
        {renderContent()}
      </SectionModal>
    </div>
  );
}

