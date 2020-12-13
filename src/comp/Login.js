import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import LoginBttn from "./LoginBttn";
import Logout from "./Logout";


const useStyles = makeStyles((theme) => ({
  arrow: {
    
    position: 'absolute',
    fontSize: 7,
    width: '5em',
    height: '5em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  typography: {
    padding: theme.spacing(2),
  },
}));
export default function LoginPopup(prop) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [arrowRef, setArrowRef] = React.useState(null);
  const [arrow, setArrow] = React.useState(false); {/* true */}

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div  >
      <Popper
        {...bindPopper(prop.popupState)}
        placement="bottom"
        disablePortal={false}
        modifiers={{
          flip: {
            enabled: true,
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: "viewport",
          },
          arrow: {
            enabled: true,
            element: arrowRef,
          },
        }}
        transition
      >
         {arrow ? <span className={classes.arrow} ref={setArrowRef} /> : null}
         {
           ((prop.email) ===  undefined )?(
         
       <LoginBttn email={prop.email}/>):
      ( <Logout email={prop.email}/>)}
      </Popper>
    </div>
  );
}
