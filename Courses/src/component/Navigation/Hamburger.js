import classes from "./Hamburger.module.css";
import { useState } from "react";
import Navigation from './navigation';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`${classes.hamburger} ${open && classes.open}`}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </div>
      <Navigation open={open} />
    </>
  );
};

export default Hamburger;