const CommandForm = document.getElementById("Commande");
const Logo = document.getElementById("Logo");
const commandeTexte = document.getElementById("Commande-Texte");
const commandeLogo = document.getElementById("Commande-Logo");
let IsHome = true;
let flag = 0;
const root = ReactDOM.createRoot(document.getElementById("Content"));

const menu = {
	"Boissons alcoolisées":"MenuImages/Prestige.webp",
	"Boissons énergisantes":"MenuImages/ProRade.webp",
	"Freaky Juice":"MenuImages/FreakyJuice.webp",
	"Pain":"MenuImages/Pain.webp",
	"Plats de Riz":"MenuImages/Riz.webp",
	"Eau":"MenuImages/Eau.webp",
	"Boissons Lactées":"MenuImages/Shake.webp",
	"Jus artificiels":"MenuImages/Tampico.webp",
	"Fresco":"MenuImages/Fresco.webp",
	"Wings":"MenuImages/Wings.webp",
	"Burger":"MenuImages/Burger.webp",
	"Friandises":"MenuImages/Friandises.webp"
}
const menuAnglais = {
	"Alcoholic drinks":"MenuImages/Prestige.webp",
	"Energy drinks":"MenuImages/ProRade.webp",
	"Freaky Juice":"MenuImages/FreakyJuice.webp",
	"Bread":"MenuImages/Pain.webp",
	"Rice":"MenuImages/Riz.webp",
	"Water":"MenuImages/Eau.webp",
	"Milk drinks":"MenuImages/Shake.webp",
	"Artificial juice":"MenuImages/Tampico.webp",
	"Fresco":"MenuImages/Fresco.webp",
	"Wings":"MenuImages/Wings.webp",
	"Burger":"MenuImages/Burger.webp",
	"Treats":"MenuImages/Friandises.webp"
}

let menuArray = [];
let menuArrayAnglais = [];
for(let i = 0; i < Object.keys(menu).length; i++) {
			menuArray.push(<span id={"MI" + i} key={i+1} style={{backgroundImage: "url(" + Object.values(menu)[i] + ")" }}><span>{Object.keys(menu)[i]}</span></span>)
}
for(let i = 0; i < Object.keys(menu).length; i++) {
			menuArrayAnglais.push(<span id={"MIA" + i} key={i+10} style={{backgroundImage: "url(" + Object.values(menuAnglais)[i] + ")" }}><span>{Object.keys(menuAnglais)[i]}</span></span>)
}

const valeurs = {
	"Mission":"Offrir aux étudiants de l’ESIH un espace convivial et détendu où ils pourront déguster des mets de choix à des prix abordables et en rapport avec la qualité du service que nous proposons.",
	"La qualité":"Afin d’offrir aux étudiants un établissement de choix, la qualité se doit d’être présente, de l’accueil au remerciement, en passant par les aliments composants les plats",
	"L’excellence":"La priorité du Snack Bar  est de croître et de maintenir une performance permanente pour le bon fonctionnement du Snack Bar.",
	"La confiance":"Le personnel saura déléguer les tâches et donner sa chance aux collègues de travail afin d’adhérer à l’esprit d’équipe qui sera établi au sein de l’entreprise.",
	"La propreté":"L’établissement sera propre afin d’accueillir la clientèle comme il se doit. Chaque employé aura sa part de responsabilité en ce qui concerne le rangement et le nettoyage des lieux.",
	"La convivialité":"Entretenir une bonne atmosphère dans les rapports humains au quotidien, sera important afin de travailler dans de bonnes conditions de travail.",
	"Le respect de la nature":"Un tri des poubelles sera effectué au sein de la cuisine afin de contribuer au bienfait de la planète ainsi qu’à réduire la pollution. Les bouteilles en plastique recyclées seront données à des artisans afin qu’ils puissent les transformer en objets réutilisables."
};
const valeursAnglais = {
	"Mission":"To offer ESIH students a friendly and relaxed space where they can enjoy choice dishes at affordable prices and in line with the quality of the service we offer.",
	"Quality":"In order to offer students an institution of choice, quality must be present, from the welcome to the thanks, through the food component of the dishes",
	"Excellence":"The priority of the Snack Bar is to grow and maintain a permanent performance for the proper functioning of the Snack Bar.",
	"Trust":"The staff will be able to delegate tasks and give colleagues a chance to adhere to the team spirit that will be established within the company.",
	"Cleanliness":"The establishment will be clean in order to welcome customers as it should. Each employee will have their share of responsibility for tidying and cleaning the premises.",
	"Friendliness":"Maintaining a good atmosphere in human relations on a daily basis will be important in order to work in good working conditions.",
	"Respect for nature":"Garbage will be sorted in the kitchen to contribute to the benefit of the planet and reduce pollution. The recycled plastic bottles will be donated to artisans so they can turn them into reusable items."
};
let bottom = 
<footer id="Foot">
	<h4>Freaky Snack Bar</h4>
	<h5>La cafétéria de l’ESIH</h5>
	<h4>Adresse</h4>
	<h5>#29, deuxième ruelle nazon</h5><br/>
	<h4>Contacts</h4>
	<h5><a href="https://wa.me/50947711358"><label>Whatsapp: </label></a><a href="tel:+50947711358">+509 4771 1358</a></h5>
	<h5><a href="mailto:freakysnackbar@gmail.com"><label>Mail: </label>freakysnackbar@gmail.com</a></h5>
	<hr/>
	<h4>Visitez-nous</h4>
	<span className="logosContainer">
	<a href="https://www.tripadvisor.ca/Restaurant_Review-g147307-d23112940-Reviews-Freaky_Snack_Bar-Port_au_Prince_Ouest_Department_Haiti.html" target="_blank"><img id="TripAdvisor" src="Logos/TripAdvisor.webp"/></a>
	<a href="https://m.facebook.com/100063587293089/?locale=en_GB" target="_blank"><img id="Facebook" src="Logos/Facebook.webp"/></a>
	<a href="https://www.instagram.com/freakysnackbar/" target="_blank"><img id="Instagram" src="Logos/Instagram.webp"/></a>
	<a href="https://mobile.twitter.com/FreakySnackBar" target="_blank"><img id="Twitter" src="Logos/Twitter.webp"/></a>
	<a href="https://ht.linkedin.com/in/kervensstsauveur" target="_blank"><img id="LinkedIn" src="Logos/LinkedIn.webp"/></a>
	</span></footer>;

