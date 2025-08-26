import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"

// Datos de las ciudades
const cities = [
    {name:"Amieirinha",population:4812946},
    {name:"Kinshasa",population:1027499},
    {name:"Blantyre",population:1992831},
    {name:"Pueblo Nuevo Viñas",population:6106658},
    {name:"Ko Si Chang",population:1258350},
    {name:"Rabak",population:5611054},
    {name:"Port-Cartier",population:2014142},
    {name:"Detroit",population:8927289},
    {name:"Medeiros Neto",population:6847563},
    {name:"Kushchëvskaya",population:4160962}
]

// Variables para el SVG
const svgHeight = 200 
const svgWidth = 600 
const margin = 30 

// Barras
d3.select(".bars") 
  .selectAll("rect")  
  .data(cities) 
  .join("rect") 
  .attr("x", function(d,i) { 
      return i * 40 - 100 
  })
  .attr("y", function(d) {
      return svgHeight - margin - d.population * 0.00004
  })
  .attr("width", 30)
  .attr("height", function(d) {
      return d.population * 0.00004
  })

// Nombres debajo de las barras
d3.select(".labels") 
  .selectAll("text") 
  .data(cities)  
  .join("text") 
  .attr("x", function(d,i) {
      return i * 40 + 50
  })
  .attr("y", svgHeight - 5)
  .attr("text-anchor", "end")
  .attr("transform", function(d,i) {
      return "rotate(-90," + (i*40+50) + "," + (svgHeight-5) + ")"
  })
  .text(function(d){
      return d.name
  })