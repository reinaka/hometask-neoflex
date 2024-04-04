function clearNumber(value = "") {
    return value.replace(/\D+/g, "");
}

export function formatNumberInput(value: string, maxLength: number) {
    const clearValue = clearNumber(value);
    return clearValue.slice(0, maxLength);
}

export function formatTextInput(value: string) {
    let result = [];
    for (let i = 0; i < value.length; i++) {
        value = value.toUpperCase();
        if ((value.charCodeAt(i) > 64 && value.charCodeAt(i) < 98) || value.charCodeAt(i) === 32) result.push(value[i]);
    }
    return result.join("");
}

