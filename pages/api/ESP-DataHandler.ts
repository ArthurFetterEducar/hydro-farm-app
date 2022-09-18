type Data = {
    temperature: number;
    humidity: number;
    peltier_cold_temp: number;
    peltier_hot_temp: number;
    reservoir_lvl: string;
}

let current_data: Data = {
    temperature: 0,
    humidity: 0,
    peltier_cold_temp: 0,
    peltier_hot_temp: 0,
    reservoir_lvl: "N"
}

function ESP_DataHandler (req: any, res: any) {
    if(req.method === "GET") {
        res.status(200).json(current_data);
    } else if (req.method === "POST") {
        console.log(req);
    }
}

export default ESP_DataHandler;