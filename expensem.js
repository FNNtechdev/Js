// Expense Tracker
const expenseTracker = {
    expenses: [],

    addExpense(name, amount, category) {
        const expense = {
            name,
            amount,
            category,
            date: new Date().toLocaleDateString()
        };
        this.expenses.push(expense);
        console.log("✅ Expense added:", expense);
    },

    viewExpenses() {
        if (this.expenses.length === 0) {
            console.log("No expenses recorded.");
            return;
        }
        console.log("📋 All Expenses:");
        this.expenses.forEach((exp, index) => {
            console.log(
                `${index + 1}. ${exp.name} - ${exp.amount} (${exp.category}) on ${exp.date}`
            );
        });
    },

    totalExpenses() {
        const total = this.expenses.reduce((sum, exp) => sum + exp.amount, 0);
        console.log("💰 Total Expenses:", total);
        return total;
    },

    expensesByCategory(category) {
        const filtered = this.expenses.filter(
            exp => exp.category.toLowerCase() === category.toLowerCase()
        );

        if (filtered.length === 0) {
            console.log(`No expenses found for category: ${category}`);
            return;
        }

        console.log(`📂 Expenses for ${category}:`);
        filtered.forEach(exp => {
            console.log(`- ${exp.name}: ${exp.amount}`);
        });
    }
};
