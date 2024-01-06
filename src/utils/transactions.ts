
export class TransactionsHandler {
    private path: string
    constructor() {
        this.path = ''; // Initialize the path if needed
    }
    async post(formData) {
        return await CustomClient.post(this.path, formData);
    }
    async get(formData) {
        console.log("my path", this.path)
        return await CustomClient.get(this.path, formData);
    }

    net_worth() {

        this.path = "net-worth"
        return this
    }

    transactions() {

        this.path = "transactions"
        return this
        //const { data, pending, error, refresh, status } = await CustomClient.post("transactions", formData);
    }

   investments() {

        this.path = "investments"
        return this
        //const { data, pending, error, refresh, status } = await CustomClient.post("investments", formData);
    }

   incomes() {

        this.path = "incomes"
        return this
        //const { data, pending, error, refresh, status } = await CustomClient.post("incomes", formData);
    }

   savings() {

        this.path = "savings"
        return this
        //const { data, pending, error, refresh, status } = await CustomClient.post("savings", formData);
    }
   spendings() {
        this.path = "spendings"
        return this
        //const { data, pending, error, refresh, status } = await CustomClient.post("spendings", formData);
    }

}
// path("investments/", InvestmentAPIView.as_view(), name="investments"),
// path("investments/<int:id>", InvestmentAPIView.as_view(), name="investments-individual"),
// path("incomes/", IncomeAPIView.as_view(), name="incomes"),
// path("incomes/<int:id>", IncomeAPIView.as_view(), name="incomes-individual"),
// path("spendings/", SpendAPIView.as_view(), name="spendings"),
// path("spendings/<int:id>", SpendAPIView.as_view(), name="spendings-individual"),
// path("savings/", SavingAPIView.as_view(), name="savings"),
// path("savings/<int:id>", SavingAPIView.as_view(), name="savings-individual"),
