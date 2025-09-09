

async function fetchSales(){

    const response=await fetch("http://localhost:3000/sales");

    const data=await response.json();

    const xvalues=data.map(xValue=>xValue.x);
    const yvalues=data.map(yValue=>yValue.y);
    console.log(data);
   createScatterChart(xvalues,yvalues);
}


async function fetchVisitors(){

    const response=await fetch("http://localhost:3000/visitors");

    const data=await response.json();

     
    const yValues=data.count;
    const xValues=data.day;


    createLineChart(xValues,yValues);
   
}


async function fetchCategories(){

    const response=await fetch("http://localhost:3000/sold_products");

    const data=await response.json();

    const categories=data.category;
    const count=data.count;
   createPieChart(categories,count)
}

async function fetchTopProducts(){

    const response=await fetch("http://localhost:3000/top_products");

    const data=await response.json();

    console.log(data);


    const  xvalues=data.product;
     const  yvalues=data.count;

     createbarChart(xvalues,yvalues);
    
}


function createScatterChart(x,y){

   const canvas=document.getElementById("scatterChart");
    
   new Chart(canvas,{
    
    type:"line",
    data:{
        labels:x,
        datasets:[{
            data:y,
            label:"Sales in the past 10 days"
        }]
    }

   });

}

function createLineChart(x,y){

   const canvas=document.getElementById("lineChart");
    
   new Chart(canvas,{
    
    type:"line",
    data:{
        labels:x,
        datasets:[{
            data:y,
            label:"Number of visitors in the past 10 days"
        }]
    }

   });

}




function createPieChart(x,y){

   const canvas=document.getElementById("pieChart");
    
   new Chart(canvas,{
    
    type:"pie",
    data:{
        labels:x,
        datasets:[{
            data:y,
            label:"Top Selling Product Categories"
        }]
    }

   });

}




function createbarChart(x,y){

   const canvas=document.getElementById("barChart");
    
   new Chart(canvas,{
    type:"bar",
    data:{
        labels:x,
            datasets:[{
                data:y,
                label:"Best Selling Products"
            }],
        
    },

});


}




fetchSales();
fetchTopProducts();
fetchCategories();
 fetchVisitors();


