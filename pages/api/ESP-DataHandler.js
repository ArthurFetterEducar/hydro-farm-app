import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let current_data = {
    temperature: 0,
    humidity: 0,
    peltier_cold: 0,
    peltier_warm: 0,
    water_level: 'N'
};

async function ESP_API (req, res) {
    if(req.method === "GET") {
        console.log("Got It");

        const sensorData = await prisma.teste.create({
            data: {
                Temperature: 12,
                Humidity: 22,          
                Petier_Hot_Temperature: 32, 
                Petier_Hot_State: true,
                Peltier_Cold_Temperature: 11,
                Peltier_Cold_State: false,
                Water_Level: 0, 
                Pump_State: true 
            }
        });

        res.status(200).json(current_data);
    } else if (req.method === "POST") {
        current_data = req.body;
        console.log(current_data);

        res.status(201).send({message: 'Data Posted Successfully'});
    }
}

export default ESP_API; 