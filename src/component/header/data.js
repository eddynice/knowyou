let invoices = [{
        name: " santa monica",
        number: 1995,
        amount: "$10, 800",
        due: "12/05/1998"
    },
    {
        name: " santa monica",
        number: 34545,
        amount: "$10, 800",
        due: "12/05/1998"
    },
    {
        name: " santa monica",
        number: 1998,
        amount: "$10, 800",
        due: "12/05/1998"
    },
    {
        name: " santa monica",
        number: 10995,
        amount: "$10, 800",
        due: "12/05/1998"
    },
]
export function getInvoices() {
    return invoices
}

export function getInvoice(number) {
    return invoices.find(
        (invoice) => invoice.number === number
    )
}