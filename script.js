function positions(firstPlace, secondPlace, lastPlace){
let nomes = []
    
    if(firstPlace == 'Daniel') {
        nomes.push(firstPlace)
        nomes.push(secondPlace)
        nomes.push(lastPlace)

    }
    if(secondPlace == 'Daniel'){
        nomes.push(secondPlace)
        nomes.push(firstPlace)
        nomes.push(lastPlace)
    }
    if(lastPlace == 'Daniel'){
        nomes.push(firstPlace)
        nomes.push(lastPlace)
        nomes.push(secondPlace)
    }
    
    console.log(`1ª - Colocado ${nomes[0]}`)
    console.log(`2ª - Colocado ${nomes[1]}`)
    console.log(`3ª - Colocado ${nomes[2]}`)
    

}    
positions('Daniel', 'Rafael', 'Manoel')


