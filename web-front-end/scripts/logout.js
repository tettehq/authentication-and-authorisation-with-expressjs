let button = document.querySelector(".logout");
button.onclick = async function() {
    console.log(button.innerHTML);
    const response = await fetch(`http://localhost:4001/auth/logout`, {
        method: "POST",
        credentials: "include"
    });
    const result = await response.json();
    // handle response
    if (result.ok) {
        alert('Successfully logged out');
        window.location.href = '/pages/index.html';
        return;
    }else{
        alert(result.message);
    }
}