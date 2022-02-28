const searchBtn = () =>{
    const searchText = document.getElementById('input-field').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
}

const displayPhones = (phones) => {
    const resultFieldContainer = document.getElementById('result-field')
    phones.forEach(phone => {
        // console.log(phone.image)
        const div = document.createElement('div')
        div.classList.add('col')
        div.classList.add('col-lg-4')
        div.classList.add('col-sm-12')
        div.innerHTML = `
            <div class="card mb-4 p-4">
            <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h3 class="card-title">${phone.phone_name}</h3>
                <h5 class="card-title">${phone.brand}</h5>
                <button type="button" class="btn btn-primary" onclick="getPhoneId('${phone.slug}')">Show Details</button>
            </div>
            </div>
        `;
        resultFieldContainer.appendChild(div)
    })
}

const getPhoneId = (id) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.data))
}

const displayDetails =(phone) =>{
    console.log(phone)
    document.getElementById('details-field').innerHTML= `
    <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${phone.image}" class="w-75 img-fluid rounded-start my-4 mx-auto d-block" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h2 class="card-title">${phone.name}</h2>
                      <h6 class="card-title text-muted">${phone.releaseDate ? phone.releaseDate: 'Release Date Not Found'}</h6>
                      <h3 class="card-title text-muted">Main Features:</h3>
                      <p class="card-text">Chipset: ${phone.mainFeatures.chipSet}</p>
                      <p class="card-text">Display Size: ${phone.mainFeatures.displaySize}</p>
                      <p class="card-text">Memory: ${phone.mainFeatures.memory}</p>
                      <p class="card-text">Storage: ${phone.mainFeatures.storage}</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
    `;
}