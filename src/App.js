import CostItem from "./components/CostItem";

function App() {

    const costs = [
        {
            date: new Date(2021, 2, 12),
            description: 'Freezer',
            amount: 999.99
        },
        {
            date: new Date(2021, 11, 15),
            description: 'Mac',
            amount: 2000.99
        },
        {
            date: new Date(2021, 3, 1),
            description: 'coat',
            amount: 100.99
        }
    ]
    return (
        <div>
            <h1>Start</h1>
            <CostItem
                date={costs[0].date}
                description={costs[0].description}
                amount={costs[0].amount}
            ></CostItem>
        </div>
    );
}

export default App;
