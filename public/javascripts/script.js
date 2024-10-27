const socket =io();//request connection will go to the backend

if(navigator.geolocation){//navigator is pre built in windows tocheck is geoloc avail
    navigator.geolocation.watchPosition((position)=>{//ifthe person it will watch the position of the person
        const {latitude ,longitude}=position.coords;//coordinates
        socket.emit("send-location", {latitude ,longitude});//sending the emit from frontend

    },
    (error)=>{
        console.log(error);
    },
    {
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0,
    }

    );


}

const map =L.map("map").setView([0,0], 10);//get map ana set view lat and long 0 10 level zoom

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:"openStreetMap"//can give any name
}).addTo(map)//to get the map pictue


const markers={};

socket.on("recieve-location", (data)=>{
    const {id, latitude,longitude}=data;
    map.setView([latitude,longitude],16);

    if(markers[id]){
        markers[id].setLatLng([latitude,longitude]);

    }
    else{
        markers[id]=L.marker([latitude,longitude],addTo(map));
    }
});

socket.on("user-disconnect",(id)=>{
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})