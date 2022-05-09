import { useEffect, useState } from "react"
import { useSearchParams, Navigate } from "react-router-dom"
import axios from 'axios'
export default function VNPayReturnPage() {
    const [searchParams] = useSearchParams();
    const [success, seSuccess] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${process.env.REACT_APP_STRAPI_URL}/api/vnpay/return_url?${searchParams}`)
                .then(() => {
                    seSuccess(true)
                }
                )
                .catch(
                    () => seSuccess(false)
                )
        }
        fetchData()
    }, [])
    if (success === null) return null
    if (success) return <Navigate to='/order-success' replace />
    return (
        <Navigate to='/order-failure' replace />
    )
}