import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let current_data = {
    Temperature: 12,
    Humidity: 22,          
    Petier_Hot_Temperature: 32, 
    Petier_Hot_State: true,
    Peltier_Cold_Temperature: 11,
    Peltier_Cold_State: false,
    Water_Level: 0, 
    Pump_State: true 
};

async function ESP_API (req, res) {
    if(req.method === "GET") {
        console.log("Got It");
        console.log(req.body);
        console.log(current_data);

        // const sensorData = await prisma.teste.create({
        //     data: {
        //         Temperature: 42,
        //         Humidity: 22,          
        //         Petier_Hot_Temperature: 32, 
        //         Petier_Hot_State: true,
        //         Peltier_Cold_Temperature: 11,
        //         Peltier_Cold_State: false,
        //         Water_Level: 0, 
        //         Pump_State: true 
        //     }
        // });

        res.status(200).json(current_data);
    } else if (req.method === "POST") {
        current_data = req.body;
        console.log(current_data); 

        const sensorData = await prisma.teste.create({
            data: {
                Temperature: 70,
                Humidity: 100,          
                Petier_Hot_Temperature: 22, 
                Petier_Hot_State: true,
                Peltier_Cold_Temperature: 11,
                Peltier_Cold_State: false,
                Water_Level: 0, 
                Pump_State: false 
            }
        });

        res.status(201).send({message: 'Data Posted Successfully'});

        // const sensorData = await prisma.teste.create({
        //     data: {
        //         Temperature: current_data.Temperature,
        //         Humidity: current_data.Humidity,          
        //         Petier_Hot_Temperature: current_data.Petier_Hot_Temperature, 
        //         Petier_Hot_State: current_data.Petier_Hot_State,
        //         Peltier_Cold_Temperature: current_data.Peltier_Cold_Temperature,
        //         Peltier_Cold_State: current_data.Peltier_Cold_State,
        //         Water_Level: current_data.Water_Level, 
        //         Pump_State: current_data.Pump_State 
        //     }
        // });
    }
}

export default ESP_API; 