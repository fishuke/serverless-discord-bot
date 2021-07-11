export function formatLargeNumber(number: number) {
    const num = Math.abs(Number(number));
    return num >= 1.0e+9
        ? (num / 1.0e+9).toFixed(2) + "B"
        : num >= 1.0e+6
            ? (num / 1.0e+6).toFixed(2) + "M"
            : num >= 1.0e+3
                ? (num / 1.0e+3).toFixed(2) + "K"
                : num;
}

export function formatPercentageChange(number: number) {
    return `${(number > 0 ? '+' : '')}${(number * 100).toFixed(2)}`;
}