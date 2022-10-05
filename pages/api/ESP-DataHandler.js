let current_data = {
    temperature: 0,
    humidity: 0,
    peltier_cold: 0,
    peltier_warm: 0,
    water_level: 'N'
};

function ESP_API (req, res) {
    if(req.method === "GET") {
        console.log()
        res.status(200).json(current_data);
    } else if (req.method === "POST") {
        current_data = req.body;
        console.log(current_data);

        res.status(201).send({message: 'DataHandler'});
    }
}

export default ESP_API; 