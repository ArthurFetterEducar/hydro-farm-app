function ESP_dummy () {    
    const ESP_handleData = async (e) => {
        console.log('ESP-dummy');
        e.preventDefault();
        
        const data = {
            temperature: e.target.ESP_temperature.value,
            humidity: e.target.ESP_humidity.value,
            peltier_cold: e.target.ESP_peltier_cold.value,
            peltier_warm: e.target.ESP_peltier_warm.value,
            water_level: e.target.ESP_water_level.value
        };

        const JSONdata = JSON.stringify(data);

        const endpoint = 'api/ESP-DataHandler';

        const options = {
            method: 'POST', 

            headers: {
                'Content-Type': 'application/json'
            }, 

            body: JSONdata
        }

        const response = await fetch(endpoint, options);

        const result = await response.json();

        console.log(`${ result.message }`);
    } 

    return (
        <div>
            <div>
                <h1> ESP data </h1>
            </div>

            <form onSubmit={ESP_handleData}>
                <div>
                    <input type="text" id="ESP_temperature"     name="ESP_temperature"  placeholder="temperatura"                   required/>
                </div>
                <div>
                    <input type="text" id="ESP_humidity"        name="ESP_humidity"     placeholder="humidade"                      required/>
                </div>
                <div>
                    <input type="text" id="ESP_peltier_cold"    name="ESP_peltier_cold" placeholder="Peltier frio temperatura"      required/>
                </div>
                <div>
                    <input type="text" id="ESP_peltier_warm"    name="ESP_peltier_warm" placeholder="Peltier quente temperatura"    required/>
                </div>
                <div>
                    <input type="text" id="ESP_water_level"     name="ESP_water_level"  placeholder="Nível de água no reservatório" required/>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default ESP_dummy;