let bottomAnglais =
<footer id="Foot">
<h4>Freaky Snack Bar</h4>
<h5>Cafeteria of ESIH</h5>
<h4>Address</h4>
<h5>#29, deuxième ruelle nazon</h5><br/>
<h4>Contacts</h4>
<h5><a href="https://wa.me/50947711358"><label>Whatsapp: </label></a><a href="tel:+50947711358">+509 4771 1358</a></h5>
<h5><a href="mailto:freakysnackbar@gmail.com"><label>Mail: </label>freakysnackbar@gmail.com</a></h5>
<hr/>
<h4>Visit us</h4>
<span className="logosContainer">
<a href="https://www.tripadvisor.ca/Restaurant_Review-g147307-d23112940-Reviews-Freaky_Snack_Bar-Port_au_Prince_Ouest_Department_Haiti.html" target="_blank"><img id="TripAdvisor" src="Logos/TripAdvisor.webp"/></a>
<a href="https://m.facebook.com/100063587293089/?locale=en_GB" target="_blank"><img id="Facebook" src="Logos/Facebook.webp"/></a>
<a href="https://www.instagram.com/freakysnackbar/" target="_blank"><img id="Instagram" src="Logos/Instagram.webp"/></a>
<a href="https://mobile.twitter.com/FreakySnackBar" target="_blank"><img id="Twitter" src="Logos/Twitter.webp"/></a>
<a href="https://ht.linkedin.com/in/kervensstsauveur" target="_blank"><img id="LinkedIn" src="Logos/LinkedIn.webp"/></a>
</span></footer>;



function changeBillboard() {
	if(IsHome) {
		if(flag == 0) {
			root.render(<ShowHome/>)
		}else if(flag == 1) {
			console.log("**");
			root.render(<ShowHomeAnglais/>)
		}
	indexImage++
	revIndexImage--
	if(indexImage == images.length) {
		indexImage = 0
		revIndexImage = images.length - 1
	}
	indexTexte++
	if(indexTexte == Object.values(valeurs).length) {
		indexTexte = 0
	}
}
}

function ShowHome(props) {
	IsHome = true;
	commandeTexte.innerText = "Commander";
	return <div id="SubContent">
	<span className="billboard"><img className="ImageContainer" src={"FreakyImages/" + images[indexImage]} alt="Billboard" onClick={changeBillboard}/>
	<img className="ImageContainer" src={"FreakyImages/" + images[revIndexImage]} alt="Billboard" onClick={changeBillboard}/>
	</span>
	<b><span className="ValeursContainer"><h1>{Object.keys(valeurs)[indexTexte]}</h1><p>{Object.values(valeurs)[indexTexte]}</p></span></b>
	
	<img id="Annonce1" src="Annonce1.webp"/><img id="Annonce5" src="Annonce5.webp"/>
	<h1>Menu</h1>
	<div id="Menu">
		{menuArray}
	</div>
		{bottom}
	</div>
}

