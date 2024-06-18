<template>
<header>
    <div class="container">
        <h1>SEE YOU SUN</h1>
        <h2>
            Des solutions clés-en-main de recharge électrique et de production d’énergie renouvelable.
        </h2>
        <h2>
            See You Sun produit annuellement l’équivalent de la consommation électrique de la ville d’Avignon.
        </h2>
    </div>
</header>

<section class="container blocks">
    <h3>01</h3>
    <h4>Le solaire de proximité</h4>
    <ul>
        <li>Ombrière de parking</li>
        <li>Toiture solaire</li>
        <li>Bâtiment de stockage</li>
        <li>Infrastructures sportives</li>
        <li>Auvent pour bus et poids lourds</li>
        <li>Espaces délaissés</li>
    </ul>
    <button>Nos solutions</button>
    <img class="absImg" src="../public/assets/Site_Ecole_SaintGeorgesDuBois_1.jpg" alt="">
</section>

</template>

<style>
body{
    display: block;
    margin: 0;
    padding: 0;
    color:white;
    background-color: #192E49 !important;
	font-family: sans-serif;
}
main {
	margin: auto;
	padding: 1rem;
	font-size: 20px;
	line-height: 1.6;
}
.container{
	width: 80%;
	margin: 0 auto;
}
.container>h2{
	width: 50%;
}
.flex-container{
	display: flex;
	flex-direction: row;
	gap: 10px;
	justify-content: space-between;
}
.blocks{
	background-color: #2a3c53;
	width: fit-content !important;
	padding: 30px;
	padding-bottom: 100px;
}

h1{
	font-weight: 400;
	line-height: 1;
	font-size: 8em;
	text-align: left;
	margin-bottom: 0px;
}
h2{
	font-weight: 200;
}
h3{
	color: #8fa2bb;
	font-size: 4em;
	margin: 0;
	font-weight: 10;
}
h4{
	font-size: 2em;
	font-weight: 100;
	margin: 0;
}

li::marker{
	content: url(../public/assets/green-line.svg);
}
button{
	background-color: #BCCF00;
	border-radius: 0px;
	border: none;
	outline: none;
	padding: 20px;
}
button:hover{
	cursor: pointer;
}

img{
	width: 20%;
}
.absImg{
	position: absolute;
}

</style>
