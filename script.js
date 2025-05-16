document.addEventListener("DOMContentLoaded", () => {
    const radio1 = document.getElementById("radio1");
    const radio2 = document.getElementById("radio2");
    const radio3 = document.getElementById("radio3");
  
    const options1 = document.getElementById("options1");
    const options2 = document.getElementById("options2");
    const options3 = document.getElementById("options3")
  
    function updateDropdowns() {
      if (radio1.checked) {
        options1.style.display = "block";
        options2.style.display = "none";
        options3.style.display= "none";
      } else if (radio2.checked) {
        options1.style.display = "none";
        options2.style.display = "block";
        options3.style.display= "none";

      } else if(radio3.checked){
        options1.style.display = "none";
        options2.style.display = "none";
        options3.style.display= "block";
      }
      else {
        options1.style.display = "none";
        options2.style.display = "none";
        options3.style.display= "none";

      }
    }
  
    radio1.addEventListener("change", updateDropdowns);
    radio2.addEventListener("change", updateDropdowns);
    radio3.addEventListener("change", updateDropdowns);
  
    // Init hide all
    updateDropdowns();
  });
  