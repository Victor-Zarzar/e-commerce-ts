export const formatPrice = (price: number | null) => {
    if (!price) return "€ 0,00";

    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(price / 100);
}