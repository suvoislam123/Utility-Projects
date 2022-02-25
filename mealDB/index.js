let search= () =>{
    
    const input = document.getElementById('searchInput');
    const searchText = input.value;
    input.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    if(searchText !='')
    {
        const holder = document.getElementById('holder');
        holder.innerHTML = '';  
        fetch(url)
        .then(response => response.json())
        .then(items => placeMent(items.meals))
    }
}
let placeMent = (data)=>{
    console.log(data);
    const holder = document.getElementById('holder');
    data.forEach((d)=>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
		<div class="card h-100">
			<img src="${d.strMealThumb}" class="card-img-top" alt="...">
			<div class="card-body">
			  <h5 class="card-title">${d.strMeal}</h5>
			  <p class="card-text">${d.strInstructions.slice(0,70)}</p>
		</div>
        `;
        holder.appendChild(div);
    })
}