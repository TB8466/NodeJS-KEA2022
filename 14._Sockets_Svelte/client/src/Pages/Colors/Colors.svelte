<script>
    import io from "socket.io-client";

    const socket = io();

    let lastPerson;

    socket.on("changeColor", ({data, username}) => {
        //Dont use "Document" in Svelte
        document.body.style.backgroundColor = data;

        lastPerson = username;
    });

    function changeColor(event){
        socket.emit("colorChanged",{data: event.target.value});
    }
</script>

<div>Last person who changed the color: {lastPerson || "Unknown"}</div>
<input type="color" on:change={changeColor} />
