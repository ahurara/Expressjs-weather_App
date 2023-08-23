const submitbtn = document.getElementById('submit');
const cityName = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const tmp = document.getElementById('tmp');
const datahide =document.querySelector('.middleLayer');

const getinfo = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;


    if (cityval === '') {
        city_name.innerText = `Absence of textual input`;
        datahide.classList.add(`data_hide`);

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=a7354c6db895a58fcd9bb7f9d4a4bf81`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(data);
            tmp.innerText = arrData[0].main.temp;
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
           

            const tempMood= arrData[0].weather[0].main;
            

            // //condition to check sunny or cloudy
            if (tempMood == "Clear") {
             temp_status.innerHTML = "<i class='fas fa-sun' style = 'color: #eccc68;' ></i> ";
            } else if (tempMood =="Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style = 'color: #f1f2f6;' ></i> ";
            } else if (tempMood =="Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style = 'color: #a4b0be;' ></i> ";
            }else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style = 'color: #f1f2f6;' ></i> ";
            }
            datahide.classList.remove(`data_hide`);
               
            }catch {
                city_name.innerText = `Kindly provide the city name accurately`;
                datahide.classList.add(`data_hide`);
            }


        }
}

    submitbtn.addEventListener('click', getinfo);

