async function getData(params, api) {
    const demoData = [];

    function generateData(serviceName) {
        const startDate = new Date('2023-01-01T00:00:00.000Z');
        let currentDate = new Date(startDate);

        const random = Math.random() * 40 - 20

        for (let i = 0; i < 20; i++) {
            demoData.push({
                service: serviceName,
                currency: 'usd', 
                date: currentDate.toISOString(),
                cost: Math.random(100)
            });

            currentDate.setDate(currentDate.getDate() + 1); 
        }
    }

    generateData('DataOne');
    generateData('DataTwo');

    demoData.shift()
    demoData.shift()
    demoData.shift()
    demoData.shift()
    
    return demoData
}
