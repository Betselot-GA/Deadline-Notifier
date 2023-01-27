async function fetchData() {

    const encodedParams = new URLSearchParams();
    encodedParams.append("description", "Enter receipts email");
    encodedParams.append("address", "betselotgetnet2227@gmail.com");
    encodedParams.append("apiKey", "<REQUIRED>");

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '4bf7605f28msh82fcbca15b57c59p15319cjsn3e7cbcfb6b64',
            'X-RapidAPI-Host': 'MailGunzakutynskyV1.p.rapidapi.com'
        },
        body: encodedParams
    };

    const res = await fetch('https://mailgunzakutynskyv1.p.rapidapi.com/createMailingList', options)
    const record = await res.json();

    console.log('record ',record);
}


fetchData()

function getEmailList() {
    var emailList = document.getElementById("email-list").value;
    `<a href='mailto:'>Email</>`
}

function checkDeadline() {
    let targetTable = document.getElementById('text-title').value;
    const currTime = new Date();
    console.log("hihihi ",targetTable);
    for (let i = 0; i < targetTable.rows.length; i++) {
        let targetTable = targetTable.rows[i].cells[targetTable].innerHtml;
        const targetTime = new Date(targetTable)
        
        var deadline = (targetTime.getTime() - currTime.getTime()) / 1000;
        deadline /= 60;
        deadline /= 60;
        Math.round(deadline);
        if (deadline <= 5) {
            fetchData();
        }
    } 
}
// checkDeadline()
setInterval(checkDeadline, 1000);