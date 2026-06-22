// splits the price into dollars and cents
export function splitPrice(price) {
    const [dollars, cents] = Number(price).toFixed(2).split(".");
    return { dollars, cents };
}

// readable date for the template
export function today() {
    return new Date().toLocaleDateString("en-US", {
        weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
}