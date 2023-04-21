import React from "react";
import Button from "react-bootstrap/esm/Button";
import ComponentModal from "./modal";

interface Props {
 showModal: boolean;
 handleOpenClose:any;
 setOperation:any;
    calculate:any;
}


export default class ComponentButton extends React.Component<Props>{
    render(){
        const {showModal,handleOpenClose,calculate,setOperation}=this.props
        return(
            <>
            <Button variant="primary" onClick={handleOpenClose}>Click</Button>
            <ComponentModal showModal={showModal}
            handleOpenClose={handleOpenClose}
            calculate={calculate}
            setOperation={setOperation}
            />
            </>
        );
    }
}