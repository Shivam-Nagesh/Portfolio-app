const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

const form = document.forms['info-form'];

const fullname = form['fullname'];
const email = form['email'];
const subject = form['subject'];
const message = form['message'];

const section3_submit = ()=>{
    let n = true;
    let em = true;
    if (fullname.value.trim() === "")     n = false;
    if (!pattern.test(email.value.trim()))    em = false;
    if (em && n) {
        console.log({ fullname: fullname.value.trim(), email: email.value.trim(), subject: subject.value.trim(), message: message.value.trim()});
        alert("Thank you for filling the form");
            fullname.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
    } else {
        alert("error in form fillup");
        if(em === false)
            email.value = "";
    }
    return false;
}