export const unformartValue = (value) => value
    .replace('R$ ', '')
    .replace('.', '')
    .replace(',', '.')