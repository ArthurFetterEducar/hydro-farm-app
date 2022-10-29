import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let current_data = {
    Temperature: 0,
    Humidity: 0,          
    Petier_Hot_Temperature: 0, 
    Petier_Hot_State: false,
    Peltier_Cold_Temperature: 0,
    Peltier_Cold_State: false,
    Water_Level: 0, 
    Pump_State: false 
};

let dummy_data = {
    Temperature: 52.0,
    Humidity: 22.0,         
    Petier_Hot_Temperature: 32.0, 
    Petier_Hot_State: true,
    Peltier_Cold_Temperature: 23.0,
    Peltier_Cold_State: false,
    Water_Level: 0, 
    Pump_State:false 
};

async function ESP_API (req, res) {
    if(req.method === "GET") {
        //let dummy_variable = FindFirstDBRecord();

        console.log("Got It");
        console.log(req.body);
        console.log(current_data);

        const sensorData = await prisma.teste2.create({
            data: dummy_data
        }); 

        res.status(200).json(current_data);
    } else if (req.method === "POST") { 
        current_data = req.body; 
        console.log(current_data); 

        res.status(201).send({message: "Data Posted Successfully"}); 

        const sensorData = await prisma.teste2.create({
            data: dummy_data
        });

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