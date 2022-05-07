export default function formatPrice(num) {
    return num.toLocaleString(undefined, {
        maximumFractionDigits: 2
    })
}