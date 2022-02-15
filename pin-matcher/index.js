function randomGenerator()
{
    let r = Math.round(Math.random()*9999);
    let k = r+'';
    if(k.length == 4)
    {
        console.log(r);
        return r;
    }
    else{
        return randomGenerator();
    }
}
document.getElementById('g-button').addEventListener('click',()=>{
    let r = randomGenerator();
    document.getElementById('g-input').value = r;
})
document.getElementById('numbers').addEventListener('click',(e)=>{
    let value = e.target.innerText;
    if(isNaN(value))
    {
        if(value == 'C')
        {
            document.getElementById('s-input').value = '';
        }
        else if(value == '<')
        {
            let s = document.getElementById('s-input').value;
            let arr = s.split('');
            arr.pop();
            s = arr.toString();
            let s1 = s.replaceAll(',','');
            document.getElementById('s-input').value = s1;
            console.log(arr);

        }
        else if(value == 'Submit')
        {
            const g= document.getElementById('g-input').value;
   const s = document.getElementById('s-input').value;
   if(g ==s)
   {
       document.getElementById('p-match').style.display = 'none';
       document.getElementById('p-not-match').style.display = 'block';

   }
   else{
    document.getElementById('p-match').style.display = 'block';
    document.getElementById('p-not-match').style.display = 'none';
   }
        }
    }
    else{
        document.getElementById('s-input').value += value;
    }
});


