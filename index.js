let message = document.getElementById("message")
let message_p = document.getElementById("message_p");

message.addEventListener("input", (event) =>
{
    let max_len = 200;
    let inp_len = event.target.value.length;
    let rem_len = max_len - inp_len;

    if (rem_len >= 0)
    {
        message_p.textContent = `Remaining ${rem_len}/200 characters allowed`;
    }
    else if(rem_len <= 0)
    {
        message_p.textContent = `Maximum Characters entered`;
        // event.preventDefault(); works only in keypress event
        message.value = message.value.slice(0, max_len);
    } 
})