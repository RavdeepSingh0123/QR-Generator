const wrapper =document.querySelector(".wrapper"),
QRinput =wrapper.querySelector(".form input"),
generateBTN =wrapper.querySelector(".form button"),
qrimg =wrapper.querySelector(".qr-code img");

generateBTN.addEventListener("click",()=>{
    let qrValue =QRinput.value;
    if(!qrValue) return; //if the input is empty return from here
    generateBTN.innerText="Generating QR Code.....";
    //using an api to get qr code and passing img src to qrimg


    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrimg.addEventListener("load",()=>{//once QR code img loaded
    wrapper.classList.add("active");
    generateBTN.innerText="Generate QR Code";
    })
});
QRinput.addEventListener("keyup",()=>{
    if(!QRinput.value)
    {
        wrapper.classList.remove("active");
    }
})
