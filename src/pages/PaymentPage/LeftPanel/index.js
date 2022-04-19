import Heading from "./Heading";
import DeliveryForm from "./DeliveryForm";
import { Divider } from "@material-ui/core";
import { Fragment } from "react";


export default function LeftPanel() {
    return (
        <Fragment>
            <Heading />
            <Divider variant="middle" />
            <DeliveryForm />
            <Divider variant="middle" />
        </Fragment>


    )
}