function Zebra() {
    let rows = document.querySelectorAll('table tr:nth-child(odd)');
    rows.forEach((row) => {
        row.classList.add('zebraStripe');
    });  } 

    function Clear() {
        let rows = document.querySelectorAll('table tr:nth-child(odd)');
        rows.forEach((row) => {
            row.classList.remove('zebraStripe');
        });   
    }