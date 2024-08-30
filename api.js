
function makeRequest(countryName){

    let xhr=new XMLHttpRequest();
   
    xhr.open('GET','https://restcountries.com/v3.1/name/'+countryName,true)
   
    xhr.send()
   
    return xhr;
   
   }
   
   function displayCountry(data){
   
    let html=`<article class="country">
   
    <img class="country_img" src="${data.flags.png}" />
   
    <div class="country_data">
   
    <h3 class="country_name">${data.name.common}</h3>
   
    <h4 class="country_region">${data.region}</h4>
   
    <p class="country_row"><span class="ion-ios-people"></span>${((data.population)/1000000).toFixed(2)}M people</p>
   
    <p class="country_row"><span class="ion-ios-mic"></span>${Object.values(data.languages)}</p>
   
    <p class="country_row"><span class="ion-social-usd"></span>${Object.values(data.currencies)[0].name}</p>
   
    </div>
   
    </article>
   
    `
   
    document.querySelector('.container').insertAdjacentHTML('beforeend',html)
   
   }
   
   function getCountry(){
   
    let req1=makeRequest('usa')
   
    req1.addEventListener('load',function(){
   
     let [data]=JSON.parse(req1.responseText)
   
     console.log(data)
   
     displayCountry(data)
   
     let req2=makeRequest('india')
   
     req2.addEventListener('load',function(){
   
      let [data]=JSON.parse(req2.responseText)
   
      console.log(data)
   
      displayCountry(data)
   
      let req3=makeRequest('germany')
   
      req3.addEventListener('load',function(){
   
      let [data]=JSON.parse(req3.responseText)
   
      console.log(data)
   
      displayCountry(data)
   
      })
   
     })
   
    })
   
   }
   getCountry()
   
   
   