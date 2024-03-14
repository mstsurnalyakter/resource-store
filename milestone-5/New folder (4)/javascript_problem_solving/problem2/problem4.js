/**
 * write a JavaScript program to get the current date.
 * Expected Output:
 * mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy ,dd/mm/yyyy
 */


const getDate = () =>{
    const date = new Date();
    const mon =
      date.getMonth() <= 9 ? "0" + date.getMonth() : "" + date.getMonth();
   const day = date.getDay() <= 9 ? "0" + date.getDay() : "" + date.getDay(); ;
   const year = date.getFullYear();
   const formatDate = `${mon}-${day}-${year}` ;
   return formatDate;

}

console.log(getDate());