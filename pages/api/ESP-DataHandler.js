import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let current_data = {
    Temperature: 0,
    Humidity: 0,          
    Peltier_Hot_Temperature: 0, 
    Peltier_Hot_State: false,
    Peltier_Cold_Temperature: 0,
    Peltier_Cold_State: false,
    Water_Level: 0, 
    Pump_State: false 
}; 

let post_request = "12";

async function ESP_API (req, res) {
    if(req.method === "GET") {
        console.log("Got It");

        res.status(200).json(current_data);
    } else if (req.method === "POST") { 
        current_data = req.body; 

        if (current_data.Peltier_Hot_State == 0) {
            current_data.Peltier_Hot_State = false;
        } else {
            current_data.Peltier_Hot_State = true;
        }

        if (current_data.Peltier_Cold_State == 0) {
            current_data.Peltier_Cold_State = false;
        } else {
            current_data.Peltier_Cold_State = true;
        }

        if (current_data.Pump_State == 0) {
            current_data.Pump_State = false;
        } else {
            current_data.Pump_State = true;
        }

        const sensorData = await prisma.teste.create({ // Não funciona
            data: {
                Temperature:                current_data.Temperature,
                Humidity:                   current_data.Humidity,
                Water_Level:                current_data.Water_Level,
                Peltier_Hot_Temperature:    current_data.Peltier_Hot_Temperature,
                Peltier_Hot_State:          current_data.Peltier_Hot_State,
                Peltier_Cold_Temperature:   current_data.Peltier_Cold_Temperature,
                Peltier_Cold_State:         current_data.Peltier_Cold_State,
                Pump_State:                 current_data.Pump_State
            }
        }); 

        res.status(201).send({message: "Posted successfully"}); 
    }
}

export default ESP_API; 