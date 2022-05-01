import NotAllowedPage from "./NotAllowedPage";
import { Outlet, useLocation } from "react-router-dom";
export default function ProtectedPayment() {
    const { state } = useLocation()
    //temporary navigate to home page
    return state ? <Outlet /> : <NotAllowedPage />
}
