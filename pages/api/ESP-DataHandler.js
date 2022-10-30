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

let post_request = "12";

async function ESP_API (req, res) {
    if(req.method === "GET") {
        console.log("Got It");

        res.status(200).json(post_request.body);
    } else if (req.method === "POST") { 
        current_data = req.body; 

        post_request = req;

        const sensorData = await prisma.teste2.create({
            data: {
                Temperature:27,
                Humidity:92,
                Watel_Level:1,
                Peltier_Hot_Temperature:26,
                Peltier_Hot_State:1,
                Peltier_Cold_Temperature:23,
                Peltier_Cold_State:1,
                Pump_State:1
            } 
        }); 

        //  const sensorData = await prisma.teste_tres.create({
        //     data: {
        //         teste: "12"
        //     } 
        //  });

        res.status(201).send({message: "Posted successfully"}); 

        // const sensorData = await prisma.teste2.create({
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

        // const sensorData = await prisma.teste2.create({
        //     data: dummy_data
        // });

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