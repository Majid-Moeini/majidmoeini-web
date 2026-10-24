import PillNav from "./PillNav";
// import logo from '/path/to/logo.svg';
export default function TopBar() {
  return (
    <PillNav
      logo="/images/Micon.svg"
      logoAlt="Company Logo"
      items={[
        // { label: "Home", href: "#home" },
        { label: "About", href: "#aboutMe" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ]}
      activeHref="#home"
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="000000"
      pillColor="ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      theme="dark"
      initialLoadAnimation
    />
  );
}
