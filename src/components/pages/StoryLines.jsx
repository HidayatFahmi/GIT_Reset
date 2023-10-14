import { useContext, useEffect, useState } from "react";
import { starwarsContext } from "../../App";

export default function StoryLines(){

    const [storyLine, setStoryLine] = useState("");
    const { idFilm } = useContext(starwarsContext);

    useEffect(()=>{
        const textStoryLine = () => {
            if(idFilm == 1){
                setStoryLine("Luke Skywalker embarks on a mission to rescue Princess Leia from the evil Galactic Empire. With the help of allies like Obi-Wan Kenobi and Han Solo, he joins the Rebel Alliance fight against the Empire, leading to epic battles and the destruction of the Death Star. Luke discovers his connection to the Force and becomes a hero in a classic tale of adventure and good versus evil.");
            }
            if(idFilm == 2){
                setStoryLine("In their attempt to rescue Han, Leia and her companions find themselves trapped in Cloud City. Luke arrives there and confronts Darth Vader, who reveals that he is his father, shattering Luke's beliefs. Despite ending in defeat and confusion, Luke and his friends are determined to continue their fight against the ever-strengthening Empire.");
            }
            if(idFilm == 3){
                setStoryLine(" the Rebel Alliance launches a daring mission to rescue Han Solo from the clutches of Jabba the Hutt. Meanwhile, Luke Skywalker, continuing his Jedi training, confronts the evil Emperor Palpatine. The film features epic battles both on the forest moon of Endor and in the depths of space as the Alliance strives to defeat the Empire. A critical moment occurs as Luke faces the temptation to turn to the dark side. Ultimately, the sacrifice of Darth Vader and the destruction of the second Death Star lead to the Empire's downfall and the triumph of the Rebel Alliance, bringing the original \"Star Wars\" trilogy to a thrilling conclusion.");
            }
            if(idFilm == 4){
                setStoryLine("the Galactic Republic finds itself embroiled in political turmoil as the Trade Federation blockade of Naboo triggers unrest. Jedi Knights Qui-Gon Jinn and Obi-Wan Kenobi are sent to negotiate, leading them to the discovery of young Anakin Skywalker, who possesses a strong affinity for the Force. Amidst a backdrop of political manipulation, the film delves into the mysteries surrounding Sith Lord Darth Sidious and his apprentice, Darth Maul. The story culminates in a lightsaber duel and hints at the impending rise of the Sith, setting the stage for the subsequent events in the \"Star Wars\" prequel trilogy.")
            }
    
            if(idFilm == 5){
                setStoryLine("It focuses on the formation of the Republic Army and the political tension escalating throughout the galaxy. Obi-Wan Kenobi and Anakin Skywalker, who has now become a Jedi Knight, investigate an attack on Senator Padmé Amidala. They uncover an evil plot involving Count Dooku and the cloning of soldiers for the Republic. The film portrays the love between Anakin and Padmé but also depicts the dark changes within Anakin. In the end, the film concludes with the Battle of Geonosis, marking the beginning of the Clone Wars.")
            }
            else{
                setStoryLine("It depicts the fall of Anakin Skywalker to the dark side as Darth Vader. The Clone Wars rage on, and Emperor Palpatine seizes total control. Anakin betrays to the Emperor, killing Jedi and engaging in a battle on Mustafar against Obi-Wan. The film reveals the birth of Luke and Leia and Anakin's transformation into Darth Vader. The film concludes with the Republic becoming the Galactic Empire, marking the beginning of the original \"Star Wars\" trilogy.")
            }
          }

          textStoryLine();
    },[])

    return(
        <div>
            <p>&nbsp; &nbsp; &nbsp;{storyLine}</p>
        </div>
    )
}