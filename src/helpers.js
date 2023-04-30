export const waait = () => new Promise(res => setTimeout(res, Math.random() * 5000))
// colors
const generateRandomColor = () => {
    const existingBudgetLength = fetchData('budgets')?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
}

// Local storage functions
// fetches any data, given a key, in my local storage and returns it to me
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// create budget
export const createBudget = ({ name, amount }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    }
    const existingBudgets = fetchData('budgets') ?? [];
    return localStorage.setItem('budgets', JSON.stringify([...existingBudgets, newItem]))
}

// delete item
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}