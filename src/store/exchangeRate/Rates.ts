export type Currencies = "eur" | "usd" | "gbp";

export type Rates = {
    [currency in Currencies]: number;
}