function ShowHomeAnglais(props) {
	IsHome = true;
	commandeTexte.innerText = "Order";
	return <div id="SubContent">
	<span className="billboard"><img className="ImageContainer" src={"FreakyImages/" + images[indexImage]} onClick={changeBillboard}/>
	<img className="ImageContainer" src={"FreakyImages/" + images[revIndexImage]} alt="Billboard" onClick={changeBillboard}/>
	</span>
	<b><span className="ValeursContainer"><h1>{Object.keys(valeursAnglais)[indexTexte]}</h1><p>{Object.values(valeursAnglais)[indexTexte]}</p></span></b>
	
	<img id="Annonce1" src="Annonce1.webp"/><img id="Annonce5" src="Annonce5.webp"/>
	<h1>Menu</h1>
	<div id="Menu">
		{menuArrayAnglais}
	</div>
		{bottomAnglais}
	</div>
}

function ShowLinks(props) {
	IsHome = false;
	commandeTexte.innerText = "Commander";
	document.getElementById("Content").style.height = "300%";
	return <span>
		<iframe src={props.path} width="100%"></iframe>
		{bottom}
	</span>
	
}


function ShowLinksAnglais(props) {
	IsHome = false;
	commandeTexte.innerText = "Order";
	document.getElementById("Content").style.height = "300%";
	return <span>
		<iframe src={props.path} width="100%"></iframe>
		{bottomAnglais}
	</span>
	
}

Logo.onclick = () => {
	if(flag == 0) {
		root.render(<ShowHome/>);
	}else if(flag == 1) {
		root.render(<ShowHomeAnglais/>);		
	}
}

commandeTexte.onclick = () => {
	if(flag == 0) {
		root.render(<ShowLinks path="https://form.jotform.com/211125842003036"/>);
	}else if(flag == 1) {
		root.render(<ShowLinksAnglais  path="https://form.jotform.com/211125842003036"/>);
	}
}
commandeLogo.onclick = () => {
	if(flag == 0) {
		commandeLogo.src = "Etats-Unis.webp";
		if(IsHome) {
			root.render(<ShowHomeAnglais/>);
		}else{
			root.render(<ShowLinksAnglais path="https://form.jotform.com/211125842003036"/>);
		}
		flag = 1;
	}else if(flag == 1) {
		commandeLogo.src = "Francais.webp";
		if(IsHome) {
			root.render(<ShowHome/>);
		}else{
			
			root.render(<ShowLinks path="https://form.jotform.com/211125842003036"/>);
		}
		flag = 0;
	}	
};
let images = ["FB_IMG_16779878719187295.webp",
"FB_IMG_16779879128356669.webp",
"FB_IMG_16780432591844855.webp",
"FB_IMG_16780432685561314.webp",
"FB_IMG_16780432860777256.webp",
"FB_IMG_16780433259262629.webp",
"FB_IMG_16780452433133819.webp",
"FB_IMG_16780688535044998.webp",
"FB_IMG_16780688786303850.webp",
"FB_IMG_16780688968326833.webp",
"FB_IMG_16780689013505134.webp",
"FB_IMG_16780689333880444.webp",
"Greggy.webp",
"Demoiselle.webp",
"Buveurs.webp"];

let indexImage = 0;
let revIndexImage = images.length - 1;
let indexTexte = 0;
if(IsHome) {
	if(flag == 0) {
		root.render(<ShowHome/>)
	}else if(flag == 1) {
		root.render(<ShowHomeAnglais/>)
	}		
}

/*let inter = window.setInterval(() => {
	if(IsHome) {
		if(flag == 0) {
			root.render(<ShowHome/>)
		}else if(flag == 1) {
						root.render(<ShowHomeAnglais/>)
		}		
		randomIndexImage = parseInt(Math.random() * images.length)
		indexTexte++
		if(indexTexte == Object.values(valeurs).length) {
			indexTexte = 0;
		}
	}
},7500)*/
window.onload = () => {
	if(flag == 0) {
		root.render(<ShowHome/>)
	}else if(flag == 1) {
		root.render(<ShowHomeAnglais/>)
	}		
}
