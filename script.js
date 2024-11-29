 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
           radius = parseFloat(radius);  
            if (isNaN(radius) || radius <= 0) {  
                alert("Please enter a valid positive number for the radius.");  
                return; // Exit the function if the input is invalid  
            }  

            // Calculate the area of the circle  
            const area = Math.PI * Math.pow(radius, 2);  

            // Format the result to two decimal places  
            const roundedArea = area.toFixed(2);  

            // Display the result to the user  
            alert(`The area of the circle with radius ${radius} is ${roundedArea}`);  
      
}
calculateArea();
